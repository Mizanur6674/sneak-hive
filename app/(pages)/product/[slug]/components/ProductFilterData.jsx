"use client";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { setProduct } from "@/store/addCartSlice";
import { setWishList } from "@/store/addWishListSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getDiscountedPricePercentage } from "@/utils/helper";
import addToCart from "@/utils/localStorage/addCart";
import { allSizes } from "@/utils/sizes";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductFilterData = ({ result }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useAppDispatch();
  const { wishList } = useAppSelector((state) => state.addWishList);

  // const sizes = result?.size?.data.filter((size) => size.enabled);
  // const p = product?.result?.[0]?.attributes;
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // const { cartItems } = useSelector((state) => state.cart);
  // console.log({ cartItems });
  const session = useSession();
  const addProduct = {
    id: result?.id,
    images: result?.images,
    name: result?.name,
    selectedSize,
    price: result?.price,
    sizes: result?.sizes,
    priceId: result?.priceId,
    quantity: 1,
    totalPrice: result?.price * 1,
    discount: result?.discount,
  };
  const totalQuantity = result?.sizes?.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );
  return (
    <div className="sb w-full md:py-20">
      <ToastContainer />

      <div className=" container flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        {/* left */}
        <div className="sb w-full md:w-auto flex-[1.5] max-w-[500] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel images={result?.images[0]} />
        </div>
        {/* right */}
        <div className="flex-[1] py-3">
          {/* Product Title  */}
          <div className="sb text-[34px] font-semibold mb-2 leading-tight">
            {result?.name}
          </div>
          {/* Product subtitle */}
          {/* <div className="text-lg font-semibold mb-5 ">{result?.subtitle}</div> */}
          {/* right */}

          {/* Product Price */}
          <div className="flex items-center">
            <p className="mr-1 text-lg font-semibold">
              MRP :&#2547;{result?.price - result?.discount}
            </p>
            {result?.discount && (
              <p className="text-base font-medium line-through">
                &#2547;{result?.price}
              </p>
            )}
            <div className=" pl-2 text-md font-medium text-black/[0.5]">
              Q:{totalQuantity}
            </div>
            {result?.discount && (
              <p className="ml-auto text-base font-medium text-red-500">
                {getDiscountedPricePercentage(result?.price, result?.discount)}%
                off
              </p>
            )}
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black/[0.5] mb-20">
            {`(Also includes all applicable duties)`}
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            Quantity:
            {selectedSize
              ? result.sizes.find((s) => s.size === selectedSize).quantity
              : totalQuantity}
          </div>

          {/* Product size range start */}
          <div className="mb-10">
            {/* Heading Start */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Select Size</div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>
            {/* Heading End */}

            {/* Size Start */}
            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
              {allSizes?.map((size, i) => {
                const isHaveSize = result?.sizes?.find((s) => s.size === size);
                return (
                  <button
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      isHaveSize
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setShowError(false);
                    }}
                    disabled={!isHaveSize}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            {/* <div className="grid grid-cols-3 gap-2">
                {sizes.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"
                  >
                    {item?.size}
                  </div>
                ))} */}

            {/* SHOW ERROR START */}
            {showError && (
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
            )}
          </div>
          {/* Add to card */}
          <button
            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            onClick={() => {
              if (!session?.data) {
                signIn("google", {
                  callbackUrl: `/product/${result.slug}`,
                });
                return;
              }
              if (!selectedSize) {
                setShowError(true);
                document.getElementById("sizesGrid").scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
                // } else {
                //   dispatch(
                //     addToCart({
                //       ...result?.data[0],
                //       selectedSize,
                //     })
                //   );
                //   notify();
                // }
              } else {
                addToCart(addProduct);
                dispatch(setProduct(result.id));

                notify();
              }
            }}
          >
            Add to Cart
          </button>
          {/* Add to card end*/}
          {/* Wishlist button start */}
          <button
            onClick={() => {
              if (!selectedSize) {
                setShowError(true);
                document.getElementById("sizesGrid").scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              } else {
                dispatch(setWishList(addProduct));
                notify();
              }
            }}
            className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
          >
            Wishlist
            {wishList.find((item) => item.id === addProduct.id) ? (
              <IoMdHeart className="text-red-500" size={20} />
            ) : (
              <IoMdHeartEmpty size={20} />
            )}
          </button>
          {/* Wishlist end */}

          <div>
            <div className="text-lg font-bold mb-5">Product Details</div>
            <div className="markdown text-md mb-5">
              <ReactMarkdown>{result?.attributes?.Description}</ReactMarkdown>
            </div>
          </div>
        </div>
        {/* right column end */}
      </div>
      {result && result.length > 0 && <RelatedProducts product={product} />}
    </div>
  );
};

export default ProductFilterData;
