"use server";

import { prisma } from "@/lib/prisma";

const postRegisterData = async (values: any) => {
  const newUser = await prisma.user.create({
    data: values,
  });
  return newUser;
};

export default postRegisterData;
