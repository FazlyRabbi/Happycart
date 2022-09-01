import React from "react";
import Comments from "./Comments";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import ImageSection from "./ImageSection";
import InTheBox from "./InTheBox";
import RelatedProducts from "./RelatedProducts";
import SingleProductDescription from "./SingleProductDescription";
import TopOfferBanner from "./TopOfferBanner";

import ProductComment from "../../apis/comments.json";
import ProfileProductCategory from "../../apis/productCetagorys.json";
import ProductJson from "../../apis/products.json";
import ProductDetail from "../../apis/singleProduct.json";
import ProductRating from "./ProductRating/ProductRating";

const SinglePage = () => {
  return (
    <>
      <div className="">
        {/* offer banner */}
        <TopOfferBanner />
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
