import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const url = req.url;

  if (url.includes('/restricted')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
