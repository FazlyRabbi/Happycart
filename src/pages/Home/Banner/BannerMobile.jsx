import React from "react";
import Slider from "react-slick";
import b1 from "../../../asstes/img/b1.jpg";
import b2 from "../../../asstes/img/b2.jpg";
import b3 from "../../../asstes/img/b3.jpg";

function BannerMobile() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 10000,
    cssEase: "linear"
  };
  return (
    <div className="md:hidden sm:block">
      <Slider {...settings}>
        <div>
          <img src={b1} style={{ width: "100%", height: "100%" }} />
        </div>

        <div>
          <img src={b2} style={{ width: "100%", height: "100%" }} />
        </div>

        <div>
          <img src={b3} style={{ width: "100%", height: "100%" }} />
        </div>
      </Slider>
    </div>
  );
}

export default BannerMobile;
