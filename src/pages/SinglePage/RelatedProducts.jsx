import React from 'react'
import SwiperSliderCardBox from '../../shared/SwiperSliderCardBox'

const RelatedProducts = ({products}) => {
  return (
    <div>
      <SwiperSliderCardBox products={products} responsive={[2,2,4,5]}/>
    </div>
  )
}

export default RelatedProducts