import { useChat } from "@/lib/api"
import { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from "openai"
import { Dispatch, SetStateAction, useState } from "react"
import axios from "axios"
import { Stream } from "stream"
import { transform } from "typescript"

type talkType = {
  text: string
  setText: Dispatch<SetStateAction<string>>
  name: string
  placeholder: string
  talkButton: string
  clickSetEnd?: () => void
  clickSetConfession?: () => void
}
const type =
  "性別は女性、国は北米、年齢は22、体型は標準、髪型はショート、髪色は茶髪、タイプは可愛い系、性格は内向的、タイプはデレデレ、詳細性格は社交的で話好き"
export default function TalkScreen(props: talkType) {
  const { clickSetEnd, text, clickSetConfession, name, placeholder, talkButton, setText } = props
  //入力か応答かを判断するstate
  const [isInput, setIsInput] = useState(true)
  const [inputValue, setInputValue] = useState("")
  //入力に応じて値を変える関数
  const handleInputChabge = (e: any) => {
    setInputValue(e.target.value)
  }
  //gptに送るデータの管理
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    { role: "system", content: type },
  ])

  const addMessages = (message: ChatCompletionRequestMessage) => {
    setMessages((prev) => [...prev, message])
  }

  //入力応答を変更する関数
  const completeInput = async () => {
    addMessages({ role: "user", content: inputValue })
    setIsInput(!isInput)
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8070/message",
        data: messages,
        responseType: "stream",
      })

      const streamReader = new Stream.Transform({
        transform(chunk, encoding, callback) {
          const decodedChunk = chunk.toString()
          this.push(decodedChunk)
          callback()
        },
      })

      response.data.pipe(streamReader)

      streamReader.on("data", (chunk) => {
        setText((prev) => prev + chunk.toString("utf-8"))
      })

      streamReader.on("end", () => {
        console.log("ストリームの終了")
        addMessages({ role: "assistant", content: text })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-between items-end">
          <img src="ジェシー.png" alt="ジェシー" />
          {/*告白モードにするか、ゲームを終了するかの判断の条件分岐*/}
          {clickSetConfession ? (
            <button className="mr-40 mb-5" onClick={clickSetEnd || clickSetConfession}>
              <img
                src="/958E0078-D2F6-48BF-8D37-9BCC4E3F39F7-fotor-bg-remover-20230422235953.png"
                alt=""
                className="h-48 animate-pulse"
              />
            </button>
          ) : (
            <button className="mr-40 mb-5" onClick={clickSetEnd}>
              <img
                src="/9CF9584A-4874-45AC-A594-74F64C2A10FF-fotor-bg-remover-20230423044.png"
                alt=""
                className="h-48 animate-pulse"
              />
            </button>
          )}
        </div>
        <div className="bg-black opacity-80">
          {/*入力画面か出力画面かの判断の条件分岐 */}
          {isInput ? (
            <>
              <p className="text-white text-2xl px-40 pt-4">あなた</p>
              <div className="flex items-center justify-center pb-36 mt-32">
                <input
                  className="outline-0 px-2 focus:caret-white h-10 w-1/3 bg-black text-white text-2xl"
                  placeholder={placeholder}
                  type="text"
                  onChange={handleInputChabge}
                />
                <button className="text-white border-2 py-2 px-1 ml-5" onClick={completeInput}>
                  {talkButton}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-white text-2xl px-40 pt-4">{name}</p>
              <div className="flex pb-36 pt-32 items-center justify-center">
                <p className="text-white text-3xl text-center">{text}</p>
                <div onClick={completeInput} className="text-white text-2xl ml-10">
                  ▶︎
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
