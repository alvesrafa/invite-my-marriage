import prisma from "@/lib/prisma";
import { InputInviteDto } from "./invite.dto";

interface PaginationParams {
  page?: number;
  size?: number;
  answered: boolean;
}

export async function find(inviteId: string) {
  const invite = await prisma.invite.findFirst({
    where: {
      id: inviteId,
      answered: false,
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  return invite;
}

export async function findAll(filtros?: PaginationParams) {
  const { page, size, answered } = filtros || {};
  const invites = await prisma.invite.findMany(
    page && size
      ? {
          skip: page * size,
          take: size,
          where: {
            answered: answered,
          },
        }
      : undefined
  );
  const total = await prisma.invite.count({
    where: {
      answered: answered,
    },
  });

  return [invites, total];
}

export async function findInfo() {
  const answered = await prisma.invite.count({
    where: {
      answered: true,
    },
  });

  const answeredYes = await prisma.invite.count({
    where: {
      answered: true,
      answer: "yes",
    },
  });

  const answeredNo = await prisma.invite.count({
    where: {
      answered: true,
      answer: "no",
    },
  });

  const notAnswered = await prisma.invite.count({
    where: {
      answered: false,
    },
  });

  return {
    answered,
    answeredYes,
    answeredNo,
    notAnswered,
  };
}

export async function answerInvite({ id, answer }: InputInviteDto) {
  const invite = await prisma.invite.findUnique({
    where: {
      id,
    },
  });

  if (!invite || !invite.id) throw new Error("Convite não encontrado");

  invite.answered = true;
  invite.answer = answer;

  await prisma.invite.update({
    data: invite,
    where: {
      id: invite.id,
    },
  });
}
