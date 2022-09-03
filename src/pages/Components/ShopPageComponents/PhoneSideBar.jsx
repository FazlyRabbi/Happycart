import { useContext } from "react";
import { FilterContext } from "../../../Contexts/FilterContext";
import ShopPageSidebar from "./ShopPageSidebar";
const PhoneSideBar = ({ isToggle, setIsToggle }) => {
  const [
    categoryFilter,
    brandFilter,
    ratingFilter,
    conditionFilter,
    filterProject,
    setConditionFilter,
    setRatingFilter,
    setCatoryFilter,
    setBrandFilter,
    setFilterProject,
  ] = useContext(FilterContext);
  return (
    <>
      {isToggle && (
        <div
          className="fixed top-0 left-0  h-screen overflow-auto z-10 w-full  text-success block md:block lg:hidden xl:hidden"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
           <svg
            onClick={() => setIsToggle(!isToggle)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer text-success float-right mr-12 mt-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          <div className="bg-accent w-6/12 h-[100%] opacity-100 p-2">
            <ShopPageSidebar
              allDetails={[
                categoryFilter,
                brandFilter,
                ratingFilter,
                conditionFilter,
                setConditionFilter,
                setRatingFilter,
                setCatoryFilter,
                setBrandFilter,
              ]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneSideBar;
