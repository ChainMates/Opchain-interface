'use client'
import { createContext, useContext, useEffect, useState } from 'react'


export const Context = createContext({})
export const useGlobalStates = () => useContext(Context)
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState(true)
  const [currentPage, setCurrentPage] = useState(true)


  return (
    <NextUIProvider>
      <Context.Provider value={{
        setDarkMode,
        currentPage, setCurrentPage,
      }}>
        {children}
      </ Context.Provider >
    </NextUIProvider>
  )
}