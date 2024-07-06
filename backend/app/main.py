from fastapi import FastAPI, Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app.calculator import add, subtract, multiply, divide
from app.database import engine, Base, get_db
from app.models import Calculation
from sqlalchemy.orm import Session


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

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
    db_calculation = Calculation(operation="+", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/subtract")
def subtract_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = subtract(request.a, request.b)
    db_calculation = Calculation(operation="-", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/multiply")
def multiply_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = multiply(request.a, request.b)
    db_calculation = Calculation(operation="*", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.post("/divide")
def divide_numbers(request: CalculationRequest, db: Session = Depends(get_db)):
    result = divide(request.a, request.b)
    db_calculation = Calculation(operation="/", a=request.a, b=request.b, result=result)
    db.add(db_calculation)
    db.commit()
    db.refresh(db_calculation)
    return {"result": result}

@app.get("/history")
def get_history(db: Session = Depends(get_db)):
    calculations = db.query(Calculation).all()
    return calculations

@app.get("/health")
async def health_check():
    return {"status": "UP"}