import { getCategoryProductBySlug } from "@/utils/dataFetching";
import CategoryFilterData from "../components/CategoryFilterData";

const Category = async ({ params: { slug } }: { params: { slug: string } }) => {
  const result = await getCategoryProductBySlug(slug);

  return <CategoryFilterData result={result} />;
};

export default Category;
