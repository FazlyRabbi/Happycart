
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ProductCard from "./ProductCard/ProductCard";
export default function SwiperSliderCardBox({products,responsive}) {
  return (
    <div className="w-12/12 overflow-hidden mx-auto py-10">
      <Swiper
      className="py-12"
        slidesPerView={responsive[0]}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          460: {
            slidesPerView: responsive[0],
            spaceBetween: 20,
          },
          640: {
            slidesPerView: responsive[1],
            spaceBetween: 20,
          },
          768: {
            slidesPerView: responsive[2],
            spaceBetween: 20
          },
          1024: {
            slidesPerView: responsive[3],
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {products.map((product, index) => (
          <SwiperSlide>
            <ProductCard data={product} key={index}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
