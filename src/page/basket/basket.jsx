import React from "react";
import { loadState } from "../../config/storege";
import { BasketCard } from "./components/basket-card/basket-card";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import img from "../../assets/img/not-found.jpg";
import { totalPriceData } from "../../redux/reducer/product-reducer";
import { useDispatch } from "react-redux";
export const Basket = () => {
  const data = useSelector((state) => state.product.product);
  const product = loadState("product");
  return (
    <div className="container">
      {product?.product?.length ? (
        <>
          <h2 className="mb-[24px] mt-[24px] text-2xl font-semibold text-carbon">
            Корзина
          </h2>
          <div className="flex gap-[150px]">
            <div className="flex flex-col gap-[30px]">
              {product?.product?.map((item) => (
                <BasketCard key={nanoid()} {...item} />
              ))}
            </div>
            <div>
              <div className="bg-lynx-white p-[24px] pr-[100px]">
                <p className="mb-[16px] text-2xl font-normal text-carbon">
                  В корзине
                </p>
                <div className="mb-[17px] flex gap-2">
                  <p className="text-base font-normal text-carbon">Товаров:</p>{" "}
                  <p className="text-base font-normal text-carbon">
                    {product.product.length}
                  </p>
                </div>
                <h4 className="text-2xl font-semibold text-carbon">
                  {product.totalPrice} Сум
                </h4>
              </div>
              <div>
                <button className="text-nowrap bg-aureolin px-[100px] py-[15px] text-xl font-normal text-cannon-black">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-[750px]">
          <img src={img} alt="" />
        </div>
      )}
    </div>
  );
};
