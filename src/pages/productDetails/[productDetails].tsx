import { useGetProductQuery } from "@/redux/features/productApi";
import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  const { productDetails } = router.query;

  const { data: product } = useGetProductQuery(productDetails);

  return (
    <div className="m-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {product?.productName}</h2>
          <p className="text-lg font-medium ">
            Description: {product?.description}
          </p>
          <p className="text-lg font-semibold ">Price: ${product?.price}</p>
          <p className="text-lg font-semibold ">Status: {product?.status}</p>
          <p className="text-lg font-semibold ">
            Key Features: {product?.keyFeatures}
          </p>
          <p className="text-lg font-semibold ">
            Rating: {product?.individualRating}
          </p>
          <p className="text-lg font-semibold ">
            Average Rating: {product?.averageRating}
          </p>
          {product?.reviews?.map((rev, i): any => (
            <div key={i} className="badge badge-primary badge-outline">
              Reviews: {rev}
            </div>
          ))}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Builder</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
