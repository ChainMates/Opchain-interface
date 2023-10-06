import { NextRequest, NextResponse } from 'next/server'
import dayjs from 'dayjs';



export async function GET(req: NextRequest) {

    const date = dayjs(`2023-10-6 23:59`, 'YY-MM-DD HH:mm')
    const timestamp = date.unix()
    console.log(timestamp)
    console.log(Math.floor((Date.now()) / 1000))

    return NextResponse.json({})
}