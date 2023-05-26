import { PrismaClient } from "@prisma/client";

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
