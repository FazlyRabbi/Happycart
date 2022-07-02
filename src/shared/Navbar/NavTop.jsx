import React from "react";
import logo from "../../asstes/img/logo.png";
import flag from "../../asstes/img/Asset 7.png";
import { IoMdLocate } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";


function Navtop() {
  return (
    <div className="nav__top h-[60px] flex bg-primary items-center  justify-center" id="top">
      {/* navigation left side  */}
      <div className="nav__left flex ">
        <div className="logo py-5 mx-3 cursor-pointer  ">
          <img src={logo} alt="logo" />
        </div>

        <div className="location py-5   mx-3">
          <div className="flex items-center mx-2 cursor-pointer">
            <div className="mr-1">
              <IoMdLocate />
            </div>
            <div>
              <span className="block text-[12px] font-bold">Delivery To</span>
              <span className="font-bold">Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* navigation serchbar */}
      <div className="nav__search  py-5 xl:w-2/3 lg:w-1/3 md:w-1/3  ">
        <div className="search__box  mx-3">
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
      <div className=" mx-3 ">
        <div className="flex">
          <div className="flex  py-5  items-center cursor-pointer">
            <img src={flag} alt="flag" />

            <span className="block mt-4">
              {" "}
              <AiFillCaretDown className="text-white mr-1 text-[17px] " />
            </span>
          </div>

          <div className="flex py-5  items-center cursor-pointer  mx-2 ">
            <div>
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
              {" "}
              <AiFillCaretDown className="text-white ml-1 text-[17px]" />
            </span>
          </div>

          <div className="flex py-5  items-center cursor-pointer   ">
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

          <div className="flex py-5  items-center cursor-pointer ">
            <span className="ml-2">
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
