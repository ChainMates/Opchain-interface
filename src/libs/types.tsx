export type Token = {
    name: string,
    address: string,
    symbol: string,
    decimals: number,
    chainId: number,
    logoURI: string
}

export type Option = {
    baseToken: string,
    quoteToken: string,
    strikePrice: number,
    expirationDate: string,
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

export type ThemeColors = { [index: string]: string }
