import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopApi from "../../apis/shopApi.json";
import PhoneSideBar from "../Components/ShopPageComponents/PhoneSideBar";
import ShopPageCard from "../Components/ShopPageComponents/ShopPageCard";
import ShopPageSidebar from "../Components/ShopPageComponents/ShopPageSidebar";
const shopPage = ({}) => {
  const { name } = useParams();
  const [isToggle, setIsToggle] = useState(false);
  const [filterProject, setFilterProject] = useState();
  const [searchFilterProject, setSearchFilterProject] = useState();
  const [brandFilter, setBrandFilter] = useState({
    apple: "",
    asus: "",
    hp: "",
    nick: "",
    pran: "",
    sony: "",
  });
  const [conditionFilter, setConditionFilter] = useState({ new: "", used: "" });
  const [ratingFilter, setRatingFilter] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  const [categoryFilter, setCatoryFilter] = useState({
    grossery: "",
    headphone: "",
    laptop: "",
    mobile: "",
    shoes: "",
    watch: "",
  });

  useEffect(() => {
    // fetch categoryes
    const product = ShopApi.filter(
      (x) =>
        x.category == categoryFilter.grossery ||
        x.category == categoryFilter.headphone ||
        x.category == categoryFilter.laptop ||
        x.category == categoryFilter.mobile ||
        x.category == categoryFilter.shoes ||
        x.category == categoryFilter.watch ||
        x.brand == brandFilter.apple ||
        x.brand == brandFilter.asus ||
        x.brand == brandFilter.hp ||
        x.brand == brandFilter.nick ||
        x.brand == brandFilter.pran ||
        x.brand == brandFilter.sony ||
        x.rateing == ratingFilter.one ||
        x.rateing == ratingFilter.two ||
        x.rateing == ratingFilter.three ||
        x.rateing == ratingFilter.four ||
        x.rateing == ratingFilter.five ||
        x.condition == conditionFilter.new ||
        x.condition == conditionFilter.used
    );
    const searchProduct = ShopApi.filter((val) => {
      if (name == "") {
        return false;
      } else if (val.title?.toLowerCase().includes(name?.toLowerCase())) {
        return val;
      } else if (val.brand?.toLowerCase().includes(name?.toLowerCase())) {
        return val;
      } else if (val.category?.toLowerCase().includes(name?.toLowerCase())) {
        return val;
      } else if (val.condition?.toLowerCase().includes(name?.toLowerCase())) {
        return val;
      }
    });
    setFilterProject(product);
    setSearchFilterProject(searchProduct);
    console.log(searchFilterProject);
  }, [categoryFilter, brandFilter, ratingFilter, conditionFilter, name]);
  return (
    <>
      <div>
        <h1
          className={`text-2xl lg:hidden ${
            isToggle ? "float-right mr-5" : "ml-5"
          }  mt-5 xl:hidden`}
        >
        
          <svg
          onClick={() => setIsToggle(!isToggle)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </h1>
      </div>
      <PhoneSideBar isToggle={isToggle} setIsToggle={setIsToggle} />
      <section className="mt-4 relative min-h-screen">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="hidden md:hidden lg:col-span-2 xl:col-span-2 lg:block xl:block p-2 lg:p-0 xl:p-0 ">
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
          <div className="md:col-span-12 lg:col-span-10 xl:col-span-10 col-span-12">
            <div className="mt-4 font-medium px-4 xl:p-0">
              <h1 className="text-3xl uppercase ">
                Result <span className="text-secondary text-2xl">{name}</span>
              </h1>
              <p className="text-lg lg:text-xl">
                Price and other details may vary based on product size and
                color.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
              {filterProject?.sort().map((val, index) => {
                return <ShopPageCard key={index} product={val} />;
              })}
              {searchFilterProject?.sort().map((val, index) => {
                return <ShopPageCard key={index} product={val} />;
              })}
            </div>
          </div>{" "}
        </div>
      </section>{" "}
    </>
  );
};
export default shopPage;
