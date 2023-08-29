/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const PcBuilderCard = ({ product, handleAddToBuilder }: any) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product?.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Name: {product?.productName}</h2>
          <p className="">Category: {product?.category}</p>
          <p className="">Price: ${product?.price}</p>
          <p className="">Status: {product?.status}</p>
          <p className="">Review:{product?.individualRating}</p>
          <div className="card-actions flex justify-center items-center">
            <button
              onClick={() => handleAddToBuilder(product)}
              className="btn btn-primary items-center"
            >
              Add To Builder
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PcBuilderCard;
