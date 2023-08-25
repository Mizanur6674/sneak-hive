"use client";
import { product } from "@prisma/client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import ProductActiveCell from "./product-active-cell";
// import ProductActiveCell from "./product-active-cell";

const columnHelper = createColumnHelper<product>();
export const productColumns: ColumnDef<product>[] = [
  columnHelper.accessor("images", {
    header: "Image",
    cell: (info) => {
      const [image] = info.getValue() as string[];
      return (
        <div className=" relative w-12 h-12 overflow-hidden rounded-full">
          <Image src={image} fill alt="table img" />
        </div>
      );
    },
  }),

  columnHelper.accessor("name", {
    header: "Name",
  }),

  columnHelper.accessor("sizes", {
    header: "Quantity",
    cell: (info) => {
      const sizes = info.getValue();
      const quantity = sizes?.reduce((a, b: any) => a + b?.quantity, 0);
      return <span>{quantity}</span>;
    },
  }),

  columnHelper.accessor("price", {
    header: "price",
    cell: (info) => {
      console.log("price", info.getValue());
      const price = info.getValue();
      return <span>${price}</span>;
    },
  }),

  columnHelper.accessor("description", {
    header: "Description",
  }),
  columnHelper.accessor("active", {
    header: "Active",
    cell: (e) => {
      const data = e.row.original;
      return <ProductActiveCell data={data} />;
    },
  }),
];
