import { Dispatch, SetStateAction, Key } from "react"

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

    baseTokens?: Set<Key>,
    setBaseTokens?: Dispatch<SetStateAction<Set<Key>>>,
    quoteTokens?: Set<Key>,
    setQuoteTokens?: Dispatch<SetStateAction<Set<Key>>>,
    minPrice?: number,
    setMinPrice?: Dispatch<SetStateAction<number>>,
    maxPrice?: number,
    setMaxPrice?: Dispatch<SetStateAction<number>>,
    priceRange?: { min: number, max: number },
    setPriceRange?: Dispatch<SetStateAction<{ min: number, max: number }>>,
    optionList?: Option[],
    setOptionList?: Dispatch<SetStateAction<Option[]>>,
}
