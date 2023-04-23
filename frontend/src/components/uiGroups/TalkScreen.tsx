import { Dispatch, SetStateAction, useState } from "react"

type talkType = {
  text: string
  name: string
  placeholder: string
  talkButton: string
  clickSetEnd?: () => void
  clickSetConfession?: () => void
  imageUrl: string,
  setImageUrl: Dispatch<SetStateAction<string>>
}
export default function TalkScreen(props: talkType) {
  const { clickSetEnd, text, clickSetConfession, name, placeholder, talkButton, imageUrl, setImageUrl } = props;
  const [isInput, setIsInput] = useState(true);
  const completeInput = () => {
    setIsInput(!isInput)
  };
  console.log(imageUrl);
  return (
    <>
      <div>
        <div className="flex justify-between items-end">
          <img src={imageUrl} alt="ジェシー" className="h-[500px]" />
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
          {isInput ? (
            <>
              <p className="text-white text-2xl px-40 pt-4">あなた</p>
              <div className="flex items-center justify-center pb-36 mt-32">
                <input
                  className="outline-0 px-2 focus:caret-white h-10 w-1/3 bg-black text-white text-2xl"
                  placeholder={placeholder}
                  type="text"
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
