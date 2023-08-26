"use client";
import { order } from "@prisma/client";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { TbCurrencyTaka } from "react-icons/tb";

const columnHelper = createColumnHelper<order>();
export const columns: ColumnDef<order>[] = [
  columnHelper.accessor("id", {
    header: "Order Id",
    cell: (info) => {
      return info.getValue();
    },
  }),

  columnHelper.accessor("contact_info.email", {
    header: "Email",
    cell: (info: any) => <i>{info.getValue()}</i>,
  }),

  columnHelper.accessor("items", {
    header: "Items",
    cell: (info: any) => {
      const { products } = info.getValue() || { products: [] };
      return products.map((item: any, id: number) => {
        return item.name + "(" + item.quantity + ")" + "," + "  ";
      });
    },
  }),
  columnHelper.accessor("items", {
    header: "Total Price",
    cell: (info: any) => {
      const { products } = info.getValue() || { products: [] };
      const total = products.reduce((totalValue: number, product: any) => {
        return totalValue + product.price * product.quantity;
      }, 0);

      return (
        <div className="flex items-center gap-1">
          <TbCurrencyTaka />
          <span>{total}</span>
        </div>
      );
    },
  }),

  columnHelper.accessor("status", {
    header: "Status",
  }),

  //   {
  //     id: "active",
  //     header: "Active",
  //     cell: (e) => {
  //       const data = e.row.original;
  //       return <ActiveCell data={data} />;
  //     },
  //   },
];
