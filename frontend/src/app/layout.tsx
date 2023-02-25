import Header from "@root/components/header/Header";

import { GlobalContextProvider } from "@root/context/GlobalContext";
import { OpenProvider } from "@root/context/OpenContext";
import '../styles/globals.scss'

import { Sora, Raleway } from "@next/font/google"

const sora = Sora({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }:{children: React.ReactNode}) {

  return (
    <html lang="en" className={`${raleway.className} ${sora.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body>
      <GlobalContextProvider>
        <OpenProvider>
          <main>
            <Header />
            {children}
          </main>
        </OpenProvider>
      </GlobalContextProvider>
      </body>
    </html>
  )
}

