"use client";

import postOrder from "@/action/order/postOrder";
import { checkoutSession } from "@/action/stripe/stripe";
import { billingData } from "@/components/shared/data/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BillingDataType, BillingSchema } from "@/types";
import getCart from "@/utils/localStorage/getCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStripe } from "@stripe/react-stripe-js";
import { Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Billing = () => {
  const { data } = useSession();
  const stripe = useStripe();
  const cart = getCart();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<BillingDataType>({
    resolver: zodResolver(BillingSchema),
  });

  // const onSubmit = async (contact_info: BillingDataType) => {
  //   console.log({ contact_info });

  //   try {
  //     if (!cart.length) {
  //       return;
  //     }

  //     const session = JSON.parse(await checkoutSession(cart));
  //     const orderData = {
  //       contact_info,
  //       items: {
  //         products: cart,
  //       },
  //       payment_id: session.id,
  //       userId: data?.user?.id,
  //     };
  //     console.log({ orderData });

  //     return;
  //     await postOrder(orderData);
  //     stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });
  //   } catch (error) {
  //     toast.error("Not Create an Order!");
  //   }
  // };

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="bg-[#FAFAFA] py-10 lg:py-16 px-1 sm:px-6 md:px-16"
    >
      <h5 className=" text-3xl border-b border-theme-light-gray">
        Billing Details
      </h5>

      <div className=" my-16 lg:my-20">
        <div className=" grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-10 md:gap-y-20">
          {billingData.map((item: BillingDataType, index) => {
            return (
              <div key={index}>
                <Label htmlFor={item.name}>{item.title}</Label>
                <Input
                  id={item.name}
                  type="text"
                  {...(register(item.name as any),
                  {
                    required: item.required,
                  })}
                  placeholder="Enter your product name"
                  className="mt-1  "
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className=" my-12">
        <Label htmlFor="area">Description</Label>
        <Textarea
          {...register("name")}
          placeholder="Enter your description"
          className="mt-1  "
        />
      </div>

      <Button disabled={!isSubmitting} type="submit" className=" btn-primary">
        Place to Order{" "}
        {isSubmitting && <Loader className="ml-2 animate-spin" />}
      </Button>
    </form>
  );
};

export default Billing;
