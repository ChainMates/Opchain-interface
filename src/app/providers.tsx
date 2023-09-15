'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Option } from '@/libs/types'


export const Context = createContext({})
export const useGlobalStates = () => useContext(Context)

export function Providers({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState<boolean>(true)

  const [isConnected, setConnected] = useState<boolean>(false)
  const [chainId, setChainId] = useState<number>(137)
  const [account, setAccount] = useState<string>("0x0")

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

  useEffect(() => {
    if (window?.ethereum?.isMetaMask && window?.ethereum?.isConnected()) {

      window.ethereum.request({ method: 'eth_requestAccounts' }).then(
        (accounts: string[]) => {
          if (accounts.length !== 0) {
            setAccount(accounts[0])
            setConnected(true)
          }
        }
      )

      window.ethereum.request({ method: 'eth_chainId' }).then(
        (newChainId: number) => { setChainId((parseInt(newChainId.toString()))) }
      )

    }

    window.ethereum?.on('chainChanged', (chainId: string) => { setChainId(parseInt(chainId)) });
    window.ethereum?.on('accountsChanged', (accounts: string[]) => {
      setAccount(accounts.length !== 0 ? accounts[0] : "0x0")
      setConnected(accounts.length !== 0 ? true : false)
    });
  }, [])


  return (
    <div className={darkMode ? "dark" : "light"}>
      <NextUIProvider>
        <Context.Provider value={{
          setDarkMode,
          isConnected, setConnected,
          account,
          chainId, setChainId,
          baseToken, setBaseToken,
          quoteToken, setQuoteToken,
          optionList, setOptionList,
        } as { account: string }}>
          {children}
        </ Context.Provider >
      </NextUIProvider>
    </div>
  )
}