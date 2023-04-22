import { ReactElement } from "react"
import Head from "next/head"

export const metadata = {
  title: "AI",
  description: "AI",
}

type LayoutProps = {
  readonly children: ReactElement
}

const GameLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="layout">{children}</div>
      </main>

      <style jsx>{`
        .layout {
          background-size: cover;
          background-position: center;
          background-image: url("/放課後の教室.jpeg");
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default GameLayout
