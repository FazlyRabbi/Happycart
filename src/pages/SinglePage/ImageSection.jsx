import React from "react";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

function ImageSection({ product }) {
  const [CurImage, setCurImage] = useState(product.mainImage);
  const imageProps = {
    smallImage: {
      alt: "Phasellus laoreet",
      isFluidWidth: false,
      src: CurImage,
      width: 320,
      height: 360,
    },
    largeImage: {
      src: CurImage,
      width: 1200,
      height: 1200,
    },
    shouldUsePositiveSpaceLens: true,
  };
  const [show, setShow] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2">
      <div className="p-2 grid grid-cols-12 gap-2 ">
        <div className="col-span-12 sm:col-span-12  md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col justify-around order-2 xl:order-1 lg:order-1 md:order-1 gap-4 w-full">
          {product.images.map((image,index) => {
            return (
              <img
              key={index}
                src={image.image}
                alt=""
                onClick={() => {
                  setCurImage(image.image);
                }}
                className="cursor-pointer w-[120px]"
              />
            );
          })}
        </div>
        <div className="col-span-10  order-1 xl:order-2 lg:order-2 w-full p-2 ]">
          <ReactImageMagnify {...imageProps} className="" />
        </div>
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
