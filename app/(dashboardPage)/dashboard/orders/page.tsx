"use client";
import { getOrders } from "@/action/order/getOrders";
import ReactBasicTable from "@/components/dashboard/order/table/ReactTable";
import { columns } from "@/components/dashboard/order/table/columns/Columns";
import { Button } from "@/components/ui/button";
import { fetches } from "@/lib/refetch";
import { useQuery } from "@tanstack/react-query";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { PiExportLight } from "react-icons/pi";

function DashboardHome() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: getOrders,
  });

  fetches.refetchOrders = refetch;

  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center w-full ">
        <p>data is loading...</p>
      </div>
    );
  }

  const exportData: any = data;
  console.log(exportData);

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    autoTable(doc, {
      head: [["Order ID", "Email", "Items", "Total Price", "Status"]],
      body: exportData.map((item) => [
        item.id,
        item.contact_info.email,

        item.items.products
          .map((product) => {
            return product.name + "(" + product.quantity + `)`;
          })
          .join(" , "),

        "BDT " +
          item.items.products.reduce((totalValue, product) => {
            return totalValue + product.price * product.quantity;
          }, 0),
        item.status,
      ]),
    });
    doc.save("report.pdf");
  };
  return (
    <div className="w-full space-y-3 ">
      <div className="flex justify-between items-center">
        <h5>Orders Table</h5>
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
      </div>
      <div className="w-full ">
        <ReactBasicTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default DashboardHome;
