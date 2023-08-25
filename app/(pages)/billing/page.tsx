"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Billing from "@/components/dashboard/billing/Billing";

const page = async () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  return (
    <>
      <div className="bg-[url('/assets/images/banner/BannerShopDetails.png')] bg-style h-[450px] flex flex-col items-center justify-center">
        <h1>Billing Details</h1>
      </div>
      <div className=" container my-10 lg:my-32 ">
        <Elements stripe={stripePromise}>
          <Billing />
        </Elements>
      </div>
    </>
  );
};

export default page;
