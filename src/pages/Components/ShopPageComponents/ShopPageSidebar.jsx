import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShopApi from "../../../apis/shopApi.json";
const ShopPageSidebar = () => {
  const { name } = useParams();
  const [updatedCategory, setUpdatedCategory] = useState();
  const [updateBrand, setUpdatedBrand] = useState();
  useEffect(() => {
    const UniqueCagegoryList = [
      ...new Set(ShopApi.map((curelem) => curelem.category)),"all"
    ];
    const UniqueBrandList = [
      ...new Set(ShopApi.map((curelem) => curelem.brand)),
    ];
    setUpdatedCategory(UniqueCagegoryList);
    setUpdatedBrand(UniqueBrandList);
  }, []);
  return (
    <section className="Side_bar ">
      {/* Departments List */}
      <div className="px-2">
        <h1 className="font-semibold text-2xl">Department</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          {updatedCategory &&
            updatedCategory.sort().map((val, index) => {
              return (
                <Link to={`/shop/${val}`} key={index}>
                  <li
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
                  <li className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear">
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
            <li className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear">
              New
            </li>
          </Link>{" "}
          <Link to={`/shop/used`} >
            <li className="capitalize text-xl hover:text-secondary transition duration-150 ease-linear">
              Used
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default ShopPageSidebar;
