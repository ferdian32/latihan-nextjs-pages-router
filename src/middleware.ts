import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// membuat middleware untuk check apakah user sudah login
export function middleware(request:NextRequest) {
    const isLogin = true;
    if(isLogin) {
        return NextResponse.next();
    }else {

        return NextResponse.redirect(new URL('/auth/login',request.url));
    }
};

export const config = {
    matcher: ['/product','/product/:path*','/about']
}