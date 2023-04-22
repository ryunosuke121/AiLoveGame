export default function Confession(props: any) {
  const { clickChangeScreen,text } = props
  return (
    <>
      <div
        className="bg-pink-300 h-screen flex items-center justify-center"
        onClick={clickChangeScreen}
      >
        <p className="text-pink-500 text-8xl font-bold animate-bounce">{text}</p>
      </div>
    </>
  )
}
