import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  props: {
    params: {
      inviteId: string;
    };
  }
) {
  const { inviteId } = props?.params;
  console.log("aqui?");

  if (!inviteId) throw new Error("Convite não encontrado");

  const invite = await prisma.invite.findUnique({
    where: {
      id: inviteId,
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  return NextResponse.json(invite);
}
