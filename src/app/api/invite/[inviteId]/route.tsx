import prisma from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";
import { InputInviteDto } from "./invite.dto";
interface RequestParams {
  params: {
    inviteId: string;
  };
}
export async function GET(request: Request, requestParams: RequestParams) {
  const { inviteId } = requestParams?.params;

  if (!inviteId) throw new Error("Convite não encontrado");

  const invite = await prisma.invite.findFirst({
    where: {
      id: inviteId,
      answered: false,
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  return NextResponse.json(invite);
}

export async function PATCH(
  request: NextRequest,
  requestParams: RequestParams
) {
  const { inviteId } = requestParams?.params;

  if (!inviteId) throw new Error("Convite não encontrado");

  const input = (await request.json()) as InputInviteDto;

  const invite = await prisma.invite.findUnique({
    where: {
      id: inviteId,
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  invite.answered = true;
  invite.answer = input.answer;

  await prisma.invite.update({
    data: invite,
    where: {
      id: invite.id,
    },
  });

  return NextResponse.json({ message: "opa" });
}
