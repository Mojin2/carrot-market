import { NextRequest, NextResponse } from "next/server";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export async function POST(req: NextRequest, res: NextResponse<ResponseType>) {
  const { token } = await req.json();
  console.log(token);
  return NextResponse.json({ token }, { status: 200 });
}
