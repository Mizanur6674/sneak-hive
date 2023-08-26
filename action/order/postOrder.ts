"use server";
import prisma from "@/lib/prisma";
const postOrder = async (data: any) => {
  const order = await prisma.order.create({
    data: {
      ...data,
    },
  });
  return order;
};
export default postOrder;
