import ProductCart from "../components/UI/productCard";
import { useGetLastProductQuery } from "@/redux/features/productApi";

const HomeProducts = () => {
  const { data: products } = useGetLastProductQuery(undefined);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div>
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {products?.map((product: any) => (
          <ProductCart key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
