import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ShopApi from "../../apis/shopApi.json";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Navbar/Navbar";
import PhoneSideBar from "../Components/ShopPageComponents/PhoneSideBar";
import ShopPageCard from "../Components/ShopPageComponents/ShopPageCard";
import ShopPageSidebar from "../Components/ShopPageComponents/ShopPageSidebar";
const shopPage = () => {
  const { name } = useParams();
  const [isToggle, setIsToggle] = useState(false)
  return (
    <>
      <Header />
      <div>
        <h1 className={`text-2xl lg:hidden ${isToggle ? "float-right mr-5":"ml-5"}  mt-5 xl:hidden`}>
          <svg
          onClick={()=>setIsToggle(!isToggle)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 cursor-pointer hover:text-secondary hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </h1>
      </div>
      <PhoneSideBar isToggle={isToggle} setIsToggle={setIsToggle} />
      <section className="mt-4 relative min-h-screen">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="hidden md:hidden lg:col-span-2 xl:col-span-2 lg:block xl:block p-2 lg:p-0 xl:p-0 ">
            <ShopPageSidebar />
          </div>
          <div className="md:col-span-12 lg:col-span-10 xl:col-span-10 col-span-12">
            <div className="mt-4 font-medium px-4 xl:p-0">
              <h1 className="text-3xl uppercase ">
                Result <span className="text-secondary text-2xl">{name}</span>
              </h1>
              <p className="text-lg lg:text-xl">
                Price and other details may vary based on product size and
                color.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
              {ShopApi.filter((val) => {
                if (name == "all") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(name.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.brand.toLowerCase().includes(name.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.category.toLowerCase().includes(name.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.condition?.toLowerCase().includes(name.toLowerCase())
                ) {
                  return val;
                }
              }).sort().map((val) => {
                return <ShopPageCard key={uuidv4()} product={val} />;
              })}
            </div>
          </div>{" "}
        </div>
      </section>{" "}
      <Footer/>
    </>
  );
};
export default shopPage;
