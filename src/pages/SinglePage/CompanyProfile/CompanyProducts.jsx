import React from "react";
import ProductCard from "./../../../shared/ProductCard/ProductCard";
import Slider from "react-slick";
import ProductCategoryCard from "./../../../shared/ProductCategoryCard";

const CompanyProducts = ({ ProfileProductCategory, products }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    // speed: 6000,
    // autoplaySpeed: 6000,
    // cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 p-4 gap-2">
        <div className="md:col-span-1 lg:col-span-1 2xl:col-span-1 col-span-4">
          <ProductCategoryCard curElem={ProfileProductCategory[0]} />
        </div>
        <div className="md:col-span-3 lg:col-span-3 2xl:col-span-3 col-span-4 ">
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div key={index} className="">
                  <ProductCard data={product} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 p-4 gird-cols-4 gap-2">
        <div className="md:col-span-1 lg:col-span-1 2xl:col-span-1 col-span-4">
          <ProductCategoryCard curElem={ProfileProductCategory[1]} />
        </div>
        <div className="md:col-span-3 lg:col-span-3 2xl:col-span-3 col-span-4 ">
          <Slider {...settings} className="">
            {products.map((product, index) => {
              return (
                <div key={index} className=" ">
                  <ProductCard data={product} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 p-4 gap-2">
        <div className="md:col-span-1 lg:col-span-1 2xl:col-span-1 col-span-4">
          <ProductCategoryCard curElem={ProfileProductCategory[1]} />
        </div>
        <div className="md:col-span-3 lg:col-span-3 2xl:col-span-3 col-span-4 ">
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div key={index} className="mx-2 p-2 ">
                  <ProductCard data={product} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompanyProducts;
