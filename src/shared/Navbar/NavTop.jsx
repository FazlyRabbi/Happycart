import React from "react";
import logo from "../../asstes/img/logo.png";
import flag from "../../asstes/img/Asset 7.png";
import { IoMdLocate } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navtop() {
  return (
    <div
      className="nav__top h-[60px] flex bg-primary items-center justify-center "
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
            <div className="mr-1">
              <IoMdLocate />
            </div>

            <div>
              <span className="block text-[12px] font-bold">Delivery To</span>
              <span className="font-bold m-0">Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* navigation serchbar */}
      <div className="nav__search  py-5 grow w-[1235px]  ">
        <div className="search__box">
          <div className="relative">
            <input
              type="text"
              placeholder="Search on Happycart..."
              class="input lg:w-full md:w-64 h-12  placeholder:text-black placeholder:font-bold block rounded-lg  focus:outline-none w-96  "
              
            />
            <span className="absolute bg-black text-primary rounded-tr-lg  rounded-br-lg top-0 right-0 p-3 cursor-pointer ">
              <AiOutlineSearch className="text-[21px] " />
            </span>
          </div>
        </div>
      </div>

      {/* navigation right */}
      <div className=" mx-4 w-[380px]  ">
        <div className="flex justify-around  max-h-[60px] p-2">




          <div className="flex  items-center cursor-pointer  border border-transparent rounded-sm
              hover:border-white  px-1 ">

            <img
              src={flag}
              alt="flag"
           
            />
              <AiFillCaretDown className="text-white  text-[12px] mt-5" />
            
          </div>






          <div className="flex   items-center cursor-pointer  mx-2 border border-transparent
              hover:border-white rounded-sm">
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




          <div className="flex py-5  items-center cursor-pointer  border border-transparent
              hover:border-white rounded-sm ">
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

          <div className="flex items-center cursor-pointer border border-transparent
              hover:border-white rounded-sm p-1">
            <span className="">
              <AiOutlineShoppingCart className="text-[35px]" />
            </span>
            <span className="font-bold mt-2">Cart</span>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Navtop;
