import axios from "axios";
import { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import { Stream } from "stream";
import { transform } from "typescript";

const api = axios.create({
    baseURL: "http://localhost:8070",
})

//promptを送ると画像urlを返す
export const getImageUrl = async (prompt: string) => {
    const response = await api.get('/images', {
        params: {
            prompt,
        },
        timeout: 60000,
    });
    if(response.data.message == "画像の取得に成功") {
        const imageUrl = `data:image/png;base64,${response.data.image}`
        return imageUrl;
    } else {
        return response.data.message;
    }
}

//会話を開始する
export const startConversation = async () => {
    const response = await api.get('message/start');
    const talk_id: number = response.data.talk_id;
    return talk_id;
}