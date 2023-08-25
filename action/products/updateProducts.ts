import prisma from "@/lib/prisma";

export const updatedProduct = async (id: number, values: any) => {
  try {
    const updateProduct = await prisma.product.findMany();
    console.log("updatedProduct", updateProduct);

    return updateProduct;
  } catch (error) {
    console.log(error);
  }
};
