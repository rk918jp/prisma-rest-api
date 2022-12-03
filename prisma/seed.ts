// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   const taro = await prisma.user.upsert({
//     where: { email: "taro@example.com" },
//     update: {},
//     create: {
//       email: "taro@example.com",
//       name: "taro",
//     },
//   });

//   const jiro = await prisma.user.upsert({
//     where: { email: "jiro@example.com" },
//     update: {},
//     create: {
//       email: "jiro@example.com",
//       name: "jiro",
//     },
//   });
//   console.log({ taro, jiro });
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const posts: any = [];

for (let i = 0; i < 100; i++) {
  posts.push({ title: `title ${i + 1}` });
}

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      posts: {
        create: posts,
      },
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
        },
      },
    },
  });

  console.log({ alice, bob });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
