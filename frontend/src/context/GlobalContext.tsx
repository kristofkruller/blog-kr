"use client";

import { createContext, SetStateAction, useState } from "react";

export interface DefaultContextProps {
  children: React.ReactNode
}
interface StrapiSingleGlobal {
// ...
}

//define fallbacks

export const GlobalContext = createContext<{
  strapiGlobal: StrapiSingleGlobal | null,
  setStrapiGlobal: SetStateAction<any>,
}>({
  strapiGlobal: null,
  setStrapiGlobal: () => {},
})

//provider

export const GlobalContextProvider = ({ children }: DefaultContextProps) => {
  const [strapiGlobal, setStrapiGlobal] = useState(null)

  const value = {
    strapiGlobal,
    setStrapiGlobal,
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
