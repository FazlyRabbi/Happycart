import ProductCategoryCard from "../../../shared/ProductCategoryCard";

const ProductsCategories = ({ ProfileProductCategory }) => {
  return (
    <section className="my-5 p-2">
       <div className="mb-5 bg-primary px-2">
        <h1 className="uppercase font-bold text-xl">Product Categorys</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProfileProductCategory.map((curElem, index) => {
          return <ProductCategoryCard curElem={curElem} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProductsCategories;
