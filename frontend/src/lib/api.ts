import axios from "axios";
import { ChatCompletionRequestMessage } from "openai";

const api = axios.create({
    baseURL: "http://localhost:8070",
})

//promptを送ると画像urlを返す
export const getImage = async (prompt: string) => {
    const response = await api.get('/images', {
        params: {
            prompt,
        },
    });
    return response.data;
}

//messagesをchatGPTの返答を返す
export const getChatMessage = async (messages: ChatCompletionRequestMessage[]) => {
    const stream = await axios({
        method: 'post',
        url: 'http://localhost:8070/message',
        data: messages,
        responseType: 'stream'
    })

    // const stream = await api.post('/message', messages);
    return stream;
}
