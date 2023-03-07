"use client";

import React, { createContext, SetStateAction, useState } from "react";

import { DefaultProps } from "blog";

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

export const GlobalContextProvider = ({ children }: DefaultProps) => {
  const [strapiGlobal, setStrapiGlobal] = useState(null)

  const value = {
    strapiGlobal,
    setStrapiGlobal,
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
