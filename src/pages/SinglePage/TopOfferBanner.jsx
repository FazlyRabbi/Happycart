import React from "react";
import OfferBanner from "../../apis/offer.json";
const TopOfferBanner = () => {
  return (
    <section className="grid grid-cols-5 py-1 px-2 bg-neutral font-medium items-center">
      <img src={OfferBanner.image} alt="Not found" className="w-16 col-span-1" />
      <h1 className="font-medium lg:text-xl col-span-3">{OfferBanner.title}</h1>
      <p className="col-span-1 text-red-500 font-semibold lg:text-2xl">
        $ {OfferBanner.price}
      </p>
    </section>
  );
};

export default TopOfferBanner;
