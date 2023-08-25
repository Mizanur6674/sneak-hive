import getCart from "./getCart";
import setCart from "./setCart";

const removeFromCart = (id: number) => {
  const availableProducts = getCart();
  const remainingProducts = availableProducts.filter((item) => item.id !== id);
  setCart(remainingProducts);
};
export default removeFromCart;
