import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryPageDataQuery } from "../../redux/service/category-page-data";
import { PhoneCard } from "../../components/phone-card";
import { CardPhoneSkeleton } from "../../components/card-phone-skeleton";
export const CategoryName = () => {
  const { name } = useParams();
  const { data, isLoading } = useCategoryPageDataQuery(name);
  return (
    <div className="container">
      <h2 className="mb-[30px] text-2xl font-semibold text-carbon">
        {name === "phones" && "Смартфоны и планшеты"}
        {name === "computers" && "Компьютеры для геймеров"}
        {name === "steeringWheel" && "Авто мото товары"}
        {name === "notebook" && "Ноутбуки"}
        {name === "washingM" && "Бытовая техника"}
        {name === "sport" && "Спорт"}
      </h2>
      <div className="mx-auto flex flex-wrap items-center gap-x-[48px] gap-y-[24px]">
        {!isLoading
          ? data?.map((item) => <PhoneCard key={item.id} {...item} />)
          : [...Array(8)].map((item, i) => <CardPhoneSkeleton key={i} />)}
      </div>
    </div>
  );
};
