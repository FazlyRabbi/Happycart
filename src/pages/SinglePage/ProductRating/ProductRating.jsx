import React from "react";
import ProductRatingLeftSide from "./ProductRatingLeftSide";
import ProductRatingRightSide from "./ProductRatingRightSide";

const ProductRating = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 px-4 py-6">
        <div className="col-span-5 md:col-span-2 lg:col-span-2 2xl:col-span-2">
          <ProductRatingLeftSide />
        </div>
        <div className="col-span-5 md:col-span-3 lg:col-span-3 2xl:col-span-3">
          <ProductRatingRightSide />
        </div>
      </div>
    </section>
  );
};

export default ProductRating;
