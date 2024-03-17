import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // const channel = {
    //   name: "Luan Pereira",
    //   description: "Frontend",
    //   subscribers: 521,
    //   link: "https://www.youtube.com/@LuanVieiraPereira",
    // };

    // const res = await prisma.youtube_channels.updateMany({
    //   where: {
    //     subscribers: {
    //       lt: 521,
    //     },
    //   },
    //   data: {
    //     subscribers: 1000,
    //   },
    // });

    const res = await prisma.youtube_channels.update({
      where: {
        id: 1,
      },
      data: {
        name: "Luan Vieira",
        description: "Frontend",
        subscribers: 521,
        link: "https://www.youtube.com/@LuanVieiraPereira",
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
