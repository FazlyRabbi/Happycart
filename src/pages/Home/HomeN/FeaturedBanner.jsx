import React from "react";

import featurd from "../../../asstes/img/feturedMobile.jpg";

function FeaturedBanner() {
  return (
    <section className="mt-2">
      <img src={featurd} alt="img" className="w-[100%]" />
    </section>
  );
}

export default FeaturedBanner;
