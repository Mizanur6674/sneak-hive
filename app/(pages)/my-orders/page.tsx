"use client";
import Card from "@/components/dashboard/card/Card";
import ReactBasicTable from "@/components/dashboard/order/table/ReactTable";
import { columns } from "@/components/dashboard/order/table/columns/Columns";
import prisma from "@/lib/prisma";
import { fetches } from "@/lib/refetch";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getMyOrders } from "./getMyOrders";

function DashboardHome() {
  const currentUser = useSession();
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["get-all-orders"],
    enabled: Boolean(currentUser?.data?.user?.id),
    queryFn: () => getMyOrders(currentUser?.data?.user?.id),
  });

  fetches.refetchOrders = refetch;
  console.log({ orders });

  if (isLoading || !orders || !currentUser?.data) {
    return (
      <div className="flex items-center justify-center w-full py-40 ">
        <p>data is loading...</p>
      </div>
    );
  }
  return (
    <div className="container w-full pb-40">
      <div className="w-full mt-10 ">
        <ReactBasicTable columns={columns} data={orders} name="My Orders" />
      </div>
    </div>
  );
}

export default DashboardHome;
