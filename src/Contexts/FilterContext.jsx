import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createContext } from "react";
import ShopApi from "../apis/shopApi.json"


export const FilterContext = createContext();
export const FilterContextProvider = ({ children }) => {
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
    setFilterProject(product);
  }, [categoryFilter, brandFilter, ratingFilter, conditionFilter]);
  return (
    <FilterContext.Provider
      value={[
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
      ]}
    >
        {children}
    </FilterContext.Provider>
  );
};
