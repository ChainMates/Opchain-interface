import { Dispatch, SetStateAction } from "react"

export type Token = {
    name: string,
    address: string,
    symbol: string,
    decimals: number,
    chainId: number,
    logoURI: string
}

export type crossChainToken = {
    name: string,
    symbol: string,
    decimals: number,
    logoURI: string
    chains: {
        chainId: number,
        address: string,
    }[]
}
export type Option = {
    baseTokenSym: string,
    quoteTokenSym: string,
    strikePrice: number,
    expDate: string,
}

export type Order = {
    size: number,
    price: number,
}

export type ThemeColors = {
    [index: string]: string | {
        DEFAULT: string,
        foreground: string,
    },
}

export type GlobalStates = {
    setDarkMode?: Dispatch<SetStateAction<boolean>>,

    isConnected?: boolean,
    chainId?: number,
    account?: string,

    baseToken?: string | null,
    setBaseToken?: Dispatch<SetStateAction<string>>,
    quoteToken?: string | null,
    setQuoteToken?: Dispatch<SetStateAction<string>>,
    optionList?: Option[],
    setOptionList?: Dispatch<SetStateAction<Option[]>>,
}
