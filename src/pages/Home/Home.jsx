import React from "react";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Banner from "./Banner/Banner";
import Footer from "../../shared/Footer/Footer";
import HomeM from "./HomeN/HomeM";
import PopularProductsInPc from "./PopularProducts/PopularProductsInPc";
import PopularProductsInBeauty from "./PopularProducts/PopularProductsInBeauty";
import Grossary from "./Grossary/Grossary";
import TopSellersInToys from "./PopularProducts/TopSellersInToys";
import TopSellerInBook from "./PopularProducts/TopSellerInBook";
import BottomSignIn from "./BottomSignIn/BottomSignIn";
import BackToTop from "./BackToTop";

function Home() {
  return (
    <div>
      <Sidebar />
      <div className="home__lg sm:hidden md:block">
        <div className="container mx-auto">
          <Banner />
          <PopularProductsInPc />
          <PopularProductsInBeauty />
          <Grossary />
          <TopSellersInToys />
          <TopSellerInBook />
        </div>
        <BottomSignIn />
        <BackToTop />
        <Footer />
      </div>

      <div className="home__M sm:block md:hidden">
        <HomeM />
      </div>
    </div>
  );
}

export default Home;
