import React from "react";
import { Link } from "react-router-dom";
import Star from "../../../shared/Star";

const ShopPageCard = ({ product }) => {
  return (
    <div className="border border-neutral rounded-md w-full hover:shadow-sm transition-all duration-200 ease-linear">
      {product.best_seller && (
        <h1 className="bg-secondary text-white font-medium w-max px-4 py-2 mb-2 rounded-r-md">
          Best Seller
        </h1>
      )}
      <figure>
        <div className="hover-animation h-[180px] xl:h-[215px] bg-neutral">
          <img className="img-back" src={product.hover} alt="" />
          <img className="img-front" src={product.image} alt="" />
        </div>

        <figcaption className="mt-4 p-2">
          <Link to={"/single"}>
            <h2 className="font-medium text-lg md:text-xl lg:text-2xl xl:text-2xl hover:text-secondary transition duration-200 ease-in cursor-pointer antialiased">
              {product.title}
            </h2>
          </Link>
          <p>
            {" "}
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />{" "}
            <span className="mx-2 text-xl hover:text-secondary transition duration-150 ease-linear cursor-pointer">
              {product.rateing}
            </span>
          </p>
          {product.discount && (
            <h1 className="my-2">
              <span className="text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold text-secondary mr-1">
                -{product.discount}%
              </span>{" "}
              <span className="text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                ৳{" "}
                {Math.abs(
                  (product.discount / 100) * product.price - product.price
                )}
              </span>
              <span
                className="ml-3 text-lg "
                style={{ textDecoration: "line-through" }}
              >
                ৳{product.price}
              </span>
            </h1>
          )}
          {!product.discount && (
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mt-2">
              ৳ {product.price}
            </h1>
          )}
          {/* <h1 className={`${product.condition === "used" && "bg-[#eee]"} ${product.condition === "new" && "bg-secondary"} w-max py-2 px-4 font-medium rounded-md capitalize`}>{product.condition}</h1> */}
        </figcaption>
      </figure>
    </div>
  );
};

export default ShopPageCard;
