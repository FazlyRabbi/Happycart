import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Grossary from "./Grossary/Grossary";
import TopSellersInToys from "./PopularProducts/TopSellersInToys";
import PopularProductsInBeauty from "./PopularProducts/PopularProductsInBeauty";
import TopSellerInBook from "./PopularProducts/TopSellerInBook";
import PopularProductsInPc from "./PopularProducts/PopularProductsInPc";
import BottomSignIn from "./BottomSignIn/BottomSignIn";
import BackToTop from "./BackToTop";
import Footer from "../../shared/Footer/Footer";

function Home() {
  return (
    <div className="bg-neutral">
      <Navbar />
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
  );
}

export default Home;
