import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform w-full bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <div className="w-full aspect-square relative overflow-hidden">
        <Image
          fill
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          className="object-cover"
        />
      </div>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2  text-lg font-semiblod">&#2547;{p.price}</p>

          {p.Original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#2547;{p.Original_price}
              </p>
              <p className="ml-auto text-base font-medium text-red-500">
                {getDiscountedPricePercentage(p.Original_price, p.price)}
                %off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
