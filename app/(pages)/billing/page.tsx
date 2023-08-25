"use client";
import Billing from "@/components/dashboard/billing/Billing";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const page = async () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  return (
    <>
      <div className=" container my-10 lg:my-32 ">
        <Elements stripe={stripePromise}>
          <Billing />
        </Elements>
      </div>
    </>
  );
};

export default page;
