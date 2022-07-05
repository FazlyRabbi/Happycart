import React from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const NavItems = (
    <ul className="flex space-x-7 ml-2">
      <li className="  ">
        {" "}
        <a
          href="#"
          className=" border border-transparent
              hover:border-white rounded-sm p-2 "
        >
          <span className=" inline-block">
            <AiOutlineMenu className="mr-2 text-[20px]  inline-block   " />
            All
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2 rounded-sm"
        >
          Today's Deals
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2    rounded-sm"
        >
          Customer Service
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2   rounded-sm "
        >
          Gifts to Give
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2  rounded-sm "
        >
          Gift Cards
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2   rounded-sm"
        >
          Sell on Happycart
        </a>
      </li>
      <li>
        <a
          href="#"
          className=" border border-transparent
              hover:border-white p-2 rounded-sm"
        >
          Shop Father's Day Gifts
        </a>
      </li>
    </ul>
  );

  return (
    <nav>
      <NavTop />
      <div className="nav__main flex  justify-left child:text-gray-200 text-[14px]  p-3 bg-secondary text-white">
        {NavItems}
      </div>
    </nav>
  );
}

export default Navbar;
