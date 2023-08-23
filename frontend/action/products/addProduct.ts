"use server";
import { prisma } from "@/lib/prisma";
// import { ProductType } from "@/types";
import { slugify } from "@/utils/slugify";

const addProduct = async (values: any) => {
  try {
    const { name, images, sectionId, ...rest } = values;
    const newProduct = await prisma.product.create({
      data: {
        images,
        active: true,
        name,
        slug: slugify(name),
        sectionId,
        ...rest,
      },
    });
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

export default addProduct;
