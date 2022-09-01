import React from "react";
import mobile from "../../../asstes/img/gaming2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function BannerCetegoryM() {
  return (
    <div className="-mt-[180px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-2">
            <div className=" bg-[#fff]  shadow-xl rounded-md w-[120px] h-[170px] ">
              <h1 className="p-2 ">Continue Shopping for</h1>
              <img src={mobile} alt="img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCetegoryM;
