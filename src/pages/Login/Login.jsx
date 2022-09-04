import React from "react";
import { useState } from "react";


const Login = () => {
  const [steps, setSteps] = useState(1);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };
  // logics
  const continueButton = () => {
    if (userInfo.email !== "") {
      setSteps(2);
    }
    if (userInfo.email === "") {
      alert("User email or phone number not field");
    }
  };
  // submit
  const SignInSubmit = () => {
    if (!userInfo.password) {
      alert("Invalid password field");
    }
    if (userInfo.email && userInfo.password) {
      console.log("User details", userInfo);
      alert("Login successfull");
      setUserInfo({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <section className="p-2 md:p-6 lg:p-6 xl:p-6 my-10">
        {steps === 1 && (
          <>
            <div className="w-11/12 md:w-6/12 lg:w-5/12 xl:w-5/12 mx-auto border-2 border-[#000] px-4 py-2 rounded-md">
              <div>
                <h1 className="font-bold text-2xl">Sign-In</h1>
                <label className="flex flex-col my-4">
                  <span className="text-lg">Email or Mobile Phone Number</span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={userInfo.email}
                    onChange={handleInputs}
                    className="outline-none border-2 border-[#000] p-1.5 rounded-md px-4 text-lg"
                  />
                </label>
                <button
                  className="bg-gradient-to-r from-secondary via-primary to-secondary w-full py-1.5 text-xl capitalize rounded-md hover:shadow-md"
                  onClick={continueButton}
                >
                  Continue
                </button>
                <p className="text-lg my-2">
                  By continuing, you agree to Happycart's <br />
                  <span className="text-accent mr-2"> Conditions of Use</span>
                  and <span className="mx-2 text-accent">Privacy Notice</span>
                </p>
              </div>
              <div id="icons" className="my-3">
                <p className="text-xl font-semibold">
                  Or Sign in with Social Media
                </p>
                <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-2">
                  <img
                    src="image/facebook.png"
                    alt="Facebook"
                    className="w-6/12 lg:w-4/12 md:w-4/12 xl:w-4/12 cursor-pointer"
                  />
                  <img
                    src="image/instagram.png"
                    alt="Instagram"
                    className="w-6/12 lg:w-4/12 md:w-4/12 xl:w-4/12 cursor-pointer"
                  />
                  <img
                    src="image/linkedin.png"
                    alt="Linkedin"
                    className="w-6/12 lg:w-4/12 md:w-4/12 xl:w-4/12 cursor-pointer"
                  />
                  <img
                    src="image/twitter.png"
                    alt="Twitter"
                    className="w-6/12 lg:w-4/12 md:w-4/12 xl:w-4/12 cursor-pointer"
                  />
                </div>
                <div className="text-lg my-3">
                  <h1> {">"} Need Help</h1>
                  <h1 className="text-primary cursor-pointer">
                    Forgot your password?
                  </h1>
                  <h1>Other issues with Sign-In</h1>
                </div>
              </div>
            </div>
            <div className="w-11/12 md:w-6/12 lg:w-5/12 xl:w-5/12 mx-auto px-4 py-2 rounded-md my-3">
              <div className="flex justify-between items-center">
                <hr className="bg-[#000] w-full" />
                <p className="w-full text-center text-lg">New to Happycart?</p>
                <hr className="bg-[#000] w-full" />
              </div>
              <button className="border-2 rounded-md bg-neutral py-3 text-lg text-center w-full mt-2">
                Create your Happycart account
              </button>
            </div>
          </>
        )}
        {steps === 2 && (
          <>
            <div className="w-11/12 md:w-6/12 lg:w-5/12 xl:w-5/12 mx-auto border-2 border-[#000] px-4 py-2 rounded-md">
              <div>
                <h1 className="font-bold text-2xl mb-4">Sign-In</h1>
                <div>
                  <h1 className="mb-4 text-lg">{userInfo.email}</h1>
                  <label className="">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <p className="text-xl">Password</p>
                      <p className="text-primary cursor-pointer">
                        Forget your password?
                      </p>
                    </div>
                    <input
                      type="password"
                      value={userInfo.password}
                      onChange={handleInputs}
                      name="password"
                      required
                      className="outline-none border-2 border-[#000] w-full py-2 rounded-md mb-4 px-4 text-lg"
                    />
                  </label>
                  <button
                    className="my-4 bg-gradient-to-r bg-secondary via-primary to-secondary py-2 rounded-md w-full text-center text-lg"
                    onClick={SignInSubmit}
                  >
                    Sign-In
                  </button>
                  <div className="flex space-x-2 my-2">
                    <input type="checkbox" className="" />
                    <p>Keep me signed in Details</p>
                  </div>
                </div>
              </div>
              <h1
                onClick={() => {
                  setSteps((prev) => prev - 1);
                }}
                className="bg-secondary w-max px-8 py-2 rounded-lg font-semibold text-white cursor-pointer hover:bg-primary float-right"
              >
                Back
              </h1>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Login;
