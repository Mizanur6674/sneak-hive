"use client";
import { deleteOrderByPaymentId } from "@/action/order/deleteOrder";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function CancelPage() {
  const id = useSearchParams().get("id");
  useEffect(() => {
    if (!id || !id.startsWith("cs_")) {
      return redirect("/checkout");
    }
    if (id) {
      (async () => {
        try {
          await deleteOrderByPaymentId(id);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [id]);
  return (
    <div className="flex justify-center items-center py-10">
      <div className="text-center space-y-5">
        <h2 className="text-red-500">Payment Failed</h2>
        <h3>Your order has been placed cancel</h3>
        <Link href="/shop" className="pt-10 block">
          <button className="btn-primary">Back To Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default CancelPage;
