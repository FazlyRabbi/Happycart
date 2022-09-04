import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="px-5 py-4">
      <h1 className="text-4xl font-bold overflow-hidden">
        Customer questions & answers
      </h1>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          className="outline-none bg-gray-200 w-full py-4 px-4 rounded-lg text-xl text-black my-4"
          placeholder="Have a quesiton? Search for answere"
        />
      </div>
      {comments.map((elem, index) => {
        return (
          <div key={index} className="space-x-3 my-4 grid grid-cols-4 mb-10">
            <div className="col-span-1">
              <div className="flex justify-center items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 cursor-pointer hover:text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => {
                    console.log("Fetch data and update");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                <h1 className="text-2xl font-bold">{elem.vote}</h1>
                <h1 className="text-xl font-bold">Votes</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 cursor-pointer hover:text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => {
                    console.log("Fetch data and update");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-3 space-y-3">
              <div>
                <h1 className="text-xl font-bold ">Question : </h1>
                <h2 className="text-cyan-500 font-semibold text-xl">
                  {elem.question}
                </h2>
              </div>
              <div className="">
                <h1 className="text-xl font-bold ">Answere : </h1>
                <h2 className="font-medium text-lg">{elem.ans}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
