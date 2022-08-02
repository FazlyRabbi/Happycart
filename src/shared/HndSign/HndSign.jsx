import React from "react";




function HndSign() {
  return (
    <>
      <div className="triangle"></div>
      <div className="hdn-sign shadow-2xl">
        <div className="hnd-table flex  justify-around py-[20px]">
          <div>
            <h3 className="text-[16px]  font-bold">Your list</h3>
            <ul>
              <li>Crete a List</li>
              <li>Crete a List</li>
              <li>Crete a List</li>
              <li>Crete a List</li>
            </ul>
          </div>
          <div className="hdn-line w-[0.5px] color-black  bg-red-100 h-[300px]"></div>
          <div>
            <div>
              <h3 className="font-bold text-[16px]">Your Account</h3>
              <ul>
                <li>Account</li>
                <li>Orders</li>
                <li>Recomendation</li>
                <li>Browsing History</li>
                <li>Watchlists</li>
                <li>Account</li>
                <li>Account</li>
                <li>Account</li>
                <li>Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HndSign;
