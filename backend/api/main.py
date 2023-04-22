from fastapi import FastAPI
from api.routers import image, message

app = FastAPI()
app.include_router(image.router)
app.include_router(message.router)
