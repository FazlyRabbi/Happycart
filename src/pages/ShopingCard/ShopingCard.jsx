import React from "react";
const items = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/71pPm31LFkS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches",
    price: 3000,
    qun: 1,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/71pPm31LFkS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches",
    price: 3000,
    qun: 1,
  },
];

const ShopingCard = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4 gap-5">

            <div id="shopingCard" className="col-span-2 bg-[#fff] py-3 px-4">
            <h1 className="text-4xl font-bold mb-10">Shoping Card</h1>
     {
        items.map((item,index)=>{
            return(
                <div className="grid grid-cols-5 gap-4 mb-6 w-full border-b-2 py-4 border-[#eee]">
                  <img src={items[0].img} alt="" 
                   />
                  <div className="col-span-3 space-y-4">
                    <h1>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
                      ab quae ea expedita
                    </h1>
                    <p>
                      <span className="font-bold">Details</span> : Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Dignissimos, laudantium.
                    </p>
                    <select className="bg-[#eee] px-4 py-2 rounded-md font-semibold cursor-pointer">
                      <option value="1">Quantity 1</option>
                    </select>
                  </div>
                  <h1 className="text-2xl font-bold">4000 Taka</h1>
                </div>
            )
        })
    }
     </div>
      <div id="checkout" className="bg-[#fff] h-max p-4">
        <h1 className="text-xl mb-4">Subtotal ( 1 item) : Tk 2000.32</h1>
        <button className="bg-primary w-full py-2 px-4 text-center rounded-full text-xl text-[#fff] hover:bg-secondary transition duration-150 ease-linear cursor-pointer">Proceed to checkout</button>
      </div>
    </section>
  );
};

export default ShopingCard;
