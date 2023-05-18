import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(req: any) {
  console.log("req", req);

  const invite = await prisma.invite.findUnique({
    where: {
      id: "id",
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  return NextResponse.json(invite);
}
