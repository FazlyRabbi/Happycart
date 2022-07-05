import React from "react";
import Slider from "../../Components/Slider/Slider";

function PopularProductsInPc() {
  return (
    <div className="mt-7 mx-[15px]">
      <Slider
        data={{
          title: "Popular products in Pc ",
          images: [
            "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/71aLultW5EL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81a5KHEkwQL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/81CEbNSfXiL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/71hZD6S5MmL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_SY200_.jpg",
            "https://m.media-amazon.com/images/I/61Ars9rdgGS._AC_SY200_.jpg",
          ],
          id:"pc"
        }}
      />
    </div>
  );
}

export default PopularProductsInPc;
