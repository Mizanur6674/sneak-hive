"use server";

import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

// export const getAllProductsByCart = async (ids: number[]) => {
//   return await prisma.product.findMany({
//     where: {
//       id: {
//         in: [...ids],
//       },
//     },
//   });
// };
