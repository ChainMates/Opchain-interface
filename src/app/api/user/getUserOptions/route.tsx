import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json({
        maker:
            [
                {
                    baseTokenSym: "WETH",
                    quoteTokenSym: "USDC",
                    strikePrice: 2000,
                    expDate: "2023-09-13",
                    isAmerican: true,
                },
                {
                    baseTokenSym: "WETH",
                    quoteTokenSym: "WBTC",
                    strikePrice: 0.2,
                    expDate: "2023-09-19",
                    isAmerican: false,
                },
            ],
        taker:
            [
                {
                    baseTokenSym: "WETH",
                    quoteTokenSym: "USDC",
                    strikePrice: 2000,
                    expDate: "2023-09-13",
                    isAmerican: true,
                },
                {
                    baseTokenSym: "WETH",
                    quoteTokenSym: "WBTC",
                    strikePrice: 0.2,
                    expDate: "2023-09-19",
                    isAmerican: false,
                },
            ]
    })
}