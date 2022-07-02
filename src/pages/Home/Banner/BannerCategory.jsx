import React from "react";
import gaming1 from "../../../asstes/img/gaming1.jpg";
import gaming2 from "../../../asstes/img/gaming2.jpg";
import gaming3 from "../../../asstes/img/gaming3.jpg";
import gaming4 from "../../../asstes/img/gaming4.jpg";
import dress1 from "../../../asstes/img/dress1.jpg";
import box from "../../../asstes/img/box.jpg";

function BannerCategory() {
  return (
    <div className="grid grid-rows-2 gap-y-6" style={{ marginTop: "-320px" }}>
      <div className="banner__card--1 grid grid-cols-4 gap-4  justify-items-center">
        <div className="card rounded-none  w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>
          <div className="productsCategory text-[12px]">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px]  ">Headsets</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px]  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px]  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px]  ">Chairs</span>
              </div>
            </div>
          </div>

          <span className="card-title text-[13px] mt-6 text-accent cursor-pointer py2">
            See more
          </span>
        </div>

        <div className="card rounded-none w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px]">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px]  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px]  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px]  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px]  ">Chairs</span>
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

        <div className="flex flex-col items-center">
          <div className="card  w-[340px] rounded-none bg-base-100  p-5 flex items-center">
            <h2 className="card-title text-[21px] py-4  block ">
              Sign in for the best experience
            </h2>
            <button className="bg-primary   w-72 p-2 mb-12 mt-1 rounded-xl">
              Sign in securely
            </button>
            <img src={box} alt="box" />
          </div>
        </div>
      </div>

      <div className="banner__card--1 grid grid-cols-4 gap-4  justify-items-center">
        <div className="card rounded-none  w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px]">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px]  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px]  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px]  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px]  ">Chairs</span>
              </div>
            </div>
          </div>

          <span className="card-title text-[13px] mt-6 text-accent cursor-pointer py2">
            See more
          </span>
        </div>

        <div className="card rounded-none w-[340px] bg-base-100  p-5">
          <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

          <div className="productsCategory text-[12px]">
            <div className="row__1 flex ">
              <div className="mr-1 mb-9 cursor-pointer">
                <img className="" src={gaming1} alt="gaming headphone" />
                <span className="text-[12px]  ">Headsets</span>
              </div>

              <div className="cursor-pointer">
                <img src={gaming2} alt="gaming keyboard" />
                <span className="text-[12px]  ">Keyboards</span>
              </div>
            </div>

            <div className="row__2 flex">
              <div className="mr-1 cursor-pointer">
                <img src={gaming3} alt="" />
                <span className="text-[12px]  ">Computer mice</span>
              </div>
              <div className="cursor-pointer">
                <img src={gaming4} alt="" />
                <span className="text-[12px]  ">Chairs</span>
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

        <div className="flex flex-col items-center">
          <div className="card  w-[340px] rounded-none bg-base-100  p-5 flex items-center">
            <h2 className="card-title text-[21px] py-4  block ">
              Sign in for the best experience
            </h2>
            <button className="bg-primary   w-72 p-2 mb-12 mt-1 rounded-xl">
              Sign in securely
            </button>
            <img src={box} alt="box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCategory;
