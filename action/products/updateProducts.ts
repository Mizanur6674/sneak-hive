import prisma from "@/lib/prisma";
import { ProductType } from "@/types";

export const updatedProduct = async (id: number, values: any) => {
  try {
    const updateProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        ...values,
      },
    });
    console.log("updatedProduct", updateProduct);

    return updateProduct;
  } catch (error) {
    console.log(error);
  }
};
