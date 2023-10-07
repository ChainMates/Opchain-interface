import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json(
        [
            {
                baseTokenAddress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                quoteTokenAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                strikePrice: 2000,
                expDate: "2023-09-13",
                isAmerican: true,
                amount: 30,
                premiumPrice: 50,
            },
            {
                baseTokenAddress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                quoteTokenAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                strikePrice: 2000,
                expDate: "2023-09-13",
                isAmerican: true,
                amount: 60,
                premiumPrice: 60,
            },
            {
                baseTokenAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                quoteTokenAddress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
                strikePrice: 0.2,
                expDate: "2023-09-19",
                isAmerican: false,
                amount: 50,
                premiumPrice: 0.001,
            },
        ])
}