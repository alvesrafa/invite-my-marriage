import prisma from "@/lib/prisma";

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
interface PaginationParams {
  page?: number;
  size?: number;
}

export async function findAll(filtros?: PaginationParams) {
  const { page, size } = filtros || {};
  const invites = await prisma.invite.findMany(
    page && size
      ? {
          skip: page * size,
          take: size,
        }
      : undefined
  );

  return invites;
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
