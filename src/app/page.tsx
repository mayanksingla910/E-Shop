import CategoryList from "@/components/categoryList";
import ProductList from "@/components/productList";
import Slider from "@/components/slider";
import { Suspense } from "react";

const HomePage = async () => {
    return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList categoryId={process.env.CATEGORY_ID!} limit={4}/>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 text-2xl font-semibold">
          Categories
        </h1>
        <Suspense fallback={<div>Loading products...</div>}>
        <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default HomePage;