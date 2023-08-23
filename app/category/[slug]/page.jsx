import React from "react";

import CategoryFilterData from "../components/CategoryFilterData";
import { getCategoryProductBySlug } from "@/utils/dataFetching";

const Category = async ({ params: { slug } }) => {
  const result = await getCategoryProductBySlug(slug);

  return <CategoryFilterData result={result} />;
};

export default Category;
