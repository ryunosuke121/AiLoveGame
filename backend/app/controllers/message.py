from fastapi import APIRouter, WebSocket
from app.schemas import message
from fastapi.responses import JSONResponse, StreamingResponse
import os
import openai
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY")

#messages配列を受け取って、chatGPTのストリーミングレスポンスを返す
@router.post("/message")
async def post_message(
    messageBody: list[message.ChatRequest]
    ):
    print(messageBody)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {'role': m.role, 'content': m.content} for m in messageBody
        ],
        stream=True
    )
    print(response)
    def iterfile():
        for chunk in response:
            if chunk:
                content = chunk['choices'][0]['delta'].get('content')
                if content:
                    print(content)
                    yield content

    return StreamingResponse(iterfile(), media_type="text/plain")