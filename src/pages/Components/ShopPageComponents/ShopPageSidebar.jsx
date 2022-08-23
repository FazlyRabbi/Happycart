import { useEffect, useState } from "react";
import ShopApi from "../../../apis/shopApi.json";

const ShopPageSidebar = ({ allDetails }) => {
  const [updatedCategory, setUpdatedCategory] = useState();
  const [updateBrand, setUpdatedBrand] = useState();
  useEffect(() => {
    const UniqueCagegoryList = [
      ...new Set(ShopApi.map((curelem) => curelem.category)),
    ];
    const UniqueBrandList = [
      ...new Set(ShopApi.map((curelem) => curelem.brand)),
    ];
    setUpdatedCategory(UniqueCagegoryList);
    setUpdatedBrand(UniqueBrandList);
  }, []);
  const [
    categoryFilter,
    brandFilter,
    ratingFilter,
    conditionFilter,
    setConditionFilter,
    setRatingFilter,
    setCatoryFilter,
    setBrandFilter,
  ] = allDetails;

  const [isCheckBrand, setIsCheckBrand] = useState(false);
  const [isCheckCategory, setIsCheckCategory] = useState(false);
  useEffect(() => {
    const UniqueCagegoryList = [
      ...new Set(ShopApi.map((curelem) => curelem.category)),
    ];
    const UniqueBrandList = [
      ...new Set(ShopApi.map((curelem) => curelem.brand)),
    ];
    setUpdatedCategory(UniqueCagegoryList);
    setUpdatedBrand(UniqueBrandList);
  }, []);
  // Filtering Funtionality

  const FilterBrand = (elemName) => {
    // Brand Filtering
    if (elemName === elemName && brandFilter[elemName] === "") {
      setIsCheckBrand(true);
      setBrandFilter({ ...brandFilter, [elemName]: elemName });
    } else if (isCheckBrand === true && brandFilter[elemName] === elemName) {
      setBrandFilter({ ...brandFilter, [elemName]: "" });
    }
  };
  const FilterCategory = (elemName) => {
    if (elemName === elemName && categoryFilter[elemName] === "") {
      setIsCheckCategory(true);
      setCatoryFilter({ ...categoryFilter, [elemName]: elemName });
    } else if (
      isCheckCategory === true &&
      categoryFilter[elemName] === elemName
    ) {
      setCatoryFilter({ ...categoryFilter, [elemName]: "" });
    }
  };
  const FilterCondition = () => {};
  return (
    <section className="Side_bar ">
      {/* Departments List */}
      <div className="px-2">
        <h1 className="font-semibold text-2xl">Department</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          {updatedCategory &&
            updatedCategory.sort().map((val, index) => {
              return (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input h-4 w-4 border border-black rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-2 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value={val}
                    id={val}
                    onClick={() => {
                      FilterCategory(`${val}`);
                    }}
                  />
                  <label
                    className="form-check-label inline-block text-black text-xl capitalize cursor-pointer hover:text-primary transition duration-200 ease-linear"
                    htmlFor={val}
                  >
                    {val}
                  </label>
                </div>
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
                <div key={index} className="form-check">
                  <input
                    className="form-check-input h-4 w-4 border border-black rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-2 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    onClick={() => {
                      FilterBrand(`${val}`);
                    }}
                    id={val}
                  />
                  <label
                    className="form-check-label inline-block text-black text-xl capitalize cursor-pointer hover:text-primary transition duration-200 ease-linear"
                    htmlFor={val}
                  >
                    {val}
                  </label>
                </div>
              );
            })}
        </ul>
      </div>
      {/* Condition */}
      <div className="px-2 mt-4">
        <h1 className="font-semibold text-2xl">Conditions</h1>
        <ul className="mt-2 pl-4 space-y-1 flex flex-col">
          <div className="form-check">
            <input
              className="form-check-input h-4 w-4 border border-black rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-2 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="new"
              onClick={() => {
                FilterCondition("new");
              }}
            />
            <label
              className="form-check-label inline-block text-black text-xl capitalize cursor-pointer hover:text-primary transition duration-200 ease-linear"
              htmlFor="new"
            >
              New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input h-4 w-4 border border-black rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-2 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="used"
            />
            <label
              className="form-check-label inline-block text-black text-xl capitalize cursor-pointer hover:text-primary transition duration-200 ease-linear"
              htmlFor="sed"
            >
              Used
            </label>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default ShopPageSidebar;
