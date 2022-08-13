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
import HndSign from "../../shared/HndSign/HndSign";
import Sidebar from "../../shared/Sidebar/Sidebar";
import SliderMain from "../Components/SliderMain/SliderMain";

function Home() {
  return (
    <div>
      <Sidebar />
      <Navbar />
  
      {/* <div className="container mx-auto">
        <Banner />
        <PopularProductsInPc />
        <PopularProductsInBeauty />
        <Grossary />w
        <TopSellersInToys />
        <TopSellerInBook />
        <BottomSignIn />
        <BackToTop />
        <Footer />
      </div> */}
    </div>
  );
}

export default Home;
