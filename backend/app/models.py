from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Calculation(Base):
    __tablename__ = "calculations"

    id = Column(Integer, primary_key=True, index=True)
    operation = Column(String, index=True)
    a = Column(Float, nullable=False)
    b = Column(Float, nullable=False)
    result = Column(Float, nullable=False)
