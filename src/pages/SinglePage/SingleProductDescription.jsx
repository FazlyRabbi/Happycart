import React, { useState } from "react";

function SingleProductDescription() {
  const [show, setShow] = useState(false);

  const description =
    "Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.";
  return (
    <div className="my-[40px] mx-[20px] p-2 ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
        <div className="md:col-span-8 border p-2 ">
          <h2 className="text-2xl font-bold">Description :</h2>
          <br />
          <p>{description.slice(0, 200)}</p>
          <br />
          <p>{description.slice(201, 400)}</p>
          <br />
          <p>{description.slice(401, 600)}</p>
          <br />
          <p className={`${show ? "" : "hidden"}`}>
            {description.slice(601, -1)}
          </p>
          <button
            className="bg-accent mt-[20px] text-success rounded-lg shadow-md px-6 py-1 text-xl "
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show more"}
          </button>
        </div>
        <div className="md:col-span-4 mt-[50px]">
          <div className="bg-neutral rounded-md mb-3 w-full h-[200px] max-h-[250px]"></div>
          <div className="flex justify-end">
            <p>Sponsored</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDescription;
