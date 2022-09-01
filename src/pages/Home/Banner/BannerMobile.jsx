import React from "react";
import mobileBanner from "../../../asstes/img/mobileBanner.jpg";
import BannerCetegoryM from "./BannerCetegoryM";

function BannerMobile() {
  return (
    <div className="md:hidden sm:block">
      <div>
        <img src={mobileBanner} className="w-[100vw] h-[60vh]" />
      </div>
      <BannerCetegoryM />
    </div>
  );
}

export default BannerMobile;
