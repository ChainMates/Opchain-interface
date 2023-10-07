import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json({
        maker:
            [
                {
                    baseTokenAdress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                    quoteTokenAdress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                    strikePrice: 2000,
                    expDate: "2023-09-13",
                    isAmerican: true,
                },
                {
                    baseTokenAdress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                    quoteTokenAdress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                    strikePrice: 0.2,
                    expDate: "2023-09-19",
                    isAmerican: false,
                },
            ],
        taker:
            [
                {
                    baseTokenAdress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                    quoteTokenAdress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                    strikePrice: 2000,
                    expDate: "2023-09-13",
                    isAmerican: true,
                },
                {
                    baseTokenAdress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                    quoteTokenAdress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                    strikePrice: 0.2,
                    expDate: "2023-09-19",
                    isAmerican: false,
                },
            ]
    })
}