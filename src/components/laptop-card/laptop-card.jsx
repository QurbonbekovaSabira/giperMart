import React from "react";
import { Link } from "react-router-dom";
export const LaptopCard = (product) => {
  return (
    <Link to={`/data/${product.id}`}>
      <div className="flex h-[157px] gap-4">
        <div className="max-w-[140px]">
          <img src={product.img} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-lg font-normal text-carbon">
            {product.title} {product?.rame} {product?.color}
          </p>
          <p className="text-base font-semibold">{product.price} Сум</p>
        </div>
      </div>
    </Link>
  );
};
