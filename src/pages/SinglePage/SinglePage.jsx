import React from "react";
import TopOfferBanner from "./TopOfferBanner";
import ImageSection from "./ImageSection";
import SingleProductDescription from "./SingleProductDescription";
import RelatedProducts from "./RelatedProducts";
import InTheBox from "./InTheBox";
import Comments from "./Comments";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import PathName from "./../../shared/PathName";

import ProductComment from "../../apis/comments.json";
import ProductJson from "../../apis/products.json";
import ProductDetail from "../../apis/singleProduct.json";
import ProfileProductCategory from "../../apis/productCetagorys.json";
import Navbar from "../../shared/Navbar/Navbar";
import ProductRating from "./ProductRating/ProductRating";

const SinglePage = () => {
  return (
    <>
      <Navbar />
      <div className="">
        {/* offer banner */}
        <TopOfferBanner />
        {/* product path */}
        <PathName />
        {/* porject image with details */}
        <div className="mt-4 px-4">
          <ImageSection product={ProductDetail} />
          {/* description */}
          <SingleProductDescription product={ProductDetail} />
        </div>
        {/* related product */}
        <hr className="h-0.5 bg-gray-100" />
        <RelatedProducts products={ProductJson} />
        {/* what is the box */}
        <hr className="h-0.5 bg-gray-100" />
        <InTheBox />
        <hr className="h-0.5 bg-gray-100" />
        {/* custommer question and ans */}
        <Comments comments={ProductComment} />
        <hr className="h-0.5 bg-gray-100" />
        {/* review and ratings */}
        <ProductRating />
        <hr className="h-0.5 bg-gray-100" />
        {/* company Profile */}
        <CompanyProfile
          ProfileProductCategory={ProfileProductCategory}
          products={ProductJson}
        />
      </div>
    </>
  );
};

export default SinglePage;
