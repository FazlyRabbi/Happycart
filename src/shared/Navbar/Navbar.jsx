import React from "react";
import NavTop from "./NavTop";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
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
              hover:border-white rounded-sm p-2 sm:hidden lg:block  "
      >
        <span className=" inline-block ">
          <AiOutlineMenu className="mr-2 text-[20px]  inline-block  " />
          All
        </span>
      </a>

      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit py-3  rounded-sm "
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit py-3  rounded-sm  "
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit py-3  rounded-sm "
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit py-3  rounded-sm "
      >
        Customer Service
      </a>
      <a
        href="#"
        className=" border border-primary
              xl:hover:border-white lg:hover:border-white  w-fit min-w-fit py-3  rounded-sm"
      >
        Customer Service
      </a>
    </>
  );

  return (
    <nav>
      <NavTop openNav={openNav} />
      {/* {navbar for mobile device} */}
      <div className="navBar__mobile flex overflow-x-scroll bg-primary  overflow-y-hidden space-x-3 px-3 font-bold snap-x ">
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
