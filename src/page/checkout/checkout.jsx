import React from "react";
import { loadState } from "../../config/storege";
import { CheckoutCard } from "./components/card/checkout-card";
import { useForm } from "react-hook-form";
export const Checkout = () => {
  const data = loadState("product");
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className="container grid grid-cols-2 gap-7 pt-[16px]">
      <div>
        <h2 className="mb-[56px] text-4xl font-semibold text-carbon">
          Оформление заказа
        </h2>
        <p className="mb-[12px] text-base font-normal text-vermilion-cinnabar">
          Уже покупали у нас?
        </p>
        <h4 className="mb-4 text-2xl font-semibold text-carbon">
          Контактные данные
        </h4>
        <form>
          <label htmlFor="name">Контактное лицо (ФИО)</label>
          <input type="text" className="border p-4" />
        </form>
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
