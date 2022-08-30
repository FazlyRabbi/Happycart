import React from "react";

import gaming1 from "../../../asstes/img/gaming1.jpg";
import gaming2 from "../../../asstes/img/gaming2.jpg";
import gaming3 from "../../../asstes/img/gaming3.jpg";
import gaming4 from "../../../asstes/img/gaming4.jpg";
import dress1 from "../../../asstes/img/dress1.jpg";
import box from "../../../asstes/img/box.jpg";

function BannerCategory() {
  return (
    <div className="grid grid-rows-2 gap-y-6 px-4 -mt-[320px]">

      <div className="banner__card--1  flex justify-items-center justify-around flex-wrap">

        <div className="card rounded-none  max-w-[340px]    bg-success  p-5">

          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px] mb-3 ">

            <div className="row__1 flex   ">
             
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px] mb-3  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px] mb-3  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px] mb-3  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px] mb-3  ">Chairs</span>
              </div>
            </div>
            
          </div>




          <span className="card-title text-[13px]  text-accent cursor-pointer py2">
            See more
          </span>
        </div>


        <div className="card rounded-none max-w-[340px] bg-success   p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px] mb-3">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px] mb-3  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px] mb-3  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px] mb-3  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px] mb-3  ">Chairs</span>
              </div>
            </div>
          </div>

          <span className="card-title text-[13px] mt-6 text-accent cursor-pointer py2">
            See more
          </span>
        </div>

      
      
        <div className="card rounded-none bg-success  max-w-[340px]  p-5">
         
          <h2 className="card-title text-[21px] py-4">Dresses</h2>

          <img src={dress1} alt="dress"  className="mb-8"/>
         
          <span className="card-title text-[13px]  text-accent cursor-pointer  ">
            Shop now
          </span>



          
        </div>



        <div className="flex flex-col items-center   max-w-[340px]    ">



          <div className="card  max-w-[340px] bg-[#fff] rounded-none p-5 mb-5  flex flex-col     justify-center items-center">
            <h2 className="card-title text-[21px]  py-3  block ">
              Sign in for the best experience
            </h2>
            <button className="bg-primary   w-72 p-2  mt-1 mb-3 rounded-xl">
              Sign in securely
            </button>
          </div>

            <img src={box} alt="box" />

        </div>


      </div>




{/* 
       <div className="banner__card--1 grid grid-cols-4 gap-4  justify-items-center">
        <div className="card rounded-none  w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px] mb-3">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px] mb-3  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px] mb-3  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px] mb-3  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px] mb-3  ">Chairs</span>
              </div>
            </div>
          </div>

          <span className="card-title text-[13px] mt-6 text-accent cursor-pointer py2">
            See more
          </span>
        </div>

        <div className="card rounded-none w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px] mb-3">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px] mb-3  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px] mb-3  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px] mb-3  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px] mb-3  ">Chairs</span>
              </div>
            </div>
          </div>

          <span className="card-title text-[13px] mt-6 text-accent cursor-pointer py2">
            See more
          </span>
        </div>

        <div className="card rounded-none bg-base-100 w-[340px]  p-5">
          <h2 className="card-title text-[21px] py-4">Dresses</h2>
          <img src={dress1} alt="dress" />
          <span className="card-title text-[13px] mt-10 text-accent cursor-pointer py2">
            Shop now
          </span>
        </div>
        <div className="card rounded-none bg-base-100 w-[340px]  p-5">
          <h2 className="card-title text-[21px] py-4">Cosmatics</h2>
          <img src={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"} alt="dress" />
          <span className="card-title text-[13px] mt-10 text-accent cursor-pointer py2">
            Shop now
          </span>
        </div>

   
        
      </div>  */}
    </div>
  );
}

export default BannerCategory;
