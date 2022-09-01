import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShopApi from "../../../apis/shopApi.json";
const PhoneSideBar = ({ isToggle, setIsToggle }) => {
  const { name } = useParams();
  const [updatedCategory, setUpdatedCategory] = useState();
  const [updateBrand, setUpdatedBrand] = useState();

  useEffect(() => {
    const UniqueCagegoryList = [
      ...new Set(ShopApi.map((curelem) => curelem.category.toLowerCase())),"all"
    ];
    const UniqueBrandList = [
      ...new Set(ShopApi.map((curelem) => curelem.brand)),
    ];
    setUpdatedCategory(UniqueCagegoryList);
    setUpdatedBrand(UniqueBrandList);
  }, []);

  
  return (
    <section
      className={`lg:hidden xl:hidden md:fixed fixed top-0 md:top-0 ${
        isToggle ? "left-0 transition duration-200 ease-linear" : "-left-[100%] transition duration-200 ease-linear"
      }  md:bottom-0 bottom-0 z-10 bg-neutral w-8/12 p-2 md:w-6/12  pt-10`}
    >
      <h1 className="text-2xl lg:hidden mr-5 mt-2 float-right xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 hover:scale-110 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setIsToggle(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </h1>
      {/* Departments List */}
      <div className="px-2">
        <h1 className="font-semibold text-2xl">Department</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          {updatedCategory &&
            updatedCategory.sort().map((val, index) => {
              return (
                <Link to={`/shop/${val}`} key={index}>
                  <li
                    onClick={() => setIsToggle(false)}
                    className={`capitalize text-xl hover:text-secondary transition duration-150 ease-linear`}
                  >
                    {val}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
      {/* Brand name List */}
      <div className="px-2 mt-4">
        <h1 className="font-semibold text-2xl">Featured Brands</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          {updateBrand &&
            updateBrand.sort().map((val, index) => {
              return (
                <Link to={`/shop/${val}`} key={index}>
                  <li
                    onClick={() => setIsToggle(false)}
                    className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear"
                  >
                    {val}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
      {/* Condition */}
      <div className="px-2 mt-4">
        <h1 className="font-semibold text-2xl">Conditions</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          <Link to={`/shop/new`}>
            <li
              onClick={() => setIsToggle(false)}
              className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear"
            >
              New
            </li>
          </Link>{" "}
          <Link to={`/shop/used`}>
            <li className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear">
              Used
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default PhoneSideBar;
