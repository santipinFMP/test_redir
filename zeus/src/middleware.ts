import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    // const response = NextResponse.next()

    // return response

    // const url = request.nextUrl.clone();

    // const isProduction = process.env.NODE_ENV === 'production' // redirect only in production
    // const requestedHost = request.headers.get('X-Forwarded-Host');
  
    // if (isProduction && requestedHost && !requestedHost.match(/example.com/)) {
    //   const host = `example.com`; // set your main domain
  
    //   const requestedPort = request.headers.get('X-Forwarded-Port');
    //   const requestedProto = request.headers.get('X-Forwarded-Proto');
  
    //   url.host = host;
    //   url.protocol = requestedProto || url.protocol;
    //   url.port = requestedPort || url.port;
  
    //   return NextResponse.redirect(url);
    // }
  
    return NextResponse.next();
}