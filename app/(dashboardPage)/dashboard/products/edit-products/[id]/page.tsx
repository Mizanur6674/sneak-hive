import React from "react";
import { getSingleProduct } from "@/action/products/getSingleProduct";
import EditProducts from "@/components/dashboard/products/edit-products/edit-product";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const result = await getSingleProduct(Number(id));
  const product: any = {
    id: result.id,
    name: result.name,
    quantity: result.quantity,
    description: result.description,
    price: result.price,
    images: result.images,
    priceId: result.priceId,
  };

  return (
    <div className=" w-full">
      <EditProducts product={product} />
    </div>
  );
}
