import React from "react";
import headPhone from "../../../../asstes/img/gaming1.jpg"

function PopularProductM() {
  return (
    <section className="popularProductM p-4 mt-2  bg-[#fff]">
      <div>
        <h1 className="  text-[1.3rem]  font-extralight">
          Internationally Popular Products in Wireless
        </h1>

        <div className="produt__container">

        <div className="product my-5 flex   justify-start">
          <div className="mobile">
            <img src={headPhone} className="max-w-[130px]" />
          </div>
          <div className="details">
            <h2 className="title text-lg">Remax k02 gaming headphone</h2>
            <p className="price text-xl">150tk</p>
          </div>
        </div>
        <div className="product my-5 flex   justify-start">
          <div className="mobile">
            <img src={headPhone} className="max-w-[130px]" />
          </div>
          <div className="details">
            <h2 className="title text-lg">Remax k02 gaming headphone</h2>
            <p className="price text-xl">150tk</p>
          </div>
        </div>
        <div className="product my-5 flex   justify-start">
          <div className="mobile">
            <img src={headPhone} className="max-w-[130px]" />
          </div>
          <div className="details">
            <h2 className="title text-lg">Remax k02 gaming headphone</h2>
            <p className="price text-xl">150tk</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProductM;
