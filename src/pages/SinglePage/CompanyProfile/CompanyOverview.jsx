import React from "react";

const CompanyOverview = () => {
  return (
    <section className="my-4 p-2">
      <div className="mb-5">
        <h1 className="uppercase font-bold text-xl">Company overview</h1>
        <p className="text-xl">Company Album</p>
      </div>
      {/* <div className="grid lg:grid-cols-6 grid-cols-3 bg-gray-100 p-0.5">
        <div>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Buniness Type
          </h1>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Buniness Product
          </h1>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Total Annual Revinue
          </h1>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Certifications
          </h1>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Partents
          </h1>
          <h1 className="border-2 border-gray-200 py-2 px-4 text-lg font-semibold">
            Main Markets
          </h1>
        </div>
        <div className="lg:col-span-2 col-span-2 bg-white">
          <h1 className="border-t-2 border-b-2 border-gray-200 py-2 px-4 text-lg font-normal">
            Trading Company
          </h1>
          <h1 className="border-t-2 border-b-2 border-gray-200 py-2 px-4 text-lg font-normal underline">
            Phone Case, Airpods Case, Smart watch strap, Smart Watch Speackers
          </h1>
          <h1 className="border-t-2 border-b-2 border-gray-200 py-2 px-4 text-lg font-normal ">
            US$10 Million - US$50 Million
          </h1>
        </div>
        <div>3</div>
        <dir className="lg:col-span-2 col-span-2 bg-red-600">4</dir>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-100 gap-y-2 lg:gap-y-0">
        <div className="border-2">
          <div className="grid grid-cols-3 ">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Busines Type
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl ">
              Trading Company
            </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Main Products
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl underline">
              Phone Case, Airpods Case, Smart Watch, Strap, Smart Watch,
              Speckers
            </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Total Annual Revenue
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl">
              US$10 Million - US$50 Million
            </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Certifications
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl">.</h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Patents
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl">.</h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Main Markets
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl underline">
              North America 70.00% <br /> Africa 5.00% <br />
              Southeast Asia 5.00%
            </h1>
          </div>
        </div>
        <div className="border-2">
          <div className="grid grid-cols-3 ">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Country / Region
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl ">
              Hubei, China
            </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Total Employee
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl ">
              5 - 10 People
            </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Year Established
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl">2017 </h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Product Certifications
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl">.</h1>
          </div>
          <div className="grid grid-cols-3 border-t-2">
            <h1 className="col-span-1 text-xl font-medium py-2 px-4">
              Trademarks(2)
            </h1>
            <h1 className="bg-white col-span-2 py-2 px-4 font-xl underline">
              Disney,Marvel
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
