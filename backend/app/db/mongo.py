from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class MongoDB:
    client: AsyncIOMotorClient = None
    db = None
    
    def connect(self):
        
        try :
            self.client = AsyncIOMotorClient(
                settings.MONGO_URL,
                server_api = {'version' : '1'},
                maxPoolSize = 100,
                minPoolSize = 10
            )
            self.db = self.client[settings.DB_NAME]
            print("MongoDB Connection Established ")
        except Exception as e:
            print(f" MongoDB Connection Failed: {e}")
            raise e
    def close(self):
        if self.client:
            self.client.close()
            print("MongoDB Connection Closed")

db_client = MongoDB()
            