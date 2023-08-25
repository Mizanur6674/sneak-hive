"use server";

import prisma from "@/lib/prisma";
import { ProductType } from "@/types";

export const updatedManyProduct = async (values: ProductType[]) => {
  try {
    if (values) {
      for (let item of values) {
        await prisma.product.update({
          where: {
            id: item.id,
          },
          data: {
            quantity: {
              decrement: item.quantity,
            },
          },
        });
      }
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
