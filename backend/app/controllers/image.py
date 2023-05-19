from fastapi import APIRouter
from fastapi.responses import JSONResponse
import os
import openai
from dotenv import load_dotenv
from app.util import getImage, remBg
import base64

load_dotenv()

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY")
router = APIRouter()

# promptを元に画像生成し、rembgで背景を透過した画像を返す
@router.get("/images")
async def create_img(prompt: str):
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size='512x512',
    )
    image_url = response['data'][0]['url']
    getImage.download_img(image_url)
    remBg.remove_bg()
    # base64でエンコード->文字列に変換
    with open('static/output.png', 'rb') as f:
        base64EncodedStr = base64.b64encode(f).decode()
    return JSONResponse(status_code=200, content={'image': str(base64EncodedStr)})
