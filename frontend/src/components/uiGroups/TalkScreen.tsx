export default function TalkScreen(props: any) {
  const { clickSetEnd, text, clickSetConfession } = props
  return (
    <>
      <div>
        <img src="ジェシー.png" alt="ジェシー" />
        <div className="bg-black opacity-80" onClick={clickSetEnd || clickSetConfession}>
          <p className="text-white text-2xl px-40 pt-4">ジェシー</p>
          <p className="text-white pb-36 pt-32 text-3xl text-center">{text}</p>
        </div>
      </div>
    </>
  )
}
