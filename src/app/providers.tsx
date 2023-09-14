'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Option, Token } from '@/libs/types'

export const Context = createContext({})
export const useGlobalStates = () => useContext(Context)

export function Providers({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState<boolean>(true)

  const [isWalletConnected, setWalletConnected] = useState<boolean>(false)
  const [chainId, setChainId] = useState<number>(137)

  const [baseToken, setBaseToken] = useState<string | null>()
  const [quoteToken, setQuoteToken] = useState<string | null>()
  const [optionList, setOptionList] = useState<Option[]>([
    {
      baseTokenSym: "WETH",
      quoteTokenSym: "USDC",
      strikePrice: 2000,
      expDate: "2023-09-13",
    },
    {
      baseTokenSym: "WETH",
      quoteTokenSym: "WBTC",
      strikePrice: 0.2,
      expDate: "2023-09-19",
    },
  ])


  return (
    <div className={darkMode ? "dark" : "light"}>
      <NextUIProvider>
        <Context.Provider value={{
          setDarkMode,
          isWalletConnected, setWalletConnected,
          chainId, setChainId,
          baseToken, setBaseToken,
          quoteToken, setQuoteToken,
          optionList, setOptionList,
        }}>
          {children}
        </ Context.Provider >
      </NextUIProvider>
    </div>
  )
}