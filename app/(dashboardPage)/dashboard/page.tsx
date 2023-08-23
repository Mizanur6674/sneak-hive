"use client";
import { getOrders } from "@/action/order/getOrders";
import Card from "@/components/dashboard/card/Card";
import ReactBasicTable from "@/components/dashboard/order/table/ReactTable";
import { columns } from "@/components/dashboard/order/table/columns/Columns";
import { fetches } from "@/lib/refetch";
import { useQuery } from "@tanstack/react-query";
import React from "react";
function DashboardHome() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["get-all-orders"],
    queryFn: getOrders,
  });

  fetches.refetchOrders = refetch;

  if (isLoading || !data) {
    return (
      <div className=" w-full flex items-center justify-center">
        <p>data is loading...</p>
      </div>
    );
  }
  return (
    <div className=" w-full">
      <Card />
      <div className=" mt-10 w-full">
        <ReactBasicTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default DashboardHome;
