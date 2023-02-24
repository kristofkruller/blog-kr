import Header from "@root/components/header/header";

import GlobalStyles from "@root/styles/globalStyles";
import StyledComponentsRegistry from "lib/registry";

import { GlobalContextProvider } from "@root/context/GlobalContext";
import { OpenProvider } from "@root/context/OpenContext";
import { Suspense } from "react";

export default function RootLayout({ children }:{children: React.ReactNode}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body>
      <GlobalContextProvider>
        <OpenProvider>
          <StyledComponentsRegistry>
            <main>
              <GlobalStyles />
              <Header />
              {children}
            </main>
          </StyledComponentsRegistry>
        </OpenProvider>
      </GlobalContextProvider>
      </body>
    </html>
  )
}

