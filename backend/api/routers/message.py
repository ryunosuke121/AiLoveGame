from fastapi import APIRouter
from api.schemas import message
from fastapi.responses import StreamingResponse
import os
import openai
from dotenv import load_dotenv
load_dotenv()

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY")

#メッセージ配列を受け取って、chatGPTのストリーミングレスポンスを返す
@router.post("/message", response_model=message.ChatResponse)
async def post_message(
    #messageBody: list[message.ChatRequest]
    ):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant",
             "content": "The Los Angeles Dodgers won the World Series in 2020."},
            {"role": "user", "content": "Where was it played?"}
        ],
        stream=True
    )
    return StreamingResponse(response)