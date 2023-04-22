import { ReactElement } from "react";
import Head from "next/head";

export const metadata = {
  title: 'AI',
  description: 'AI',
}

type LayoutProps = {
  readonly children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
          <div className='container mx-auto p-2 pt-16'>
            {children}
          </div>
        </main>
    </>
  )
}

export default Layout;