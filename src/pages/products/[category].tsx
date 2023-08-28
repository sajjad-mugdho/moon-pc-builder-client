import AllProductCard from "@/components/UI/allProductCard";
import { useRouter } from "next/router";

const CategoryPage = ({ categoryProducts }: any) => {
  const router = useRouter();
  const { category } = router.query;

  console.log(categoryProducts);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center uppercase">{category}</h1>
      <div className="grid grid-cols-3 gap-5 my-10 justify-center items-center">
        {categoryProducts.map((product: any) => (
          <AllProductCard product={product} key={product?._id}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const { category } = params;

  const response = await fetch(
    `http://localhost:5000/api/v1/products/${category}`
  );
  const categoryProducts = await response.json();

  return {
    props: {
      categoryProducts,
    },
  };
}

export default CategoryPage;
