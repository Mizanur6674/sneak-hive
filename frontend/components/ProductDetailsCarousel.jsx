"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductDetailsCarousel({ images }) {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
          />
        ))}
        {/* <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
        <img src="/p4.png" alt="" />
        <img src="/p5.png" alt="" />
        <img src="/p6.png" alt="" />
        <img src="/p7.png" alt="" /> */}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
