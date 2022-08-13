import React from 'react'
import { useState } from 'react';

function ProductSection() {
    const [show, setShow] = useState(false);
    const smaller = 'https://m.media-amazon.com/images/I/51q0meZK6WL._AC_US40_.jpg';
    const larger = 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg';
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            <div className="p-2 grid grid-cols-12">
                <div className='flex flex-col gap-2 col-span-2'>
                    <img src={smaller} className='w-10/12' />
                    <img src={smaller} className='w-10/12' />
                    <img src={smaller} className='w-10/12' />
                    <img src={smaller} className='w-10/12' />
                    <img src={smaller} className='w-10/12' />
                </div>
                <img src={larger} className='max-w-full col-span-10 w-[170px] md:w-full' />
            </div>
            <div className="">
                <h2 className="text-xl mb-2">
                    Fiodio 7.1 Surround Sound Gaming Headset with LED Effect, Stereo Headphones with Comfortable Ergonomic Earmuff and Microphone
                </h2>
                <a className='text-blue-400 font-bold mb-2'>Visit the HP Store</a>
                <div className='flex gap-3'>
                    <span>⭐⭐⭐⭐⭐ <span className='text-blue-400'>5 out of 5 stars</span></span>
                    <span className='text-blue-400'>10,000 ratings</span>
                </div>
                <div className="flex gap-2 mb-3">
                    <p className='font-bold'>Printing Technology</p>
                    <p>Inkjet</p>
                </div>
                <div className="flex gap-2 mb-3">
                    <p className='font-bold'>Printing Technology</p>
                    <p>Inkjet</p>
                </div>
                <div className="flex gap-2 mb-3">
                    <p className='font-bold'>Printing Technology</p>
                    <p>Inkjet</p>
                </div>
                <div className="flex gap-2 mb-3">
                    <p className='font-bold'>Printing Technology</p>
                    <p>Inkjet</p>
                </div>
                {/* Show more */}
                <div className={`${show ? "" : "hidden"}`}>
                    <div className="flex gap-2 mb-3">
                        <p className='font-bold'>Printing Technology</p>
                        <p>Inkjet</p>
                    </div>
                    <div className="flex gap-2 mb-3">
                        <p className='font-bold'>Printing Technology</p>
                        <p>Inkjet</p>
                    </div>
                    <div className="flex gap-2 mb-3">
                        <p className='font-bold'>Printing Technology</p>
                        <p>Inkjet</p>
                    </div>
                </div>
                <button className="bg-blue-500 text-white rounded-md py-2 px-4" onClick={() => setShow(!show)}>{show ? "Hide" : "Show More"}</button>
            </div>
            <div className="col-span-3 m-4  md:col-span-1">
                <div className='p-4 border-2 border-gray-800 rounded-md '>
                    <p>Buy New : <span className='text-red-800'>Tk. 10000</span></p>
                    <br />
                    <p className='mb-2'>Tk. 100 delivery <span className='font-bold'>July 12 - August 2.</span></p>
                    <p className='mb-3'>Delivery to <span className='font-bold'>Dhaka</span><span className='text-[18px'>{"(Change)"}</span></p>
                    <p>Solve by <span className='font-bold text-blue-400'>HP</span></p>
                    <br />
                    <div className='flex justify-center'>
                        <button className='bg-yellow-400 w-8/12 text-black rounded-full py-2 px-4'>Add to Cart</button>
                        <br />
                    </div>
                </div>
                <br />
                <div className='border-2 border-gray-800 p-4 rounded-md flex justify-center'>
                    <button className='py-3 px-4 bg-gray-100 border-2 border-gray-500 w-9/12 rounded-md'>Add to Cart List</button>
                </div>
            </div>
        </div>
    )
}

export default ProductSection