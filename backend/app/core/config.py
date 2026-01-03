import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    
    MONGO_URL : str
    DB_NAME : str = "url_shortener"
    REDIS_URL: str = "redis://localhost:6379"
    PROJECT_NAME: str = "Global URL Shortener"

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()