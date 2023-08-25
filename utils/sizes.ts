import { ProductType } from "@/types";

export const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

export const groupingBySize = (
  result: ProductType[]
): Map<string, ProductType[]> => {
  const group = new Map<string, ProductType[]>();
  result.forEach((product) => {
    product?.sizes?.forEach((size) => {
      if (!group.has(size)) {
        group.set(size, []);
      }
      group.set(size, [...group.get(size), product]);
    });
  });

  return group;
};
