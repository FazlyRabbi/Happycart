import React from "react";
import BannerMobile from "../Banner/BannerMobile";
import SignIn from "./SignIn";
import PopularProduct from "./PopularProductM/PopularProduct";
import FeaturedBanner from "./FeaturedBanner";
import GrossaryM from "./GrossaryM/GrossaryM";

function HomeM() {
  return (
    <section className="homeM   bg-neutral">
      <BannerMobile />
      <SignIn />
      <PopularProduct />
      <FeaturedBanner />
      <GrossaryM />
      <PopularProduct />
      <FeaturedBanner />
      <GrossaryM />
    </section>
  );
}
export default HomeM;
