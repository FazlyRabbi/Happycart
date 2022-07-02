import React from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const NavItems = (
    <ul className="flex space-x-7 ml-3">
      <li>
        {" "}
        <a href="#" className="  hover:outline outline-1  outline-offset-4  ">
          <span className=" inline-block">
            <AiOutlineMenu className="mr-2 text-[20px]  inline-block   " />
            All
          </span>
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
          Today's Deals
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
          Customer Service
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
          Gifts to Give
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
          Gift Cards
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
          Sell on Happycart
        </a>
      </li>
      <li>
        <a href="#" className=" hover:outline outline-1  outline-offset-4 ">
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
