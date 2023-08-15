import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export async function POST(req: NextRequest, res: NextResponse<ResponseType>) {
  if (req.method !== "POST") {
    return NextResponse.json({ status: 405 });
  }
  try {
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
  const { email, phone } = await req.json();
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return NextResponse.json({ ok: false }, { status: 400 }); // Bad Request
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);

  return NextResponse.json({ ok: true }, { status: 200 });
}

// user db
//   const user = await client.user.upsert({
//     where: {
//       ...payload,
//     },
//     create: {
//       name: "Anonymous",
//       ...payload,
//     },
//     update: {},
//   });
// token db
