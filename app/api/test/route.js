import { NextResponse } from 'next/server';
export function GET(
    req,
) {
    return Response.json({ message: 'Hello from Next.js!' })
}