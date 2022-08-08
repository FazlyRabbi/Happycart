import React, { useState } from 'react'

function ProductDescription() {
    const [show, setShow] = useState(false);

    const description = "Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity.Noise-Cancelling MIC - 120° adjustable high-bandwidth microphone with noise reduction provides e more precise sound imaging and vocal clarity."
    return (
        <div className='my-[40px] mx-[20px] p-2'>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
               <div className='md:col-span-8'>
               <h2 className='text-2xl font-bold'>Description :</h2>
                <br />
                <p>
                    {description.slice(0, 200)}
                </p>
                <br />
                <p>
                    {description.slice(201, 400)}
                </p>
                <br />
                <p>
                    {description.slice(401, 600)}
                </p><br />
                <p className={`${show ? "" : "hidden"}`}>
                    {description.slice(601, -1)}
                </p>
                <button className='bg-blue-400 mt-[20px] text-black  px-4' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
               </div>
               <div className='md:col-span-4 mt-[50px]'>
                <div className='bg-gray-800 rounded-md mb-3 w-full h-[200px] md:h-[80%]'>

                </div>
            <div className="flex justify-end">
                <p>Sponsored</p>
            </div>
               </div>
            </div>
        </div>
    )
}

export default ProductDescription