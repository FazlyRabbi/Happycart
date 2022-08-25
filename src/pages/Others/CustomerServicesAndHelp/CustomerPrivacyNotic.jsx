import React from "react";
import Privacy from "../../../apis/privacy.json";
import CustomerServicesSidebar from "./CustomerServicesSidebar";

const CustomerPrivacyNotic = () => {
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
            <h1 className="text-4xl font-medium">Happycart Privacy Notice</h1>
          </div>
          {/* Questions */}
          <section className="my-4">
            <div>
              <h1 className="text-lg font-bold">Last update {Privacy.date}</h1>
              <h1 className="mt-2 text-xl">{Privacy.title}</h1>
            </div>
            {
                Privacy?.notice?.map((x)=>{
                    return(
                        <div className="my-6">
                            <h1 className="text-bold text-3xl ">{x.title}</h1>
                            <p className="text-lg font-medium">{x.subtitle}</p>
                            <ul className="ml-5 notic_ul">
                                {
                                    x.lists.map((list)=>{
                                        return(
                                            <li className="text-xl mb-2"><span className="font-bold text-xl">{list.title}</span> : {list.desc}</li>
                                        )
                                    })
                                }
                            </ul>
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

export default CustomerPrivacyNotic;
