import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    // TODO: Validate email and Password
    console.log({ email, password })
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success"});
}