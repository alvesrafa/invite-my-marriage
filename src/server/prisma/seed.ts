import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.invite.createMany({
    data: [
      {
        name: "Yara",
        quantity: 3,
        guests: "Marco e Laura",
        answered: false,
      },
      {
        name: "Cristina",
        quantity: 3,
        guests: "Miguel e João Pedro",
        answered: false,
      },
      {
        name: "Cristina",
        quantity: 3,
        guests: "Miguel e João Pedro",
        answered: false,
      },
    ],
  });

  const username = process.env.MARRIEAGE_USERNAME!;
  const password = bcrypt.hashSync(process.env.MARRIEAGE_PASSWORD!, 7);
  console.log({ username, password });
  await prisma.user.create({
    data: { username, password },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
