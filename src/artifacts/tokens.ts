import { Token, crossChainToken } from "../libs/types";

export const tokenList: crossChainToken[] =
  [
    {
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      logoURI:'./tokens/wmatic.png '
,     chains: [
        {
          chainId: 137,
          address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
        },
        {
          chainId: 80001,
          address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
        },
      ]
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoURI:'./tokens/usdc.png',
      chains: [
        {
          chainId: 137,
          address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        },
        {
          chainId: 42161,
          address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        },
      ]
    },
    {
      name: 'Wrapped Bitcoin',
      symbol: 'WBTC',
      decimals: 8,
      logoURI:'./tokens/wbtc.png',
      chains: [
        {
          chainId: 137,
          address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        },
        {
          chainId: 42161,
          address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        },
        {
          chainId: 11155111,
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        },
      ]
    },
    {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoURI:'./tokens/weth.png',
      chains: [
        {
          chainId: 137,
          address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        },
        {
          chainId: 80001,
          address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
        },
        {
          chainId: 42161,
          address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        },
        {
          chainId: 11155111,
          address: '0xf531b8f309be94191af87605cfbf600d71c2cfe0',
        },
      ]
    },
    {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      logoURI:'./tokens/dai.png',
      chains: [
        {
          chainId: 137,
          address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        },
        {
          chainId: 42161,
          address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        }
      ]
    },
    {
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoURI:'./tokens/usdt.png',
      chains: [
        {
          chainId: 137,
          address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        },
        {
          chainId: 42161,
          address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        },
      ]
    }
  ]


export function getTokens(requiredChainId: number): Token[] {
  let tokens: Token[] = []
  for (const token of tokenList) {
    const chain = token.chains.find(({ chainId }) => chainId === requiredChainId)
    if (typeof chain !== "undefined")
      tokens.push({
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        logoURI: token.logoURI,
        chainId: chain.chainId,
        address: chain.address,
      })
  }
  return tokens
}