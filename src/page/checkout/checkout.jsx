import React from "react";
import { loadState } from "../../config/storege";
import { CheckoutCard } from "./components/card/checkout-card";
import { useForm } from "react-hook-form";
import { PaymeIcon } from "../../assets/icon/payme-icon";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const data = loadState("product");
  const { register, reset, handleSubmit } = useForm();
  const notify = () => toast("Заказ оформлен!");
  const navigate = useNavigate();
  const submit = (data) => {
    reset();
    navigate("/");
    notify();
  };

  return (
    <>
      <div className="container mb-[56px] grid grid-cols-2 gap-7 pt-[16px]">
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
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-4 flex flex-col gap-3">
              <label htmlFor="name">
                <p className="text-base font-normal text-carbon">
                  Контактное лицо (ФИО)
                  <span className="text-vermilion-cinnabar">*</span>
                </p>
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                type="text"
                className="border-grey w-full border p-2"
              />
            </div>
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="phone">
                <p className="text-base font-normal text-carbon">
                  Контактный телефон
                  <span className="text-vermilion-cinnabar">*</span>
                </p>
              </label>
              <input
                {...register("phone", { required: true })}
                id="phone"
                type="text"
                className="border-grey w-full border p-2"
              />
            </div>
            <h4 className="mb-4 text-2xl font-semibold text-carbon">
              Доставка
            </h4>
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="post">
                <p className="text-base font-normal text-carbon">
                  Населенный пункт
                  <span className="text-vermilion-cinnabar">*</span>
                </p>
              </label>
              <input
                {...register("post", { required: true })}
                id="post"
                type="text"
                className="border-grey w-full border p-2"
              />
            </div>
            <h4 className="mb-4 text-2xl font-semibold text-carbon">
              Покупатель
            </h4>
            <div className="mb-4 flex flex-col gap-3">
              <label htmlFor="Email">
                <p className="text-base font-normal text-carbon">Email</p>
              </label>
              <input
                {...register("Email", { required: true })}
                id="Email"
                type="text"
                className="border-grey w-full border p-2"
              />
            </div>
            <div className="flex gap-6">
              <input id="check" type="checkbox" />
              <label htmlFor="check">
                <p className="mb-[6px] text-xl font-normal text-carbon">
                  Стать постоянным покупателем
                </p>
                <p className="text-bank-vault text-base">
                  Вы сможете видеть историю заказов, проще делать новые и
                  получать скидки
                </p>
              </label>
            </div>
            <h4 className="mb-4 text-2xl font-semibold text-carbon">
              Способ оплаты
            </h4>
            <div className="bg-white-smoke mb-[36px] flex w-[137px] items-center gap-[5px] px-5 py-[13px]">
              <input id="pay" type="checkbox" />
              <label htmlFor="pay">
                <PaymeIcon />
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-aureolin py-[14px] text-base font-semibold text-cannon-black"
            >
              Подтвердить заказ
            </button>
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
      <div>
        <button>Notify!</button>
        <ToastContainer />
      </div>
    </>
  );
};
