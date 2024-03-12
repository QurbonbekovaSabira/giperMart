import React from "react";
import { loadState } from "../../config/storege";
import { CheckoutCard } from "./components/card/checkout-card";
export const Checkout = () => {
  const data = loadState("product");
  console.log(data);

  return (
    <div className="container grid grid-cols-2 gap-7">
      <div>
        <h2>Оформление заказа</h2>
      </div>
      <div>
        <div className="mb-[20px] flex flex-col gap-4 border-b pb-4">
          {data?.product?.map((item) => (
            <CheckoutCard {...item} key={item.id} />
          ))}
        </div>
        <div className="flex flex-col gap-4 border-b pb-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-normal text-carbon">
              Сумма по товарам
            </p>
            <p className="text-xl font-semibold text-carbon">
              {data?.totalPrice} Сум
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-normal text-carbon">
              Стоимость доставки
            </p>
            <p className="text-xl font-semibold text-carbon">0 Сум</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-xl font-normal text-carbon">Итого:</p>
          <p className="text-xl font-semibold text-carbon">
            {data?.totalPrice} Сум
          </p>
        </div>
      </div>
    </div>
  );
};
