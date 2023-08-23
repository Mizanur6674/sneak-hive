"use server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const createPrice = async (amount) => {
  try {
    const price = await stripe.prices.create({
      unit_amount: amount * 100,
      currency: "inr",
      product: "prod_OTgCRihe8znADq",
    });
    return price.id;
  } catch (error) {
    console.log(error);
  }
};
export const checkoutSession = async (products) => {
  const line_items = products.map((product) => {
    return {
      price: product.priceId,
      quantity: product.quantity,
    };
  });
  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/stripe/success?id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/stripe/cancel`,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "BD"],
      },
      line_items,
      payment_method_types: ["card"],
      mode: "payment",
      invoice_creation: {
        enabled: true,
      },
    });
    return JSON.stringify(session);
  } catch (error) {
    console.log(error);
  }
};
