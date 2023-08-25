"use server";
import prisma from "@/lib/prisma";
const postOrder = async (
  contact_info: any,
  products: any,
  payment_id: string
) => {
  const order = await prisma.order.create({
    data: {
      contact_info,
      items: {
        products,
      },
      payment_id,
    },
  });
  return order;
};
export default postOrder;
