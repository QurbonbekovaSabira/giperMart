import React from "react";
import { LikeIcon } from "../../assets/icon/like-icon";
import { ShoppingCartIcon } from "../../assets/icon/shopping-cart-icon";
import { Link } from "react-router-dom";
import { LikeRedIcon } from "../../assets/icon/like-red-icon";

export const PhoneCard = (product) => {
  const [like, setLike] = React.useState(false);
  return (
    <div className="w-full max-w-[240px] px-1 py-2">
      <div className="relative mb-[14px]">
        <Link to={`/data/${product.id}`}>
          <img
            className="mx-auto max-w-[165px]"
            src={product.img}
            alt={product.title}
          />
        </Link>
        <button
          onClick={() => setLike(true)}
          className="absolute right-2 top-2 text-cannon-black"
        >
          {like ? <LikeRedIcon /> : <LikeIcon />}
        </button>
      </div>
      <div className="pl-1">
        <p className="pr-[53px] text-base font-normal">
          {product.title.slice(0, 25)} {product.rame}
        </p>
        <div className="flex items-center gap-[15px] pb-[6px]">
          <p>{product.price} Сум</p>
          <button className="bg-aureolin p-[6px]">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
