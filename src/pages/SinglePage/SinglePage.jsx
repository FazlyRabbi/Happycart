import React from "react";
import TopOfferBanner from "./TopOfferBanner";
import ImageSection from "./ImageSection";
import SingleProductDescription from "./SingleProductDescription";
import RelatedProducts from "./RelatedProducts";
import InTheBox from "./InTheBox";
import Comments from "./Comments";

import ProductComment from "../../apis/comments.json";
import ProductJson from "../../apis/products.json";
import ProductDetail from "../../apis/singleProduct.json";
import CompanyProfile from "./CompanyProfile/CompanyProfile";

const SinglePage = () => {
  return (
    <div className="md:mt-[200px]">
      {/* offer banner */}
      <TopOfferBanner />
      {/* product path */}
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

      {/* company Profile */}
      <CompanyProfile />
    </div>
  );
};

export default SinglePage;
