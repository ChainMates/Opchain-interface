import { Dispatch, SetStateAction, Key } from "react"
import DatepickerType from "react-tailwindcss-datepicker/dist/types/index";

export enum OptionTypes {
    American,
    European,
    Both,
}


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
    id: string,
    baseTokenAddress: string,
    quoteTokenAddress: string,
    strikePrice: number,
    expDate: string,
    isAmerican: boolean,
    orders?: { buy: Order[], sell: Order[] },
}

export type UserOrder = {
    id: string,
    optionId: string,
    baseTokenAddress: string,
    quoteTokenAddress: string,
    strikePrice: number,
    expDate: string,
    isAmerican: boolean,
    size: number,
    price: number,
    type: "buy" | "sell",
}

export type Order = {
    size: number,
    price: number,
}

export type ThemeColors = {
    [index: string]: string | { [index: string]: string },
}


export type GlobalStates = {
    setDarkMode?: Dispatch<SetStateAction<boolean>>,

    isConnected?: boolean,
    chainId?: number,
    account?: string,


    options?: Option[],
    setOptions?: Dispatch<SetStateAction<Option[]>>,

    userOptions?: { maker: Option[], taker: Option[] },
    setUserOptions?: Dispatch<SetStateAction<{ maker: Option[], taker: Option[] }>>,

    userOrders?: UserOrder[],
    setUserOrders?: Dispatch<SetStateAction<UserOrder[]>>,

    baseTokens?: Set<Key>,
    setBaseTokens?: Dispatch<SetStateAction<Set<Key>>>,

    quoteTokens?: Set<Key>,
    setQuoteTokens?: Dispatch<SetStateAction<Set<Key>>>,

    type?: OptionTypes,
    setType?: Dispatch<SetStateAction<OptionTypes>>,

    minPrice?: number,
    setMinPrice?: Dispatch<SetStateAction<number>>,

    maxPrice?: number,
    setMaxPrice?: Dispatch<SetStateAction<number>>,

    priceRange?: { min: number, max: number },
    setPriceRange?: Dispatch<SetStateAction<{ min: number, max: number }>>,

    dateRange?: DatepickerType.DateValueType,
    setDateRange?: Dispatch<SetStateAction<DatepickerType.DateValueType>>,

    modalId?: string,
    setModalId?: Dispatch<SetStateAction<string>>,

    option?: Option,
    setOption?: Dispatch<SetStateAction<Option>>,
}



