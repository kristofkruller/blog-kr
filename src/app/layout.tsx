import Header from "@root/components/header/header";

import { GlobalContextProvider } from "@root/context/GlobalContext";
import { OpenProvider } from "@root/context/OpenContext";
import '../styles/globals.scss'

import { Sora, Raleway } from "@next/font/google"

const sora = Sora({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }:{children: React.ReactNode}) {

  return (
    <html lang="en" className={`${raleway.className} ${sora.className}`}>
      <body>
      <GlobalContextProvider>
        <OpenProvider>
          <>
            <Header />
            {children}
          </>
        </OpenProvider>
      </GlobalContextProvider>
      </body>
    </html>
  )
}

