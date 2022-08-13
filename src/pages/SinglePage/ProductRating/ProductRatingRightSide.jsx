import React from "react";

const ProductRatingRightSide = () => {
  return (
    <section className="w-10/12 mx-auto">
      <h1 className="text-xl font-bold my-3">Review with images</h1>
      <section>
        <div>
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gray-500 flex justify-center items-center text-white">
              A
            </div>
            <h1>Amazon Customer</h1>
          </div>
          <div className="my-2">
            <div className="flex items-center space-x-2">
              <h1>⭐⭐⭐⭐⭐</h1>
              <h1 className="font-bold text-lg">Great too for artists</h1>
            </div>
            <h1>Reviwed in the united state on December 7, 2018</h1>
            <p className="font-bold text-orange-600">Verified Purches</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quis adipisci, blanditiis dolore consequuntur quas nulla quia
              porro molestias eligendi. Quas nam rerum voluptate sunt suscipit
              reprehenderit repudiandae accusamus vero!
            </p>
            <div className="grid md:grid-cols-6 lg:grid-cols-6 2xl:grid-cols-6 grid-cols-3 gap-4 my-2">
              <img
                src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
                alt=""
                className="w-16 my-2 md:w-20 lg:w-22 2xl:w-26"
              />
              <img
                src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
                alt=""
                className="w-16 my-2 md:w-20 lg:w-22 2xl:w-26"
              />
              <img
                src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
                alt=""
                className="w-16 my-2 md:w-20 lg:w-22 2xl:w-26"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductRatingRightSide;
