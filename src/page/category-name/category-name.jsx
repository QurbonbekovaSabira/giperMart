import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryPageDataQuery } from "../../redux/service/category-page-data";
import { PhoneCard } from "../../components/phone-card";
import { CardPhoneSkeleton } from "../../components/card-phone-skeleton";
import { set } from "react-hook-form";
const CategoryName = () => {
  const { name } = useParams();
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useCategoryPageDataQuery({ name, page });
  const buttons = Array(data?.pageSize).fill(null);

  return (
    <div className="container py-[50px]">
      <h2 className="mb-[30px] text-2xl font-semibold text-carbon">
        {name === "phones" && "Смартфоны и планшеты"}
        {name === "computers" && "Компьютеры для геймеров"}
        {name === "steeringWheel" && "Авто мото товары"}
        {name === "notebook" && "Ноутбуки"}
        {name === "washingM" && "Бытовая техника"}
        {name === "sport" && "Спорт"}
      </h2>
      <div className="mx-auto mb-[40px] flex flex-wrap items-center gap-x-[48px] gap-y-[24px]">
        {!isLoading
          ? data?.data?.map((item) => <PhoneCard key={item.id} {...item} />)
          : [...Array(8)].map((item, i) => <CardPhoneSkeleton key={i} />)}
      </div>
      <div className="flex items-center justify-center gap-[15px]">
        {buttons?.map((_, i) => (
          <button
            onClick={() => setPage(i + 1)}
            key={i}
            className={`${page !== i + 1 ? "bg-aureolin" : "bg-yellow"} rounded-lg p-2 text-base font-medium text-carbon`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryName;
