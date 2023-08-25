import React from "react";
import ProductFilterData from "./components/ProductFilterData";
import { getProductBySlug } from "@/action/products/getProductBySlug";

const Product = async ({ params: { slug } }) => {
  const result = await getProductBySlug(slug);

  return <ProductFilterData result={result} />;
};

export default Product;
