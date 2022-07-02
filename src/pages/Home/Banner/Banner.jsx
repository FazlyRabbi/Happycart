import React from "react";
import BannerCarousel from "./BannerCarousel";
import PopularProducts from "../PopularProducts/PopularProdutcs";
import BannerCategory from "./BannerCategory";

function banner() {
  return (
    <>
      <BannerCarousel />
      <BannerCategory />
    </>
  );
}

export default banner;
