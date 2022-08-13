import React from "react";
import logo from "../../asstes/img/logo.png";
import flag from "../../asstes/img/Asset 7.png";
import { FaRegUserCircle } from "react-icons/fa";

import {
  AiOutlineMenu,
  IoMdLocate,
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Navtop() {
  return (
    <>
      {/* {navbar for small device} */}
      <div className="bg-primary sm:block md:hidden w-[100vw] ">
        <div className="flex items-center  justify-between px-5 py-3  ">
          <div className="left flex space-x-2  ">
            <div className="navigator">
              <AiOutlineMenu className="text-[30px] block cursor-pointer" />
            </div>
            <div className="logo  max-w-[15rem] cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="right flex space-x-2   items-center  justify-between  ">
            <div className="logIn">
              <FaRegUserCircle className="text-[30px]  inline-block " />
            </div>
            <div className="card">
              <AiOutlineShoppingCart className="text-[35px] inline-block " />
            </div>
          </div>
        </div>

        {/* { navbar for large and medium device} */}
        <div className="nav__search px-4 pt-3 pb-5">
          <div className="search__box flex ">
            <input
              type="text"
              placeholder="Search on Happycart..."
              className="input   grow  placeholder:text-black placeholder:font-bold rounded-lg  focus:outline-none"
            />

            <span className=" bg-black text-primary rounded-tr-lg  rounded-br-lg   cursor-pointer  p-3 -ml-2  ">
              <AiOutlineSearch className="text-[21px]  " />
            </span>
          </div>
        </div>
      </div>

      {/* {navbar for large device} */}
      <div
        className="nav__top h-[60px] sm:hidden md:block lg:block flex bg-primary items-center justify-center "
        id="top"
      >
        {/* navigation left side  */}
        <div className="nav__left flex max-h-[60px] w-[295px]  justify-center items-center">
          <div className="logo py-5  cursor-pointer   ">
            <img
              src={logo}
              alt="logo"
              className="border border-transparent
              hover:border-white p-2 rounded-sm"
            />
          </div>
          <div className="location py-5   mx-3">
            <div
              className="flex items-center cursor-pointer  border border-transparent
              hover:border-white p-1 rounded-sm"
            >
              <div className="mr-1"></div>

              <div>
                <span className="block text-[12px] font-bold">Delivery To</span>
                <span className="font-bold m-0">Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        {/* navigation serchbar */}
        <div className="nav__search  py-5 grow    ">
          <div className="search__box">
            <div className="relative">
              <input
                type="text"
                placeholder="Search on Happycart..."
                className="input lg:w-full  h-12  placeholder:text-black placeholder:font-bold block rounded-lg  focus:outline-none w-96  "
              />

              <span className="absolute bg-black text-primary rounded-tr-lg  rounded-br-lg top-0 right-0 p-3 cursor-pointer ">
                <AiOutlineSearch className="text-[21px] " />
              </span>
            </div>
          </div>
        </div>

        {/* navigation right */}
        <div className=" mx-4  ">
          <div className="flex justify-around  max-h-[60px] p-2">
            <div
              className="flex  items-center cursor-pointer  border border-transparent rounded-sm
              hover:border-white  px-1 "
            >
              <img src={flag} alt="flag" />
              <AiFillCaretDown className="text-white  text-[12px] mt-5" />
            </div>

            <div
              className="flex  items-center cursor-pointer  mx-2 border border-transparent
              hover:border-white rounded-sm"
            >
              <div className="px-3  ">
                <span
                  className="text-[12px] font-bold
            "
                >
                  Hello, Sign in
                </span>
                <br />
                <span className="font-bold">Account & Lists</span>
              </div>

              <span className="block mt-6">
                <AiFillCaretDown className="text-white ml-1 text-[17px]" />
              </span>
            </div>

            <div
              className="flex py-5  items-center cursor-pointer  border border-transparent
              hover:border-white rounded-sm "
            >
              <div className="mx-2">
                <span
                  className="text-[12px] font-bold
            "
                >
                  Returns
                </span>
                <br />
                <span className="font-bold"> & Orders</span>
              </div>
            </div>
            <div
              className="flex items-center cursor-pointer border border-transparent
              hover:border-white rounded-sm p-1"
            >
              <span className="">
                <AiOutlineShoppingCart className="text-[35px]" />
              </span>
              <span className="font-bold mt-2">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navtop;
