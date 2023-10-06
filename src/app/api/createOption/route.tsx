const { ethers } = require("ethers")
const { providerApiKey, privateKey } = require("@/../config.json")
const { OptionFactory } = require("@/artifacts/contracts.json")
import { getTokens } from '@/artifacts/tokens'
import dayjs from 'dayjs'

import { NextResponse } from 'next/server'


export async function POST(req: Request) {

    const body = await req.json()
    const provider = new ethers.JsonRpcProvider("https://" + providerApiKey[body.chainId])
    const wallet = new ethers.Wallet(privateKey)
    const signer = wallet.connect(provider)
    const date = dayjs(`${body.expirationDate} 23:59`, 'YY-MM-DD HH:mm')
    const timestamp = date.unix()
    const tokens = getTokens(body.chainId)
    const quoteToken = tokens.find((token) => token.address === body.quoteTokenAddress) || { decimals: 18 }

    const contract = new ethers.Contract(OptionFactory.address, OptionFactory.abi, signer)


    const option = {
        baseToken: body.baseTokenAddress,
        quoteToken: body.quoteTokenAddress,
        strikePriceRatio: BigInt(body.strikePrice * 10 ** quoteToken?.decimals),
        expirationDate: timestamp,
        isAmerican: body.isAmerican
    }

    console.log(option)
    const createdOptionAddress = await contract.createOption(option, { gasLimit: 400000 })
    await createdOptionAddress.wait()
    console.log("New option created")

    return NextResponse.json({})
}



