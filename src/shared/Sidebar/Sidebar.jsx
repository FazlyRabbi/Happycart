import React, { useState } from "react";

import {
  AiOutlineUser,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import "./Sidebar.css";

function Sidebar() {
  const [toggle, setToggle] = useState(true);


  const closeNav = () => {
    document.getElementById("mySideNav").style.animation =
      "collapse 0.3s forwards";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "scroll";
  };

  const firstDropdown = () => {
    setToggle((prevToggle) => !prevToggle);
    if (toggle) {
      document.getElementById("firstContainer").style.display = "block";
      document.getElementById("dropdownBtn").innerHTML = "See Less";
    } else {
      document.getElementById("firstContainer").style.display = "none";
      document.getElementById("dropdownBtn").innerHTML = "See More";
    }
  };

  return (
    <>
      <div id="overlay"> </div>
      <div id="closeBtn" onClick={closeNav}>
        &times;{" "}
      </div>

      <div className="sideNav" id="mySideNav">
        <div className="sideNavHeader">
          <AiOutlineUser className=" inline text-[25px] mr-2 mt-[-5px]" />
          Hello Sign in
        </div>

        {/* sideNaveContentHeader */}
        <div className="sideNavWrapper">
          <div className="sideNavContent">
            <div className="sideNaveContentHeader font-bold ">
              Digital Content And Device{" "}
            </div>
            <a href="#">
              <div className="sideNavRow ">
                <div>Amazon Music</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>kindle E-readers & Books</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Appsotre for Android</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
          </div>
          <hr />

          <div className="sideNavContent">
            <div className="sideNaveContentHeader font-bold ">
              Shop By Department
            </div>
            <a href="#">
              <div className="sideNavRow ">
                <div>Electronics</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Computer</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Smart Home</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Arts & Crafts</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>

            <a href="#">
              <div className="sideNavRow see__all">
                <div>See All</div>
                <AiOutlineDown className="ml-3" />
              </div>
            </a>
          </div>

          <hr />

          <div className="sideNavContent">
            <div className="sideNaveContentHeader font-bold ">
              Program & Features
            </div>

            <a href="#">
              <div className="sideNavRow ">
                <div>Gift Cards</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>

            <a href="#">
              <div className="sideNavRow ">
                <div>#FoundltOnHappyCart</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>

            <a href="#">
              <div className="sideNavRow ">
                <div>HappyCart Live</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>

            {/* sell all  */}

            <div className="sideNavContainer" id="firstContainer">
              <hr />
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
              <a href="#">
                <div className="sideNavRow see__all">
                  <div>Automotive</div>
                  <AiOutlineRight className="mt-2 text-[15px]" />
                </div>
              </a>
            </div>

            <div
              className="sideNavRowDropdown see__all"
              onClick={firstDropdown}
            >
              <div id="dropdownBtn">See All</div>
              {toggle && <AiOutlineDown className="ml-2 mt-1" />}
              {!toggle && <AiOutlineUp className="ml-2 mt-1" />}
            </div>
          </div>
          <hr />
          <div className="sideNavContent">
            <div className="sideNaveContentHeader font-bold ">
              Help & Settings
            </div>
            <a href="#">
              <div className="sideNavRow ">
                <div>Your Account</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>English</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Customer Service</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
            <a href="#">
              <div className="sideNavRow ">
                <div>Sign in</div>
                <AiOutlineRight className="mt-2 text-[15px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
