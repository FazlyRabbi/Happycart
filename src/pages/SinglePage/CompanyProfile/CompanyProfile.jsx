import React, { useState } from "react";
import CompanyOverview from "./CompanyOverview";
import ProductsCategories from "./ProductsCategories";
import CompanyProducts from "./CompanyProducts";
import CompanyHighlights from "./CompanyHighlights";

const CompanyProfile = () => {
  const [step, setStep] = useState(1);
  return (
    <section className="px-4 py-4">
      <h1 className="text-4xl overflow-hidden text-center font-bold mb-6">
        Company Profile
      </h1>
      <div className="flex justify-around items-center lg:text-lg text-xs font-semibold capitalize border-2 pt-4 space-x-1">
        <h1
          className={`cursor-pointer pb-4 ${
            step === 1 && "border-b-4 border-red-500"
          }`}
          onClick={() => {
            setStep(1);
          }}
        >
          Company Overview
        </h1>
        <h1
          className={`cursor-pointer pb-4 ${
            step === 2 && "border-b-4 border-red-500"
          }`}
          onClick={() => {
            setStep(2);
          }}
        >
          Products Categories
        </h1>
        <h1
          className={`cursor-pointer pb-4 ${
            step === 3 && "border-b-4 border-red-500"
          }`}
          onClick={() => {
            setStep(3);
          }}
        >
          Products
        </h1>
        <h1
          className={`cursor-pointer pb-4 ${
            step === 4 && "border-b-4 border-red-500"
          }`}
          onClick={() => {
            setStep(4);
          }}
        >
          Company Highlights
        </h1>
      </div>
      {step === 1 && <CompanyOverview />}
      {step === 2 && <ProductsCategories />}
      {step === 3 && <CompanyProducts />}
      {step === 4 && <CompanyHighlights />}
    </section>
  );
};

export default CompanyProfile;
