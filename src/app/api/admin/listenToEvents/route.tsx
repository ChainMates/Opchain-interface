const { ethers } = require("ethers")
const { providerApiKey } = require("@/../config.json")
const { OptionFactory } = require("@/artifacts/contracts.json")
import { getTokens } from "@/artifacts/tokens"
import { connectToDatabase } from "@/utils/dbConection"
import { NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { supportedChains } from "@/artifacts/chains"


export async function GET() {

    try {


        const db = await connectToDatabase()


        for (const chainId of supportedChains) {

            const provider = new ethers.JsonRpcProvider("https://" + providerApiKey[chainId])

            const contract = new ethers.Contract(OptionFactory.address, OptionFactory.abi, provider)

            const tokens = getTokens(chainId)
            const token = tokens.find((token) => token.chainId === chainId)
            const decimals = token?.decimals || 18
            
            console.log(await contract.broker())

            contract.on('OptionCreated', (
                baseToken: string,
                quoteToken: string,
                strikePriceRatio: bigint,
                expirationDate: bigint,
                isAmerican: boolean,
                OptionAddress: string
            ) => {

                console.log(baseToken)
                console.log(quoteToken)
                console.log(strikePriceRatio)
                console.log(expirationDate)
                console.log(isAmerican)
                console.log(OptionAddress)


                db.collection(`optionsOf${chainId}`).insertOne({
                    id: nanoid(),
                    baseTokenAddress: baseToken,
                    quoteTokenAddress: quoteToken,
                    strikePrice: Number(strikePriceRatio / BigInt(10 ** decimals)),
                    expDate: new Date(Number(expirationDate * BigInt(1000))).toISOString().slice(0, 10),
                    isAmerican,
                    address: OptionAddress
                })

            });

        }

        return NextResponse.json({ "Status": "Listening" })

    } catch (err) {
        console.error(err)
    }
}



