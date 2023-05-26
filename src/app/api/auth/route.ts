import { findUser } from "@/server/user";
import { NextRequest } from "next/server";

interface InputLogin {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body: InputLogin = await request.json();

  const user = await findUser(body.username, body.password);

  const payload = {
    sub: user.id,
    username: user.username,
  };
}
