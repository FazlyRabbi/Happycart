import React from "react";

import logo from "../../../src/asstes/img/logo.png";

function FooterBottom() {
  return (
    <div className="flex justify-center space-x-16 p-10 ">
      <img src={logo} alt="logo" className="min-h-[2.5rem] w-auto" />
      <button className="bg-black py-2 px-8 rounded-lg text-white">
        Bangla
      </button>
      <button className="bg-black py-2 px-8 rounded-lg text-white">Taka</button>
      <button className="bg-black py-2 px-8 rounded-lg text-white">
        Bangladesh
      </button>
    </div>
  );
}

export default FooterBottom;
