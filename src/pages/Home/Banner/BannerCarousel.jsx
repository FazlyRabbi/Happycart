import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import carousel photo
import b1 from "../../../asstes/img/b1.jpg";
import b2 from "../../../asstes/img/b2.jpg";
import b3 from "../../../asstes/img/b3.jpg";
import b4 from "../../../asstes/img/b4.jpg";

function BannerCarousel() {
  return (
    <>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        className="cursor-pointer"
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
      </Carousel>
    </>
  );
}

export default BannerCarousel;
