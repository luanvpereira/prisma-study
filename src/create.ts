import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        name: "Luan Pereira",
        description: "Frontend Developer",
        subscribers: 520,
        link: "https://www.youtube.com/@LuanVieiraPereira",
      },
      {
        name: "Rocketseat",
        description: "Rocketseat",
        subscribers: 1000000,
        link: "https://www.youtube.com.br/c/rocketseat",
      },
      {
        name: "Dev Soutinho",
        description: "Dev Soutinho",
        subscribers: 100000,
        link: "https://www.youtube.com.br/c/devsoutinho",
      },
      {
        name: "Dev Ed",
        description: "Dev Ed",
        subscribers: 1000000,
        link: "https://www.youtube.com.br/c/deved",
      },
      {
        name: "Clever Programmer",
        description: "Clever Programmer",
        subscribers: 1000000,
        link: "https://www.youtube.com.br/c/cleverprogrammer",
      },
      {
        name: "Luan Pereira",
        description: "Frontend Developer",
        subscribers: 520,
        link: "https://www.youtube.com.br/c/luanvpereira",
      },
    ];

    const res = await prisma.youtube_channels.createMany({
      data,
      skipDuplicates: true,
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
