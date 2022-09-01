import Slider from "react-slick";
import ProductCard from "./../../shared/ProductCard/ProductCard";
const RelatedProducts = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
    <div className="p-4 lg:p-10">
      <Slider {...settings} className="">
        {products.map((product, index) => {
          return (
            <div key={index} className="mx-2 p-2 ">
              <ProductCard data={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
