import React from "react";
import { useState } from "react";

function ImageSection({ product }) {
  const [show, setShow] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <div className="p-2 grid lg:grid-cols-12">
        <div className="flex lg:flex-col gap-2 lg:col-span-2 order-2 md:order-none lg:order-none my-2 lg:my-0 ">
          <img src={product.one} className="w-10/12" />
          <img src={product.two} className="w-10/12" />
          <img src={product.three} className="w-10/12" />
          <img src={product.four} className="w-10/12" />
          <img src={product.five} className="w-10/12" />
        </div>
        <img
          src={product.mainImage}
          className="max-w-full col-span-10 w-[170px] md:w-full "
        />
      </div>
      <div className="col-span-12 lg:col-span-1">
        <h2 className="text-xl mb-2">{product.details.title}</h2>
        <a className="text-blue-400 font-bold mb-2">
          {product.details.shop_name}
        </a>
        <div className="flex gap-3">
          <span>
            ⭐⭐⭐⭐⭐{" "}
            <span className="text-blue-400">
              {product.details.star} out of 5 stars
            </span>
          </span>
          <span className="text-blue-400">
            {product.details.rating} ratings
          </span>
        </div>
        <div className="flex gap-2 mb-3">
          <p className="font-bold">Printing Technology</p>
          <p>Inkjet</p>
        </div>
        <div className="flex gap-2 mb-3">
          <p className="font-bold">Printing Technology</p>
          <p>Inkjet</p>
        </div>
        <div className="flex gap-2 mb-3">
          <p className="font-bold">Printing Technology</p>
          <p>Inkjet</p>
        </div>
        <div className="flex gap-2 mb-3">
          <p className="font-bold">Printing Technology</p>
          <p>Inkjet</p>
        </div>
        {/* Show more */}
        <div className={`${show ? "" : "hidden"}`}>
          <div className="flex gap-2 mb-3">
            <p className="font-bold">Printing Technology</p>
            <p>Inkjet</p>
          </div>
          <div className="flex gap-2 mb-3">
            <p className="font-bold">Printing Technology</p>
            <p>Inkjet</p>
          </div>
          <div className="flex gap-2 mb-3">
            <p className="font-bold">Printing Technology</p>
            <p>Inkjet</p>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show More"}
        </button>
      </div>
      <div className="col-span-12 m-4  md:col-span-1">
        <div className="p-4 border-2 border-gray-800 rounded-md ">
          <p>
            Buy New :{" "}
            <span className="text-red-800">Tk. {product.details.price}</span>
          </p>
          <br />
          <p className="mb-2">
            Tk. 100 delivery{" "}
            <span className="font-bold">July 12 - August 2.</span>
          </p>
          <p className="mb-3">
            Delivery to <span className="font-bold">Dhaka</span>
            <span className="text-[18px">{"(Change)"}</span>
          </p>
          <p>
            Solve by <span className="font-bold text-blue-400">HP</span>
          </p>
          <br />
          <div className="flex justify-center">
            <button className="bg-yellow-400 w-8/12 text-black rounded-full py-2 px-4">
              Add to Cart
            </button>
            <br />
          </div>
        </div>
        <br />
        <div className="border-2 border-gray-800 p-4 rounded-md flex justify-center">
          <button className="py-3 px-4 bg-gray-100 border-2 border-gray-500 w-9/12 rounded-md">
            Add to Cart List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
