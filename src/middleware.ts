import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

// membuat middleware untuk check apakah user sudah login
export function mainMiddleware(request:NextRequest) {
   const res = NextResponse.next();
   return res;
};

export default withAuth(mainMiddleware,['/profile',"/admin"])