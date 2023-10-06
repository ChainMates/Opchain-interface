'use client'
import { Key, createContext, useContext, useEffect, useState } from 'react'
import { Button, NextUIProvider } from '@nextui-org/react'
import { Option, OptionTypes, UserOrder } from '@/libs/types'
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";
import GlobalModal from '@/components/general/globalModal';
import { defaultChainId, supportedChains } from "@/artifacts/chains";
import { changeNetwork } from '@/libs/metaMask';


export const Context = createContext({})
export const useGlobalStates = () => useContext(Context)

export function Providers({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState<boolean>(true)

  const [isConnected, setConnected] = useState<boolean>(false)
  const [chainId, setChainId] = useState<number>(defaultChainId)
  const [account, setAccount] = useState<string>("0x0")

  const [options, setOptions] = useState<Option[]>([])
  const [userOptions, setUserOptions] = useState<{ maker: Option[], taker: Option[] }>({ maker: [], taker: [] })
  const [userOrders, setUserOrders] = useState<UserOrder[]>([])
  const [baseTokens, setBaseTokens] = useState<Set<Key>>(new Set([]))
  const [quoteTokens, setQuoteTokens] = useState<Set<Key>>(new Set([]))
  const [type, setType] = useState<OptionTypes>(OptionTypes.Both)
  const [minPrice, setMinPrice] = useState<number>()
  const [maxPrice, setMaxPrice] = useState<number>()
  const [dateRange, setDateRange] = useState<DatepickerType.DateValueType>({
    startDate: null,
    endDate: null,
  })

  const [modalId, setModalId] = useState<string>("")
  const [option, setOption] = useState<Option>()

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

    fetch(`/api/getOptions?chainId=${chainId}`, { method: "GET" }).then((res) => res.json().then((newOptions) => { setOptions(newOptions) }))

  }, [])

  useEffect(() => {

    fetch("/api/user/getUserOptions", { method: "GET" }).then((res) => res.json().then((newOptions) => { setUserOptions(newOptions) }))
    fetch("/api/user/getUserOrders", { method: "GET" }).then((res) => res.json().then((newOrders) => { setUserOrders(newOrders) }))

  }, [account])

  
  return (
    <div className={darkMode ? "dark" : "light"}>
      <NextUIProvider>
        <Context.Provider value={{
          setDarkMode,
          isConnected, setConnected,
          account,
          chainId, setChainId,
          baseTokens, setBaseTokens,
          quoteTokens, setQuoteTokens,
          type, setType,
          options, setOptions,
          userOptions, setUserOptions,
          userOrders, setUserOrders,
          minPrice, setMinPrice,
          maxPrice, setMaxPrice,
          dateRange, setDateRange,
          modalId, setModalId,
          option, setOption,
        }}>
          {children}
          {
            supportedChains.includes(chainId) ? "" :
              <div className='absolute top-0 left-0 h-full w-full bg-black/80 flex flex-col justify-center items-center gap-unit-7 text-center text-xl'>
                <p className="max-w-[60%]">
                  To use our beta service, you'll need to connect your MetaMask wallet to the Sepolia test network. We're currently testing on Sepolia before our full launch.
                </p>
                <Button color="primary" onPress={() => { changeNetwork() }} >Change to Sepolia</Button>
              </div>
          }
          <GlobalModal />
        </ Context.Provider >
      </NextUIProvider>
    </div>
  )
}