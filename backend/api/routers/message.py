from fastapi import APIRouter

router = APIRouter()

@router.get("/message")
async def get_message_response():
    pass