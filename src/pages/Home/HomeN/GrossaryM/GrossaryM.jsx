import React from "react";
// import img
import gaming1 from "../../../../asstes/img/gaming1.jpg";
import gaming2 from "../../../../asstes/img/gaming2.jpg";
import gaming3 from "../../../../asstes/img/gaming3.jpg";
import gaming4 from "../../../../asstes/img/gaming4.jpg";

function GrossaryM() {
  return (
    <section className="card rounded-none  px-5 py-4 bg-[#fff] mt-2">
      <h2 className="card-title text-[21px] py-4">Gaming accessories</h2>

      <div className="productsCategory text-[12px] mb-3">
        <div className="row__1 flex ">
          <div className="  cursor-pointer">
            <img className="" src={gaming1} alt="gaming headphone " />
          </div>
          <div>
            <img src={gaming2} alt="gaming keyboard" />
          </div>
        </div>

        <div className="row__2 flex">
          <div className=" cursor-pointer">
            <img src={gaming3} alt="" />
          </div>
          <div>
            <img src={gaming4} alt="" />
          </div>
        </div>
      </div>

      <span className="card-title text-lg  text-accent cursor-pointer py2">
        Shop Now
      </span>
    </section>
  );
}

export default GrossaryM;
