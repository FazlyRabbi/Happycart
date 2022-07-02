import React from "react";

// import Swiper core and required modules
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import carousel photo
import pc1 from "../../../asstes/img/pc1.jpg";
import pc2 from "../../../asstes/img/pc2.jpg";
import pc3 from "../../../asstes/img/pc3.jpg";
import pc4 from "../../../asstes/img/pc4.jpg";
import pc5 from "../../../asstes/img/pc5.jpg";
import pc6 from "../../../asstes/img/pc6.jpg";
import pc7 from "../../../asstes/img/pc7.jpg";
import pc8 from "../../../asstes/img/pc8.jpg";
import pc9 from "../../../asstes/img/pc9.jpg";
import pc10 from "../../../asstes/img/pc10.jpg";
import pc11 from "../../../asstes/img/pc11.jpg";
import pc12 from "../../../asstes/img/pc12.jpg";
import pc13 from "../../../asstes/img/pc13.jpg";

function PopularProductsInBeauty() {
  return (
    <div className="mx-5 bg-white px-5 py-7 my-6">
      <h1 className="text-[21px] font-bold">
        Popular products in PC internationally
      </h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={7}
        navigation
        scrollbar={{ draggable: true }}
        className="max-h-64"
      >
        <SwiperSlide>
          <img src={pc1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc7} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc8} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc9} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc10} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc11} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc12} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pc13} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularProductsInBeauty;
