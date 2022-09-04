import React from "react";
import Slider from "../../Components/Slider/Slider";

function TopSellersInToys() {
  return (
    <div className="mt-[1rem] xl:mx-6 sm:mx-4  bg-[#fff]">
      <Slider
        data={{
          title: "Popular products in Toy ",
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
          id:"toy"
        }}
      />
    </div>
  );
}

export default TopSellersInToys;
