"use client";
import { getProducts } from "@/action/products/getProducts";
import ProductTable from "@/components/dashboard/products/table/Product-table";
import { productColumns } from "@/components/dashboard/products/table/columns/product-table-columns";
import { Button } from "@/components/ui/button";
import { fetches } from "@/lib/refetch";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { PiExportLight } from "react-icons/pi";

import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Products() {
  const router = useRouter();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-product"],
    queryFn: getProducts,
  });

  fetches.refetchProducts = refetch;

  if (isLoading || !data) {
    return <p>data is loading...</p>;
  }
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "PROFESSION"]];

    const data = [
      { name: "Keanu Reeves", profession: "Actor" },
      { name: "Lionel Messi", profession: "Football Player" },
      { name: "Cristiano Ronaldo", profession: "Football Player" },
      { name: "Jack Nicklaus", profession: "Golf Player" },
    ];

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h5>Products Table</h5>
        <Button
          className="flex items-center gap-2 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 "
          onClick={() => {
            exportPDF();
          }}
        >
          <span>
            <PiExportLight />
          </span>
          Export
        </Button>
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
