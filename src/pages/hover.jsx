import React from "react";
// import ReactImageMagnify from "ReactImageMagnify";
import ReactImageMagnify from "react-image-magnify";

const Hover = () => {
  return (
    <div>
      <div style={{ width: "360px",padding:"10px" }}>
        {" "}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: "https://www.bing.com/th?id=OSK.e0f457d96be28fafad1a92789e6d00f5&w=300&h=400&c=7&o=6&pid=SANGAM",
            },
            largeImage: {
              src: "https://www.bing.com/th?id=OSK.e0f457d96be28fafad1a92789e6d00f5&w=1200&h=1800&c=7&o=6&pid=SANGAM",
              width: 1200,
              height: 1800,
            },
            shouldUsePositiveSpaceLens: true,
          }}
        />
      </div>
    </div>
  );
};

export default Hover;
