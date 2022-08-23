import React from "react";
import Question from "../../apis/text.json";
import CustomerServicesSidebar from "./CustomerServicesSidebar";

const CustomerServicesAndHelp = () => {
  return (
    <>
      <div className="p-2">
        <h1 className="text-4xl font-bold">Help & Customer Services</h1>
      </div>
      <section className="grid grid-cols-12 gap-x-6 p-2">
        <div className="md:col-span-3 lg:col-span-3 xl:col-span-3 hidden md:block lg:block xl:block">
          <CustomerServicesSidebar />
        </div>
        <div className="md:col-span-6 lg:col-span-5 xl:col-span-5 col-span-12">
          <div>
            <h1 className="text-3xl mb-1 font-semibold">Find more solution</h1>
            <label className="border-2 border-neutral flex w-8/12  p-2 search_bar rounded-lg space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                name="search"
                className="bg-transparent outline-none text flex-grow"
              />
            </label>
          </div>
          <div className="mt-12 mb-4 text-accent space-x-4 flex  items-center font-medium">
            <span className="hover:text-primary hover:underline cursor-pointer">
              Security and privacy{" "}
            </span>{" "}
            <span className="text-[#000]">{">"}</span>
            <span className="hover:text-primary hover:underline cursor-pointer">
              Legal Polices
            </span>
          </div>
          <div>
            <h1 className="text-4xl font-medium">Conditions of Use</h1>
          </div>
          {/* Questions */}
          <section className="my-4">
            <div>
              <h1 className="text-lg font-bold">Last update {Question.date}</h1>
              <h1 className="mt-2 text-xl">{Question.title}</h1>
            </div>
            {
                Question?.data?.map((x)=>{
                    return(
                        <div className="my-6">
                            <h1 className="text-bold text-4xl ">{x.title}</h1>
                            <p className="text-xl font-medium">{x.desc}</p>
                        </div>
                    )
                })
            }
          </section>
        </div>
      </section>
    </>
  );
};

export default CustomerServicesAndHelp;
