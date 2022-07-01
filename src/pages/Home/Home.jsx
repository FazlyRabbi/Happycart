import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner";

function Home() {
  return (
    <div className="bg-neutral">
      <Navbar />
      <Banner />
    </div>
  );
}

export default Home;
