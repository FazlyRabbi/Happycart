import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import flag from "../../asstes/img/Asset 7.png";
import logo from "../../asstes/img/logo.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AiFillCaretDown,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Navtop({ openNav }) {
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState("");
  const SubmitSearch = (e) => {
    e.preventDefault();

    if (searchTag === "") navigate(`/shop`);
    if (searchTag) {
      setSearchTag("");
      navigate(`/shop/${searchTag}`);
    }
  };

  return (
    <>
      {/* {navTop for small device} */}
      <div className="bg-primary sm:block md:hidden  ">
        <div className="flex items-center  justify-between px-5 py-3  ">
          <div className="left flex space-x-2  ">
            <div className="navigator">
              <AiOutlineMenu
                className="text-[30px] block cursor-pointer"
                onClick={openNav}
              />
            </div>
            <div className="logo  max-w-[15rem] cursor-pointer">
              <Link to={`/`}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>

          <div className="right flex space-x-2   items-center  justify-between  ">
            <div className="logIn">
              <Link to={`/`}>
                <FaRegUserCircle className="text-[30px]  inline-block " />
              </Link>
            </div>
            <div className="card">
              <AiOutlineShoppingCart className="text-[35px] inline-block " />
            </div>
          </div>
        </div>

        <div className="nav__search px-4 pt-1 ">
          <form
            method="GET"
            onSubmit={SubmitSearch}
            className="search__box flex "
          >
            <input
              type="text"
              placeholder="Search on Happycart..."
              value={searchTag}
              onChange={(e) => {
                setSearchTag(e.target.value);
              }}
              className="input  grow  p-2 placeholder:text-black placeholder:font-bold rounded-lg  focus:outline-none"
            />
            <button
              onClick={SubmitSearch}
              className="bg-[#000] rounded-tr-lg py-3 px-2  rounded-br-lg  cursor-pointer  -ml-2 "
            >
              <AiOutlineSearch className=" text-[1.3rem]   text-primary font-bold" />
            </button>
          </form>
        </div>
      </div>

      {/* {navTop for large device} */}

      <div className="sm:hidden md:block px-3 bg-primary">
        <div className="nav__top flex   items-center  h-[4rem] " id="top">
          {/* navigation left side  */}
          <div className="nav__left flex items-center   ">
            {/* logo */}
            <div className="logo cursor-pointer lg:mr-5 md:mr-1 ">
              <Link to={``}>
                <img
                  src={logo}
                  alt="logo"
                  className="
                rounded-sm   border  border-primary hover:border-white p-2  h-fit "
                />
              </Link>
            </div>

            {/* location */}
            <div className="location lg:mr-5 md:mr-1 border  border-primary hover:border-white p-2 ">
              <div
                className="flex items-center cursor-pointer  
                rounded-sm"
              >
                <div className="mr-1">
                  <FaRegUserCircle className=" lg:text-[1.5rem] md:text-[1.3rem]" />
                </div>

                <div className=" leading-tight">
                  <span className="block lg:text-[12px] md:text-[12px]">
                    Delivery To
                  </span>
                  <span className="font-bold lg:text-[12px] md:text-[10px] ">
                    Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* navigation serchbar */}

          <div className="nav__search  grow lg:mr-5 md:mr-1  ">
            <form
              method="GET"
              onSubmit={SubmitSearch}
              className="search__box flex items-center "
            >
              <input
                type="text"
                value={searchTag}
                onChange={(e) => {
                  setSearchTag(e.target.value);
                }}
                placeholder="Search on Happycart..."
                className="input grow px-2 lg:py-3 md:py-2 placeholder:text-black placeholder:font-bold rounded-lg focus:outline-none"
              />
              <button
                onClick={SubmitSearch}
                className="bg-[#000] rounded-tr-lg py-1 px-1  rounded-br-lg  cursor-pointer  -ml-2 "
              >
                <AiOutlineSearch className=" lg:text-[2.5rem] md:text-[2rem]  text-primary font-bold" />
              </button>
            </form>
          </div>

          {/* navigation right */}
          <div>
            <div className="flex justify-around  ">
              <div
                className="flex items-center cursor-pointer rounded-sm
                 mr-3 border  border-primary hover:border-white p-2 "
              >
                <img src={flag} alt="flag" className=" h-fit" />
                <AiFillCaretDown className="text-white  lg:text-[1.3rem] md:text-[1rem] mt-4" />
              </div>

              <div className="flex items-center cursor-pointer  mr-3  rounded-sm border  border-primary hover:border-white p-1">
                <div className="leading-tight">
                  <span
                    className="lg:text-[12px] md:text-[10px] font-bold
            "
                  >
                    Hello, Sign in
                  </span>
                  <br />
                  <span className="font-bold lg:text-[12px] md:text-[10px]">
                    Account & Lists
                  </span>
                </div>

                <span className="block mt-5">
                  <AiFillCaretDown className="text-white ml-1 lg:text-[1.3rem] md:text-[1rem]" />
                </span>
              </div>

              <div className="flex lg:mr-5 md:mr-1 leading-tight items-center cursor-pointerrounded-sm rounded-sm border  border-primary hover:border-white p-1">
                <div className="">
                  <span
                    className="lg:text-[12px] md:text-[10px] font-bold
            "
                  >
                    Returns
                  </span>
                  <br />
                  <span className="font-bold lg:text-[12px] md:text-[10px]">
                    {" "}
                    & Orders
                  </span>
                </div>
              </div>

              <Link to="/card">
              <div className="flex  items-center cursor-pointer rounded-sm  border  border-primary hover:border-white p-1">
                <span className="">
                  <AiOutlineShoppingCart className="lg:text-[2.6rem] md:text-[2.2rem]" />
                </span>
              <span className="font-bold lg:text-[12px] md:text-[10px] mt-2">
                  Cart
                </span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navtop;
