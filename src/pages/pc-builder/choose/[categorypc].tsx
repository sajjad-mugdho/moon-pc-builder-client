import PcBuilderCard from "@/components/UI/pcBuilderCard";
import { addToPc } from "@/redux/features/pcBulderSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/router";

const ChooseSingleCategory = ({ products }: any) => {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useAppDispatch();
  console.log(products, category);

  const handleAddToBuilder = (product: any) => {
    dispatch(addToPc({ category, product }));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center uppercase">{category}</h1>
      <div className="grid grid-cols-3 gap-5 my-10 justify-center items-center">
        {Array.isArray(products) &&
          products?.map((product: any) => (
            <PcBuilderCard product={product} key={product?._id}></PcBuilderCard>
          ))}
      </div>
    </div>
  );
};

export default ChooseSingleCategory;

export const getServerSideProps = async ({ params }: any) => {
  const { category } = params;

  const response = await fetch(
    `http://localhost:5000/api/v1/products/${category}`
  );
  const data = await response.json();
  console.log(category, data);

  return {
    props: {
      products: data,
    },
  };
};
