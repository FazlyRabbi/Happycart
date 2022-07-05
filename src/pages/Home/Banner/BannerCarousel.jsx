import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carosoul.css";

// import carousel photo
import b1 from "../../../asstes/img/b1.jpg";
import b2 from "../../../asstes/img/b2.jpg";
import b3 from "../../../asstes/img/b3.jpg";
import b4 from "../../../asstes/img/b4.jpg";

// custom arrow button
function SampleNextArrow(props) {
  const { className,  onClick } = props;
  console.log(className);
  return (
    <div className={className} onClick={onClick}>
      <div>
        <IoIosArrowForward className="text-[50px] text-info" />
      </div>
    </div>
  );
}


function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
    <div>
      <IoIosArrowBack className="text-[50px] text-info" />
    </div>
  </div>
  );
}

function BannerCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider
        settings={settings}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        <div>
          <img src={b1} />
        </div>
        <div>
          <img src={b2} />
        </div>
        <div>
          <img src={b3} />
        </div>
        <div>
          <img src={b4} />
        </div>
      </Slider>
    </>
  );
}

export default BannerCarousel;
