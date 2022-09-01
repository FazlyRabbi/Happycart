import React from "react";
import Sidebar from "../../shared/Sidebar/Sidebar";
import SliderMain from "../Components/SliderMain/SliderMain";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "../../shared/Footer/Footer";
import HomeM from "./HomeN/HomeM";

function Home() {
  return (
    <>
      <Sidebar />
      {/* <Navbar /> */}
      {/* <SingleProduct /> */}
      {/* <SinglePage /> */}
      <div className="container mx-auto">
        {/* <div className="container mx-auto">
        <Banner />
        <PopularProductsInPc />

      <div className="home__lg sm:hidden md:block">
        {/* <SingleProduct /> */}
        {/* <SinglePage /> */}
        {/* mobile resposive component out of container */}
        <div className="container mx-auto">
          <Banner />
          {/* <PopularProductsInPc />
        <PopularProductsInBeauty />
        <Grossary />
        <TopSellersInToys />
        <TopSellerInBook />
        <BottomSignIn />
        <BackToTop />
        <Footer />
  </div>*/}
        </div>
      </div>
      <div>
        <div>
          <BackToTop />
        </div>
        {/* <Footer /> */}
      </div>

      <div className="home__M sm:block md:hidden">
        <HomeM />
      </div>
    </>
  );
}

export default Home;
