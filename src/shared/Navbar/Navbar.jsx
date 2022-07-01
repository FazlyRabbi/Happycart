import React from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";
import { AiOutlineMenu } from "react-icons/ai";

import "./nav.css";

function Navbar() {
  const NavItems = (
    <>
      <a>
        <div className="flex justify-center items-center">
          <AiOutlineMenu className="mr-2 text-[20px]"/>
          <span>All</span>
        </div>
      </a>
      <a>Today's Deals</a>
      <a>Customer Service</a>
      <a>Gifts to Give</a>
      <a>Gift Cards</a>
      <a>Sell on Happycart</a>
      <a>10:00:00AM</a>
      <a>Shop Father's Day Gifts</a>
    </>
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
