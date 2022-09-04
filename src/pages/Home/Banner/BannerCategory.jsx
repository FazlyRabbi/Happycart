import React from "react";

import gaming1 from "../../../asstes/img/gaming1.jpg";
import gaming2 from "../../../asstes/img/gaming2.jpg";
import gaming3 from "../../../asstes/img/gaming3.jpg";
import gaming4 from "../../../asstes/img/gaming4.jpg";
import dress1 from "../../../asstes/img/dress1.jpg";
import box from "../../../asstes/img/box.jpg";

function BannerCategory() {
  return (
    <div className=" absolute w-[100%] ">
      <div className=" px-4 xl:-mt-[280px] lg:-mt-[180px] md:-mt-[100px] ">
       
       
        <div className="banner__card--1 grid  lg:gap-x-6    justify-items-center  gap-y-6 xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 md:gap-x-6 ">
          <div className="card rounded-none  max-w-[340px]    bg-[#fff]  p-5">
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

          <div className="card rounded-none max-w-[340px] bg-[#fff]   p-5">
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

          <div className="card rounded-none bg-[#fff]  max-w-[340px]  p-5">
            <h2 className="card-title text-[21px] py-4">Dresses</h2>

            <img src={dress1} alt="dress" className="mb-8" />

            <span className="card-title text-[13px]  text-accent cursor-pointer  ">
              Shop now
            </span>
          </div>

          <div className="max-w-[340px] lg:block md:hidden">
            <div className="card  bg-[#fff] rounded-none p-5 mb-5  ">
              <h2 className="card-title text-[21px]  py-3 ">
                Sign in for the best experience
              </h2>
              <button className="bg-primary   w-[100%] p-2  mt-1 mb-3 rounded-xl">
                Sign in securely
              </button>
            </div>
            <img src={box} alt="box" className="xl:ml-4 lg:ml-0" />
          </div>




        </div>




          <div className="banner__card--1 grid mt-5  lg:gap-x-6 justify-items-center   gap-y-6 xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 md:gap-x-6 ">
          <div className="card rounded-none  max-w-[340px]    bg-[#fff]  p-5">
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

        
        


          <div className="card rounded-none max-w-[340px] bg-[#fff]   p-5">
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

          <div className="card rounded-none bg-[#fff]  max-w-[340px]  p-5">
            <h2 className="card-title text-[21px] py-4">Dresses</h2>

            <img src={dress1} alt="dress" className="mb-8" />

            <span className="card-title text-[13px]  text-accent cursor-pointer  ">
              Shop now
            </span>
          </div>


          <div className="card rounded-none bg-[#fff]  lg:block md:hidden max-w-[340px]  p-5">
            <h2 className="card-title text-[21px] py-4">Dresses</h2>

            <img src={dress1} alt="dress" className="mb-8" />

            <span className="card-title text-[13px]  text-accent cursor-pointer  ">
              Shop now
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BannerCategory;
