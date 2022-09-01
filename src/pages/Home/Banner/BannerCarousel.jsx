import React from "react";

import SliderMain from "../../Components/SliderMain/SliderMain";

// import carousel photo
import b1 from "../../../asstes/img/b1.jpg";
import b2 from "../../../asstes/img/b2.jpg";
import b3 from "../../../asstes/img/b3.jpg";

function BannerCarousel() {
  return (
    <div>
      <SliderMain>
        <div>
          <img src={b1} style={{ width: "100%", height: "100%" }} />
        </div>

        <div>
          <img src={b2} style={{ width: "100%", height: "100%" }} />
        </div>

        <div>
          <img src={b3} style={{ width: "100%", height: "100%" }} />
        </div>
      </SliderMain>
    </div>
  );
}

export default BannerCarousel;
