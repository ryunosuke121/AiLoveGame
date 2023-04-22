from fastapi import APIRouter

router = APIRouter()

@router.get("/images")
async def create_img():
    pass