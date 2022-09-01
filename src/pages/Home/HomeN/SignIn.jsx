import React from "react";

function SignIn() {
  return (
    <section className="signIn bg-[#fff]">
      <div className="py-4 px-3">
        <h1 className="text-[#000] text-[1.3rem] my-3">
          Sign in for the best experience
        </h1>
        <button className="w-[100%] mb-4 shadow-md  bg-primary rounded-md py-3 text-lg">
          Sign in securely
        </button>
        <span className=" text-md cursor-pointer text-accent">
          Create an account
        </span>
      </div>
    </section>
  );
}

export default SignIn;
