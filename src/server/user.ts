import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function findUser(username: string, password: string) {
  const user = prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) throw new Error("Conta não encontrada");

  const valid = bcrypt.compareSync(password, user.password);

  if (!valid) throw new Error("Informações inválidas");

  return user;
}
