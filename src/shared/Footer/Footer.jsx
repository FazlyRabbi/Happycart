import React from "react";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <footer className=" bg-primary flex px-24  justify-evenly border-2 border-white ">
        <div className="footer__items  py-5 flex justify-between  ">
          <div>
            <div className="text-[14px]  ">
              <span class=" text-[16px] text-black font-bold">Services</span>
              <a class="link link-hover block text-white   ">Help Center</a>
              <a class="link link-hover block text-white">How to Buy</a>
              <a class="link link-hover block text-white">Returns & Refunds</a>
              <a class="link link-hover block text-white">Contact Us</a>
              <a class="link link-hover block text-white">Terms & Conditions</a>
            </div>

            <div className="text-[14px] mt-4 ">
              <span class=" text-[16px] text-black font-bold">Happycart</span>
              <a class="link link-hover block text-white   ">About Happycart</a>
              <a class="link link-hover block text-white">
                Happy with Digital Payments
              </a>
              <a class="link link-hover block text-white">Returns & Refunds</a>
              <a class="link link-hover block text-white">Contact Us</a>
              <a class="link link-hover block text-white">Terms & Conditions</a>
            </div>
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

        <div className="quote__slider flex justify-center">
          <div>
            <h1 className="px-28 bg-secondary py-4  border-t-0   text-center border-2 border-white text-[16px] font-bold">
              HappyCart Small Stories
            </h1>
            <div className="border-2 border-white border-t-0 border-b-0 text-center py-20">
              <span class="footer-title">Services</span>
              <a class="link link-hover block">Branding</a>
              <a class="link link-hover block">Design</a>
              <a class="link link-hover block">Branding</a>
              <a class="link link-hover block">Design</a>
            </div>
            <h1 className="px-28 py-4 bg-secondary text-center border-2  border-b-0 border-white text-[16px] font-bold">
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
