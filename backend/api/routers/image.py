from fastapi import APIRouter
from fastapi.responses import FileResponse
import os
import openai
from dotenv import load_dotenv
from api.util import getImage, remBg

load_dotenv()

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY")
router = APIRouter()

@router.get("/images")
async def create_img(prompt: str):
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size='1024x1024',
    )
    image_url = response['data'][0]['url']
    getImage.download_img(image_url)
    remBg.remove_bg()
    return FileResponse('api/public/output.png', media_type='image/png')
