import React from "react";

function BottomSignIn() {
  return (
    <div className=" bg-white flex justify-center  py-10 items-center flex-col">
    
      <p>See personalized recommendations</p>

      <button className="py-2 px-[8rem] bg-primary text-white font-bold rounded-xl">Sing in</button>

      <p>
        New customer? <span>Start here.</span>
      </p>
    </div>
  );
}

export default BottomSignIn;
