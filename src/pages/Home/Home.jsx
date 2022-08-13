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
import SliderMain from "../Components/SliderMain/SliderMain"
import SingleProduct from "./SingleProduct/SingleProduct";
import SinglePage from "./../SinglePage/SinglePage";

function Home() {
  return (
    <div className="">
      <Sidebar />
      <Navbar />
      {/* <SingleProduct /> */}
      {/* <SinglePage /> */}
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
      <SliderMain />
    </div>
  );
}

export default Home;
