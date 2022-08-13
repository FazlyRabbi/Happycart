import ProfileProductCategory from "../../../apis/productCetagorys.json";
const ProductsCategories = () => {
  return (
    <section className="my-5 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProfileProductCategory.map((curElem, index) => {
          return (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h1 className="text-3xl mb-3 font-bold overflow-hidden">
                {curElem.category}
              </h1>
              <div className="grid grid-cols-2 gap-4 mt-2 ">
                {curElem.list.map((curList, index) => {
                  return (
                    <div className="text-center">
                      <img
                        src={curList.image}
                        className="w-10/12 max-h-[120px] object-fill rounded-sm"
                        alt=""
                      />
                      <h1 className="text-xl mt-0.5 ">{curList.name}</h1>
                    </div>
                  );
                })}
              </div>
              <button className="bg-yellow-500 px-6 py-1 text-lg rounded-lg mt-4 mb-2 shadow-sm hover:bg-yellow-600 hover:text-white transition duration-150 ease-linear">
                Shop Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsCategories;
