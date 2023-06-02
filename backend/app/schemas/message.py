from typing import Optional

from pydantic import BaseModel, Field

class ChatRequest(BaseModel):
    role: str = Field(None, example="user")
    content: str = Field(None, example="付き合ってください")

class ChatResponse(BaseModel):
    message: str = Field(None, example="付き合いましょうか")

class Message(BaseModel):
    messages: list[ChatRequest] = Field(None, example=[{'role': "user", 'content': "付き合ってください"}])
    talk_id: int = Field(None, example=1)