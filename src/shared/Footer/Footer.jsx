import React from "react";
import FooterBottom from "./FooterBottom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import SliderFooter from "../../pages/Components/SliderFooter/SliderFooter";

import "./footer.css";

function Footer() {
  return (
    <>
      <footer className=" bg-primary flex px-56    justify-between  h-[490px]  items-center   ">
        <div className="footer__items  py-5 grid xl:grid-cols-3 md:grid-cols-2 md:gap-x-6  gap-y-6  w-[50%]   justify-items-center ">
          <div className="text-[14px]  ">
            <span class=" text-[16px] text-black font-bold">Services</span>
            <a class="link link-hover block text-white   ">Help Center</a>
            <a class="link link-hover block text-white">How to Buy</a>
            <a class="link link-hover block text-white">Returns & Refunds</a>
            <a class="link link-hover block text-white">Contact Us</a>
            <a class="link link-hover block text-white">Terms & Conditions</a>
          </div>

          <div className="text-[14px]">
            <span class=" text-[16px] text-black font-bold">Happycart</span>
            <a class="link link-hover block text-white   ">About Happycart</a>
            <a class="link link-hover block text-white">
              Happy with Digital Payments
            </a>
            <a class="link link-hover block text-white">Returns & Refunds</a>
            <a class="link link-hover block text-white">Contact Us</a>
            <a class="link link-hover block text-white">Terms & Conditions</a>
          </div>

          <div>
            <span class=" text-[16px] text-black font-bold">Services</span>
            <a class="link link-hover block text-white   ">Help Center</a>
            <a class="link link-hover block text-white">How to Buy</a>
            <a class="link link-hover block text-white">Returns & Refunds</a>
            <a class="link link-hover block text-white">Contact Us</a>
            <a class="link link-hover block text-white">Terms & Conditions</a>
          </div>
        </div>

        {/* quote__slider */}

        <div className="quote__slider w-[50%] relative  ">
          <div className=" m-auto h-[30rem] w-[80%]   ">
            <h1 className="px-28 bg-secondary py-2 text-center border-2 border-white xl:text-[16px] sm:text-[12px] font-bold ">
              HappyCart Small Stories
            </h1>

            <div
              className="border-2 border-white border-t-0 border-b-0 text-center  quotes__wrapper xl:py-32 flex
              lg:py-16 sm:py-16  "
            >
              <SliderFooter>

                <div>
                  <p className=" text-justify font-bold xl:text-[16px] sm:text-[12px]    px-12">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis possimus nam accusamus adipisci optio alias"
                  </p>
                  <p className="author mt-5 xl:ml-[20rem] lg:ml-[10rem] ">
                    Md. Fazlul Karim{" "}
                  </p>
                </div>
                <div>
                  <p className=" text-justify font-bold xl:text-[16px] sm:text-[12px]    px-12">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis possimus nam accusamus adipisci optio alias"
                  </p>
                  <p className="author mt-5 xl:ml-[20rem] lg:ml-[10rem] ">
                    Md. Nishan{" "}
                  </p>
                </div>
                <div>
                  <p className=" text-justify font-bold xl:text-[16px] sm:text-[12px]    px-12">
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis possimus nam accusamus adipisci optio alias"
                  </p>
                  <p className="author mt-5 xl:ml-[20rem] lg:ml-[10rem] ">
                    Md. Raju{" "}
                  </p>
                </div>


                

                
                
              </SliderFooter>
            </div>

            <h1 className="px-28 py-2 bg-secondary text-center border-2   border-white xl:text-[16px] sm:text-[12px] font-bold">
              Send Us Stories
            </h1>
          </div>
        </div>
      </footer>

      <FooterBottom />
    </>
  );
}

export default Footer;
