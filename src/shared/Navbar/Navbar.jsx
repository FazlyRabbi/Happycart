import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import NavTop from "./NavTop";

function Navbar({ searchInput }) {
  const openNav = () => {
    document.getElementById("mySideNav").style.animation =
      "expand 0.3s forwards";

    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const NavItems = (
    <>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm  px-2 py-1 lg:block sm:hidden "
      >
        <span>
          <AiOutlineMenu className="mr-2 text-[20px]  inline-block  " />
          All
        </span>
      </a>

      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm  px-1 py-1"
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm   px-1 py-1"
      >
        <Link to={`/`}>Customer Service</Link>
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm  px-1 py-1"
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm  px-1 py-1"
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit   rounded-sm px-1 py-1"
      >
        Customer Service
      </a>
    </>
  );

  return (
    <nav>
      <NavTop openNav={openNav} searchInput={searchInput} />

      {/* {navbar for mobile device} */}

      <div className="navBar__mobile flex overflow-x-scroll bg-primary  overflow-y-hidden space-x-3 px-3 font-bold snap-x py-2    items-center ">
        {NavItems}
      </div>

      {/* {navbar for big device} */}
      {/* 
      <div className="nav__main flex  justify-left child:text-gray-200 text-[14px]  p-3 bg-secondary text-white">
         {NavItems} 
      </div>  */}
    </nav>
  );
}

export default Navbar;
