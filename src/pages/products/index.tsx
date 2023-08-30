import AllProductCard from "@/components/UI/allProductCard";
import { GetStaticProps } from "next";

const ProductsAll = ({ products }: any) => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div>
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
        {products?.map((product: any) => (
          <AllProductCard key={product?._id} product={product}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsAll;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://moon-pc-server.vercel.app/api/v1/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
