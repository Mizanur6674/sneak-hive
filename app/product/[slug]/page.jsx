import React from "react";
import ProductFilterData from "./components/ProductFilterData";
import { getProductBySlug } from "@/utils/dataFetching";

const Product = async ({ params: { slug } }) => {
  const result = await getProductBySlug(slug);

  return <ProductFilterData result={result} />;
};

export default Product;
