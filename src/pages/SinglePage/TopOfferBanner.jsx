import React from "react";
import OfferBanner from "../../apis/offer.json";
const TopOfferBanner = () => {
  return (
    <section className="flex justify-center space-x-5 py-1 px-2 items-center bg-gray-100 font-medium">
      <img src={OfferBanner.image} alt="Not found" className="w-12" />
      <div className="flex space-x-3 items-center">
        <h1 className="font-medium lg:text-xl">{OfferBanner.title}</h1>
        <p className="text-red-500 font-semibold lg:text-2xl">
          $ {OfferBanner.price}
        </p>
      </div>
    </section>
  );
};

export default TopOfferBanner;
