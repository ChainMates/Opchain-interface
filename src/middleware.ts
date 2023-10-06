import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { tokenSecret } from '@/../config.json'

export async function middleware(req: NextRequest) {

    try {
        const token = req.cookies.get("staff")?.value || ""

        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(tokenSecret)
        )

        if (verified.payload["role"] !== "admin")
            throw ""

    } catch (err) {
        return NextResponse.redirect(new URL('/', req.url))
    }
}

export const config = {
    matcher: '/admin/:path*',
}