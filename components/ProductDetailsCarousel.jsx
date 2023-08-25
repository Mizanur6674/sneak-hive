"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductDetailsCarousel({ images }) {
  return (
    <div className=" relative w-full h-full">
      <Image src={images} fill alt="product-img" />
    </div>
    // <div>
    //   <Carousel
    //     infiniteLoop={true}
    //     showIndicators={false}
    //     showStatus={false}
    //     thumbWidth={60}
    //     className="productCarousel"
    //   >

    //   </Carousel>
    // </div>
  );
}

export default ProductDetailsCarousel;
