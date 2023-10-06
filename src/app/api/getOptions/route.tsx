import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from "@/utils/dbConection"



export async function GET(req: NextRequest) {

    // const searchParams = req.nextUrl.searchParams
    // const chainId = searchParams.get("chainId")
    // const db = await connectToDatabase()
    // const options = await db.collection(`optionsOf${chainId}`).find().toArray()

    //placeholder Examples
    const options = [
        {
            id: "123",
            baseTokenAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            quoteTokenAddress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
            strikePrice: 0.4,
            expDate: "2023-10-28",
            isAmerican: true,
            orders: {
                buy: [
                    {
                        size: 3,
                        price: 0.001
                    },
                    {
                        size: 2,
                        price: 0.0015
                    },
                ],
                sell: [
                    {
                        size: 6,
                        price: 0.001
                    },
                    {
                        size: 12,
                        price: 0.003
                    },
                    {
                        size: 4,
                        price: 0.002
                    },
                ]
            },
        },
        {
            id: "1234",
            baseTokenAddress: "0xf531b8f309be94191af87605cfbf600d71c2cfe0",
            quoteTokenAddress: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            strikePrice: 1.5,
            expDate: "2023-10-19",
            isAmerican: false,
            orders: {
                buy: [
                    {
                        size: 20,
                        price: 0.01
                    },
                    {
                        size: 38,
                        price: 0.035
                    },
                ],
                sell: [
                    {
                        size: 60,
                        price: 0.01
                    },
                    {
                        size: 80,
                        price: 0.03
                    },
                    {
                        size: 40,
                        price: 0.02
                    },
                ]
            },
        },
    ]
    return NextResponse.json(options)
}