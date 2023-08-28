import Link from "next/link";
import React from "react";

const FeaturesCard = ({ card }: any) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={card?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card?.name}</h2>
          <div className="card-actions justify-end">
            <Link href={`/products/${card.category}`}>
              <button className="btn btn-primary ">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
