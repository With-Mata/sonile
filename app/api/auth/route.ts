import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { env } from "@/env";
import { cookies } from "next/headers";

const SECRET_KEY = env.SECRET_KEY;
const VALID_PASSWORD = env.VALID_PASSWORD;

export const POST = async (req: NextRequest) => {
  const { password } = await req.json();

  if (password === VALID_PASSWORD) {
    // Create a signed token
    const token = jwt.sign({ authenticated: true }, SECRET_KEY, {
      expiresIn: "30d",
    });

    const response = NextResponse.json(
      { message: "Authentication successful" },
      { status: 200 }
    );

    // Set the token in a cookie
    const cookieStore = await cookies();
    cookieStore.set("auth", token, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      path: "/",
    });

    return NextResponse.json(
      { message: "Authentication successful" },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Invalid password" }, { status: 401 });
};
