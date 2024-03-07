import React from "react";
import { LikeIcon } from "../../assets/icon/like-icon";
import { ShoppingCartIcon } from "../../assets/icon/shopping-cart-icon";

export const PhoneCard = (product) => {
  return (
    <div>
      <div className="relative ">
        <img
          className="mx-auto max-w-[165px]"
          src={product.img}
          alt={product.title}
        />
        <button className="absolute right-2 top-2">
          <LikeIcon />
        </button>
      </div>
      <div>
        <p className="text-base font-normal text-carbon">
          {product.title} {product.rame}
        </p>
        <div className="flex items-center gap-[15px] pb-[6px]">
          <p>{product.price}</p>
          <button className="bg-aureolin p-[6px]">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
