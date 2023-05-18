import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.invite.createMany({
    data: [
      { name: "Ailton", quantity: 3, guests: "Natalia e JP", answered: false },
      { name: "Aryel", quantity: 2, guests: "Cris", answered: false },
      {
        name: "Candida",
        quantity: 3,
        guests: "Daniel e Cládio",
        answered: false,
      },
      {
        name: "Carlin",
        quantity: 2,
        guests: "Carlos e Amanda",
        answered: false,
      },
      {
        name: "Carlos",
        quantity: 3,
        guests: "Mãe e Bea,FALSE",
        answered: false,
      },
      { name: "Célia", quantity: 1, guests: "", answered: false },
      { name: "Chirstopher", quantity: 1, guests: "", answered: false },
      { name: "Djalma", quantity: 2, guests: "Japa", answered: false },
      { name: "Eliete", quantity: 3, guests: "Ga e Fernando", answered: false },
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
