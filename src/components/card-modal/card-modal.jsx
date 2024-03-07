import React from "react";
import { Link } from "react-router-dom";
export const CardModal = (product) => {
  return (
    <Link to={`/product/${product.name}`}>
      <div
        onClick={() => product?.setIsOpen(false)}
        className="bg-cascading-white group flex max-w-[240px] items-center gap-4 px-[16px] py-[14px]"
      >
        <div className="max-w-[96px]">
          <img src={product?.img} alt={product.text} />
        </div>
        <h1 className="text-wrap text-center group-hover:text-vermilion-cinnabar">
          {product.text}
        </h1>
      </div>
    </Link>
  );
};
