from fastapi import FastAPI, Depends, HTTPException, status, File, UploadFile
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from jose import JWTError, jwt
import shutil
from pydantic import BaseModel
from datetime import datetime, timedelta
import uvicorn
import os
from app.calculator import add, subtract, multiply, divide
from app.database import SessionLocal, engine, Base, get_db
from app import models, schemas, useroperations
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

Base.metadata.create_all(bind=engine)


SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


# Add CORS middleware
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def verify_token(token: str):
    if token != "your_actual_token":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@app.post("/register", response_model=schemas.User)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = useroperations.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user.password = get_password_hash(user.password)
    return useroperations.create_user(db=db, user=user)

@app.post("/token", response_model=schemas.Token)
def login_for_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = useroperations.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me", response_model=schemas.User)
def read_users_me(current_user: schemas.User = Depends(useroperations.get_current_user)):
    return current_user

@app.put("/users/me", response_model=schemas.User)
def update_user_me(
    user_update: schemas.UserUpdate,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(useroperations.get_current_user)
):
    return useroperations.update_user(db=db, user=current_user, user_update=user_update)

@app.get("/users/me/avatar", response_model=str)
def read_users_avatar(current_user: schemas.User = Depends(useroperations.get_current_user)):
    return f"avatars/{current_user.id}.png"

@app.post("/users/me/avatar")
async def upload_avatar(
    file: UploadFile = File(...),
    current_user: schemas.User = Depends(useroperations.get_current_user),
    db: Session = Depends(get_db)
):
    file_location = f"avatars/{current_user.id}.png"

    # Ensure the directory exists
    os.makedirs(os.path.dirname(file_location), exist_ok=True)
    
    try:
        with open(file_location, "wb+") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        print(f"Error saving file: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error saving file: {str(e)}")

    current_user.avatar = file_location
    db.commit()
    db.refresh(current_user)
    return {"filename": file.filename}

@app.get("/avatars/{user_id}")
async def get_avatar(user_id: int):
    file_path = f"avatars/{user_id}.png"
    if os.path.exists(file_path):
        return FileResponse(file_path)
    else:
        raise HTTPException(status_code=404, detail="Avatar not found")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


# Create tables on startup
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)

class CalculationRequest(BaseModel):
    a: int
    b: int

@app.post("/add")
def add_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = add(request.a, request.b)
    db_calculation = models.Calculation(operation="+", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/subtract")
def subtract_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = subtract(request.a, request.b)
    db_calculation = models.Calculation(operation="-", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/multiply")
def multiply_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = multiply(request.a, request.b)
    db_calculation = models.Calculation(operation="*", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/divide")
def divide_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = divide(request.a, request.b)
    db_calculation = models.Calculation(operation="/", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.get("/history")
def get_history(db: Session = Depends(get_db)):
    calculations = db.query(models.Calculation).all()
    return calculations

@app.get("/health")
async def health_check():
    return {"status": "UP"}