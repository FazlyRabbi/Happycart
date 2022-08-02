import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./slider.css";

function Slider({ data }) {
  const scrollRight = () =>
    (document.getElementById(data.id).scrollLeft += 600);

  const scrollLeft = () => (document.getElementById(data.id).scrollLeft -= 600);

  return (

    <div className="slider bg-white h-[340px]  p-10 ">
      <h1 className="text-[21px] font-bold mb-2 ">{data.title}</h1>
      <div className=" relative">



        <div className="slider__controller">
         
         
          <div
            className=" arrow absolute top-[20%]  rounded-[3px] left-0 cursor-pointer  shadow-xl p-[1px]
          "
            onClick={scrollLeft}
          >
            <div
              className="border-2 border-transparent
           active:border-accent py-7  ease-in-out duration-200 rounded-[3px]"
            >
              <IoIosArrowBack className="text-[40px] left-arrow   text-info " />
            </div>
          </div>




          <div
            className="arrow absolute  top-[20%] right-0 cursor-pointer 
            rounded-[3px]  shadow-lg p-[1px]       "
            onClick={scrollRight}
          >
            <div
              className="border-2 border-transparent
              active:border-accent py-7  ease-in-out duration-200 rounded-[3px]"
            >
              <IoIosArrowForward className="text-[40px]  text-info " />
            </div>
          </div>

        </div>






        {/* slider items */}
        <div
          className="slide__items flex w-[100%] h-auto overflow-x-scroll 
        scroll-smooth cursor-pointer  slider__wrapper "
          id={data.id}
        >

          {data.images.map((link, i) => (
            <div
              className="min-w-fit h-[200px] bg-black text-[15px] text-white font-bold align-center mr-5 mb-7 "
              key={i}
            >
              <img src={link} alt="image" />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Slider;

// scrollbar-thin
//          scrollbar-thumb-gray-500 scrollbar-track-gray-300
