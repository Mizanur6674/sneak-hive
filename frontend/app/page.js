import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/wapper";
import { getProducts } from "@/utils/dataFetching";
// import { useState } from "react";

export default async function Home() {
  // const [session, setSession] = useState(false);
  const products = await getProducts();

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* <h1>{products?.data[0]?.attributes?.name}</h1> */}

        {/* Heading and paragraph section */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            FIND YOUR PERFECT RUNNING SHOE
          </div>
          <div className="text-md md:text-xl">
            A collection of shoes for men characterized by sneakers, Horsebit
            loafers, Princetown slippers, lace ups, ankle boots and slides.
          </div>
        </div>
        {/* product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return <ProductCard key={index} />;
          })} */}
        </div>
        {/* product grid end */}
      </Wrapper>
    </main>
  );
}
