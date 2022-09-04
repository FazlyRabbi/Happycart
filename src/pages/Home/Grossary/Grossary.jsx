import React from "react";

import gaming1 from "../../../asstes/img/gaming1.jpg";
import gaming2 from "../../../asstes/img/gaming2.jpg";
import gaming3 from "../../../asstes/img/gaming3.jpg";
import gaming4 from "../../../asstes/img/gaming4.jpg";
import dress1 from "../../../asstes/img/dress1.jpg";
import box from "../../../asstes/img/box.jpg";

function Grossary() {
  return (
    <div className=" md:mx-4 xl:ml-6 xl:mr-2 grid mt-5  lg:gap-x-6   gap-y-6 xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 md:gap-x-6 ">
   
   
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


      <div className="card rounded-none bg-[#fff]  max-w-[340px]  p-5">
        <h2 className="card-title text-[21px] py-4">Dresses</h2>

        <img src={dress1} alt="dress" className="mb-8" />

        <span className="card-title text-[13px]  text-accent cursor-pointer  ">
          Shop now
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
  );
}

export default Grossary;
