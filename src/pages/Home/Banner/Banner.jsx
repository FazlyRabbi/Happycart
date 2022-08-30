import React from "react";
import BannerCarousel from "./BannerCarousel";
import BannerCategory from "./BannerCategory";
import BannerMobile from "./BannerMobile";

function banner() {
  return (
    <>
      <BannerCarousel />
      <BannerMobile/>
      {/* <BannerCategory/> */}
    </>
  );
}

export default banner;
