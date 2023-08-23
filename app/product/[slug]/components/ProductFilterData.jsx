"use client";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import ReactMarkdown from "react-markdown";

import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/wapper";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";

import { addToCart } from "@/store/cartSlice";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductFilterData = ({ result }) => {
  const product = result?.data[0];
  const data = product?.attributes;
  const Image = data?.thumbnail?.data?.attributes;
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  // const sizes = data?.size?.data.filter((size) => size.enabled);
  // const p = product?.data?.[0]?.attributes;

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

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={data?.image?.data} />
          </div>
          {/* right */}
          <div className="flex-[1] py-3">
            {/* Product Title  */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {data?.name}
            </div>
            {/* Product subtitle */}
            <div className="text-lg font-semibold mb-5 ">{data?.subtitle}</div>
            {/* right */}

            {/* Product Price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP :&#2547;{data?.price}
              </p>
              <div className="text-md font-medium text-black/[0.5]">
                {data.quantity}
              </div>
              {data?.Original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#2547;{data?.Original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-red-500">
                    {getDiscountedPricePercentage(
                      data.Original_price,
                      data.price
                    )}
                    % off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              {data.quantity}
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
                {data.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
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
                    callbackUrl: `/product/${product.attributes.slug}`,
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
                  dispatch(
                    addToCart({
                      ...data?.thumbnail?.data,
                      selectedSize,
                      oneQuantityPrice: data.price,
                      sizes: data.size.data,
                      priceId: data.priceId,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* Add to card end*/}
            {/* Wishlist button start */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Wishlist end */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>
                  {product?.attributes?.Description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        {product && product.length > 0 && <RelatedProducts product={product} />}
      </Wrapper>
    </div>
  );
};

export default ProductFilterData;
