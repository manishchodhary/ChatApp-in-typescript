import prisma from "../../lib/prisma.js";
import bcrypt from "bcrypt";
interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export const registerService = async ({
  name,
  password,
  email,
}: RegisterUserInput) => {
  const isExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (isExist) {
    throw new Error("User already exist");
  }

  const hashPasword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: hashPasword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  return user;
};
