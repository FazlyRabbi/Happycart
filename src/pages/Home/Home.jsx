import React from "react";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Banner from "./Banner/Banner";
import Footer from "../../shared/Footer/Footer"

function Home() {
  return (
    <div>
      <Sidebar />
      {/* <Navbar /> */}
      {/* <SingleProduct /> */}
      {/* <SinglePage /> */}
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
  );
}

export default Home;
