import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

async function seedUsers() {
  const usersData = [
    {
      email: "user@user.com",
      name: "This is a user",
      password: "user123",
    },
    {
      email: "test@test.com",
      name: "This is a test",
      password: "test123",
    },
  ];

  for (const userData of usersData) {
    const { email, name, password } = userData;
    const hashedPassword = await hash(password, 12);

    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
}

async function main() {
  try {
    await seedUsers();
    console.log("Seeder selesai");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
