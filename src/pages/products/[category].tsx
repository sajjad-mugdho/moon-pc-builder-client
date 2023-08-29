import AllProductCard from "@/components/UI/allProductCard";
import { useRouter } from "next/router";

const CategoryPage = ({ categoryProducts }: any) => {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  console.log(categoryProducts, category);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center uppercase">{category}</h1>
      <div className="grid lg:grid-cols-3 md:grid-col-2 sm:grid-col-1 gap-5 my-10 justify-center items-center">
        {Array.isArray(categoryProducts) &&
          categoryProducts?.map((product: any) => (
            <AllProductCard
              product={product}
              key={product?._id}
            ></AllProductCard>
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const { category } = params;

  const response = await fetch(
    `http://localhost:5000/api/v1/products/${category}`
  );
  const categoryProducts = await response.json();

  console.log(category);

  return {
    props: {
      categoryProducts,
    },
  };
};

export default CategoryPage;
