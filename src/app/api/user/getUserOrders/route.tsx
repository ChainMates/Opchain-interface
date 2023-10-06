import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json(
        [
            {
                baseTokenSym: "WETH",
                quoteTokenSym: "USDC",
                strikePrice: 2000,
                expDate: "2023-09-13",
                isAmerican: true,
                amount: 30,
                premiumPrice: 50,
            },
            {
                baseTokenSym: "WETH",
                quoteTokenSym: "USDC",
                strikePrice: 2000,
                expDate: "2023-09-13",
                isAmerican: true,
                amount: 60,
                premiumPrice: 60,
            },
            {
                baseTokenSym: "WETH",
                quoteTokenSym: "WBTC",
                strikePrice: 0.2,
                expDate: "2023-09-19",
                isAmerican: false,
                amount: 50,
                premiumPrice: 0.001,
            },
        ])
}