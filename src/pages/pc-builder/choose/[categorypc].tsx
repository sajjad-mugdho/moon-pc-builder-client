import PcBuilderCard from "@/components/UI/pcBuilderCard";
import { addToPc } from "@/redux/features/pcBulderSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/router";

const ChooseSingleCategory = ({ products }: any) => {
  const router = useRouter();
  const { categorypc: category } = router.query;
  const dispatch = useAppDispatch();
  console.log("inCategory", products, category);

  const handleAddToBuilder = (product: any) => {
    const data = {
      category,
      product,
    };
    console.log(data);
    dispatch(addToPc(data));
    router.push("/pc-builder");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center uppercase">{category}</h1>
      <div className="grid grid-cols-3 gap-5 my-10 justify-center items-center">
        {Array.isArray(products) &&
          products?.map((product: any) => (
            <PcBuilderCard
              handleAddToBuilder={handleAddToBuilder}
              product={product}
              key={product?._id}
            ></PcBuilderCard>
          ))}
      </div>
    </div>
  );
};

export default ChooseSingleCategory;

export const getServerSideProps = async ({ params }: any) => {
  const { categorypc } = params;

  const response = await fetch(
    `https://moon-pc-server.vercel.app/api/v1/products/pc/${categorypc}`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
