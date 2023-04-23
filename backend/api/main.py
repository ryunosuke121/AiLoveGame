from fastapi import FastAPI
from api.routers import image, message
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.include_router(image.router)
app.include_router(message.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # すべてのオリジンを許可する場合。実際のデプロイ時には、信頼できるオリジンのみを許可することをお勧めします。
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可する場合。
    allow_headers=["*"],  # すべてのHTTPヘッダーを許可する場合。
)