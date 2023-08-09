import client from "@/libs/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  // const data = await client.user.create({
  //   data: {
  //     email: "hi2",
  //     name: "hi2",
  //   },
  // });
  return NextResponse.json({ message: "hello NextJs" });
}
