import React from 'react'
import ProductDescription from './ProductDescription';
import ProductSection from './ProductSection';

function SingleProduct() {

  return (
   <div className="md:mt-[200px] mx-auto w-[95%] max-w-[1200PX]">
        <ProductSection/>
        <ProductDescription/>
   </div>
  )
}

export default SingleProduct