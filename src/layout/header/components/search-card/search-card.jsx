import React from "react";
import arrow from "../../../../assets/img/arrow-down.png";
import { Link } from "react-router-dom";
export const SearchCard = (product) => {
  return (
    <Link to={`/data/${product.id}`}>
      <div className="flex items-center justify-between border px-4 py-2 transition-all duration-300 hover:bg-cascading-white">
        <div className="flex items-center gap-4">
          <div className="max-w-[35px]">
            <img src={product.img} alt="" />
          </div>
          <p>{product.title}</p>
        </div>
        <div className="max-w-[16px] rotate-[270deg]">
          <img src={arrow} alt="" />
        </div>
      </div>
    </Link>
  );
};
