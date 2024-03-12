import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const CardModal = (product) => {
  const naviget = useNavigate();

  return (
    <Link to={`/product/${product.name}`}>
      <div
        className="group flex max-w-[240px] items-center gap-4 bg-cascading-white px-[16px] py-[14px]"
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
