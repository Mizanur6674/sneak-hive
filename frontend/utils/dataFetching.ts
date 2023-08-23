"use server";

import { fetchDataFromApi } from "./api";
const maxResult = 3;
export async function getProducts() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return products;
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$eq]=${slug}`
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryProductBySlug(slug: string) {
  try {
    const category = await fetchDataFromApi(
      `/api/categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
    );
    return {
      category,
      products,
      slug,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
      category: null,
      slug,
    };
  }
}
