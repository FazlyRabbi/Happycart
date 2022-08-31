import React from "react";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Banner from "./Banner/Banner";
import Footer from "../../shared/Footer/Footer";
import HomeM from "./HomeN/HomeM";

function Home() {
  return (
    <>
      <Sidebar />

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
        <BackToTop /> */}
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
