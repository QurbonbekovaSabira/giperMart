import React from "react";

export const CheckoutCard = (product) => {
  return (
    <div className="flex  items-center gap-8">
      <div className="h-[100px] w-full max-w-[100px]">
        <img className="w-full" src={product.img} alt="" />
      </div>
      <div className="flex items-center gap-8">
        <p className="text-base font-normal text-carbon">
          {product?.title} {product?.color} {product?.rame} {product?.ram}
        </p>
        <div className="flex items-center gap-[6px]">
          <p className="text-base font-normal text-carbon">
            {product?.userCount}
          </p>
          <span className="text-base font-normal text-carbon">X</span>
          <p className="text-nowrap text-base font-semibold text-carbon">
            {product?.price} Сум
          </p>
        </div>
      </div>
    </div>
  );
};
