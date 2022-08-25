import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className=" bg-gray-100 p-4 max-w-xs rounded-md hover:shadow-md overflow-hidden cursor-pointer">
      <div className="mx-auto text-center">
        <img
          className="lg:w-full lg:h-52 w-20 mx-auto  object-contain"
          src={data.image}
          alt=""
        />
      </div>
      <h1 className="text-xs lg:text-sm my-2">{data.title.slice(0, 70)}...</h1>
      <p className="font-semibold lg:text-xl text-md text-red-600 my-2">
        Price : {data.price} Tk
      </p>
      <button className="text-center bg-primary w-full py-2 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-white transition duration-150 ease-linear capitalize">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
