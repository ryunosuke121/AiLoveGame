from typing import Optional

from pydantic import BaseModel, Field

class ChatRequest(BaseModel):
    role: str = Field(None, example="user")
    content: str = Field(None, example="付き合ってください")

class ChatResponse(BaseModel):
    message: str = Field(None, example="付き合いましょうか")