import { useState } from "react"

export default function TalkScreen(props: any) {
  const { clickSetEnd, text, clickSetConfession, name } = props
  const [isInput, setIsInput] = useState(true)
  const completeInput = () => {
    setIsInput(!isInput)
  }
  return (
    <>
      <div>
        <div className="flex justify-between items-end">
          <img src="ジェシー.png" alt="ジェシー" />
          <button className="mr-40 mb-5" onClick={clickSetEnd || clickSetConfession}>
            <img
              src="/AFB6D7AF-2CD9-4F52-8E14-55527AD561A2-removebg-preview.png"
              alt=""
              className="h-40"
            />
          </button>
        </div>
        <div className="bg-black opacity-80">
          {isInput ? (
            <>
              <p className="text-white text-2xl px-40 pt-4">あなた</p>
              <div className="flex items-center justify-center pb-36 mt-32">
                <input className="h-10 opacity-60 w-1/3 outline-0" />
                <button className="text-white border-2 py-2 px-1 ml-5" onClick={completeInput}>
                  話しかける
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
