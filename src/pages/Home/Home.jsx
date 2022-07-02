import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import PopularProducts from "./PopularProducts/PopularProdutcs";
import Grossary from "./Grossary/Grossary";
import TopSellersInToys from "./PopularProducts/TopSellersInToys";
import PopularProductsInBeauty from "./PopularProducts/PopularProductsInBeauty";
import BottomSignIn from "./BottomSignIn/BottomSignIn";
import BackToTop from "./BackToTop";
import Footer from "../../shared/Footer/Footer";

function Home() {
  return (
    <div className="bg-neutral">
      <Navbar />
      <div className="container mx-auto">
        <Banner />
        <PopularProducts />
        <Grossary />
        <TopSellersInToys />
        <PopularProductsInBeauty />
      </div>
      <BottomSignIn />
      <BackToTop />
      <Footer/>
    </div>
  );
}

export default Home;
