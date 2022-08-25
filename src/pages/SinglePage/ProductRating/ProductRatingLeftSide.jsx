import React from "react";

const ProductRatingLeftSide = () => {
  return (
    <section className="px-2">
      <div className="mb-4 space-y-2">
        <h1 className="text-2xl font-bold">Customer reviews</h1>
        <h1 className="text-lg font-medium">⭐⭐⭐⭐⭐ 4.8 out oof 5</h1>
        <h1>60,187 global ratings</h1>
      </div>
      {/* star */}
      <section className="space-y-2">
        <div className="flex justify-start items-center space-x-2">
          <h1>5 Star</h1>
          <div className="md:w-10/12 lg:w-10/12 2xl:w-10/12 w-9/12 bg-neutral rounded-md h-6 ">
            <div
              className="bg-primary h-6 rounded-lg"
              style={{ width: "45%" }}
            ></div>
          </div>
          <h1>45%</h1>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <h1>4 Star</h1>
          <div className="md:w-10/12 lg:w-10/12 2xl:w-10/12 w-9/12 bg-neutral rounded-md h-6 ">
            <div
              className="bg-primary h-6 rounded-lg"
              style={{ width: "85%" }}
            ></div>
          </div>
          <h1>85%</h1>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <h1>3 Star</h1>
          <div className="md:w-10/12 lg:w-10/12 2xl:w-10/12 w-9/12 bg-neutral rounded-md h-6 ">
            <div
              className="bg-primary h-6 rounded-lg"
              style={{ width: "25%" }}
            ></div>
          </div>
          <h1>25%</h1>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <h1>2 Star</h1>
          <div className="md:w-10/12 lg:w-10/12 2xl:w-10/12 w-9/12 bg-neutral rounded-md h-6 ">
            <div
              className="bg-primary h-6 rounded-lg"
              style={{ width: "2%" }}
            ></div>
          </div>
          <h1>2%</h1>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <h1>1 Star</h1>
          <div className="md:w-10/12 lg:w-10/12 2xl:w-10/12 w-9/12 bg-neutral rounded-md h-6 ">
            <div
              className="bg-primary h-6 rounded-lg"
              style={{ width: "0%" }}
            ></div>
          </div>
          <h1>0%</h1>
        </div>
      </section>
      <hr className="my-4 py-0.5" />
      {/* write review */}
      <section>
        <h1 className="font-bold text-xl">Review this product</h1>
        <p>Share your thoughts with other customers</p>
        <button className="border-2 my-2 py-2  rounded-lg border-gray-200 w-full hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out text-lg">
          Write a customer reivew
        </button>
      </section>
      <hr className="my-4 py-0.5" />
    </section>
  );
};

export default ProductRatingLeftSide;
