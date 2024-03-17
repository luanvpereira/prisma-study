import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const res = await prisma.youtube_channels.deleteMany({
      where: {
        subscribers: {
          gte: 100000,
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
