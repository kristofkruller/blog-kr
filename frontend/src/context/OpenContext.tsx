"use client";

import React, { SetStateAction, useState, createContext } from 'react'

type OpenProviderProps = {
  children: React.ReactNode;
}

export const OpenContext = createContext<{
    open: boolean,
    isOpen: SetStateAction<any>,
    toggleOpenState: () => void
  }>({
    open: false,
    isOpen: () => {},
    toggleOpenState: () => {}
})

export const OpenProvider = ({ children }: OpenProviderProps) => {
  const [open, isOpen] = useState(false);

  const toggleOpenState = () => isOpen(!open);

  const value = {
    open,
    isOpen,
    toggleOpenState
  }
  return (
    <OpenContext.Provider value={value}>
    { children }
    </OpenContext.Provider>
  )

}