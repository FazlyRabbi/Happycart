import React from "react";

const CompanyHighlights = () => {
  return (
    <section className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-y-4 lg:gap-y-0">
      <div className=" flex items-center space-x-10 col-span-3 md:col-span-1 lg:col-span-1 2xl:col-span-1">
        <div className="w-32 h-32 rounded-full bg-red-400 flex justify-center items-center text-lg text-white">
          Logo
        </div>
        <div>
          <div className="border-b-2 pb-1 flex space-x-4">
            <h1 className="font-medium text-lg">
              Employess <br />
              <span className="font-bold text-xl">5-10</span>
            </h1>
            <h1 className="font-medium text-lg">
              R&D Staffs <br />
              <span className="font-bold text-xl">5-10</span>
            </h1>
          </div>
          <h1 className="text-xl">Verified Certifications ( 0 ) </h1>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-2 2xl:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 gap-4 p-2 text-center">
        <h1>Image Here</h1>
        <h1>Image Here</h1>
        <h1>Image Here</h1>
        <h1>Image Here</h1>
        <h1>Image Here</h1>
      </div>
    </section>
  );
};

export default CompanyHighlights;
