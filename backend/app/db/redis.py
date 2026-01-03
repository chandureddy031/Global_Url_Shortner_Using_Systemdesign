import redis.asyncio as redis
from app.core.config import settings

class RedisCache:
    
    redis_client: redis.Redis = None
    
    def connect(self):
        
        try:
            pool = redis.ConnectionPool.from_url(
                settings.REDIS_URL,
                max_connections=100,
                decode_responses=True
            )
            self.redis_client = redis.Redis(connection_pool=pool)
            print("Redis Connection Established")
            
        except Exception as e:
            print(f" Redis Connection Failed: {e}")
            raise e
        
    async def close(self):
        if self.redis_client:
            await self.redis_client.aclose()
            print(" Redis Connection Closed")
            
redis_client = RedisCache()