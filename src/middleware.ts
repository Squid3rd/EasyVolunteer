import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/app/api/auth/route";

export async function middleware(request: NextRequest) {
  const hasAuth = request.cookies.has('session');
  console.log("hasAuth:", hasAuth);

  if(hasAuth){
    //   await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/"],
};
