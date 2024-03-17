import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // const res = await prisma.youtube_channels.findMany();
    const res = await prisma.youtube_channels.findMany({
      where: {
        subscribers: {
          gte: 521,
        },
      },
    });
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
