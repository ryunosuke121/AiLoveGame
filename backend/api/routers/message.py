from fastapi import APIRouter
from api.schemas import message
from fastapi.responses import JSONResponse
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
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {'role': m.role, 'content': m.content} for m in messageBody
        ],
        #stream=True
    )
    # def generate_stream_response():
    #     for res in response:
    #         if 'content' in res['choices'][0]['delta']:
    #             text = res['choices'][0]['delta']['content']
    #             print(text)
    #             yield text
    return JSONResponse({'data': response['choices'][0]['message']}, status_code=200)