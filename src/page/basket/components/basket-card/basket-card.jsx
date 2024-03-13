import React from "react";
import { DeleteIcon } from "../../../../assets/icon/delete-icon";
import { BasketLikeIcon } from "../../../../assets/icon/basket-like-icon";
import { PlusIcon } from "../../../../assets/icon/plus-icon";
import { MinusIcon } from "../../../../assets/icon/minus-icon";
import { useDispatch } from "react-redux";
import { toggleAnmount } from "../../../../redux/reducer/product-reducer";
import { remove } from "../../../../redux/reducer/product-reducer";
import { loadState } from "../../../../config/storege";
export const BasketCard = (product) => {
  const [counter, setCounter] = React.useState(product.userCount);
  const [price, setprice] = React.useState(product.userPrice);
  const dispatch = useDispatch();

  const deleteData = () => {
    dispatch(remove({ id: product.id }));
  };
  const increment = () => {
    dispatch(toggleAnmount({ ...product, type: "add" }));
    setCounter((p) => p + 1);
    setprice((p) => p + Number(product.price.replace(/\D/g, "")));
  };
  const decrement = () => {
    if (counter >= 1) {
      dispatch(toggleAnmount({ ...product, type: "delete" }));
      setCounter((p) => p - 1);
      setprice((p) => p - Number(product.price.replace(/\D/g, "")));
    }
  };
  return (
    <div className="flex gap-[50px] border-b border-white-edgar pb-[25px]">
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <div className="mb-4">
          <h3 className="mb-1 text-2xl font-medium text-carbon">
            {product.title} {product?.rame} {product?.ram}
          </h3>
          <span className="text-base font-normal text-carbon">
            {product?.rame} {product?.ram}
          </span>
        </div>
        <div className="flex items-center gap-[36px]">
          <button className="flex items-center gap-2 text-base font-normal text-basalt-grey">
            <BasketLikeIcon /> В избранное
          </button>
          <button
            onClick={deleteData}
            className="flex items-center gap-2 text-base font-normal text-basalt-grey"
          >
            <DeleteIcon />
            Удалить
          </button>
        </div>
      </div>
      <div>
        <p className="mb-[40px] text-nowrap text-2xl font-semibold text-carbon">
          {price} Сум
        </p>
        <div className="flex">
          <button
            onClick={decrement}
            className="inline-block  items-center justify-center border-[2px] border-white-edgar px-[10px] py-[16px]"
          >
            <MinusIcon />
          </button>
          <p className="bg-white-edgar px-6 py-1 text-2xl font-normal text-carbon">
            {counter}
          </p>
          <button
            onClick={increment}
            className="flex items-center justify-center border-[2px] border-white-edgar px-[10px] py-[9px]"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
