"use client";
import { getProducts } from "@/action/products/getProducts";
import ProductTable from "@/components/dashboard/products/table/Product-table";
import { productColumns } from "@/components/dashboard/products/table/columns/product-table-columns";
import { Button } from "@/components/ui/button";
import { fetches } from "@/lib/refetch";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-product"],
    queryFn: getProducts,
  });

  fetches.refetchOrders = refetch;

  if (isLoading || !data) {
    return <p>data is loading...</p>;
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h5>Products Table</h5>
        <Button
          className="flex items-center gap-2 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 "
          onClick={() => router.push("/dashboard/products/add-products")}
        >
          <span>
            <PlusCircledIcon />
          </span>
          Add Product
        </Button>
      </div>

      <ProductTable columns={productColumns} data={data} />
    </div>
  );
}
