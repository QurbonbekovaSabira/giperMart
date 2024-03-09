import React from "react";
import { useParams } from "react-router-dom";
import { useCategoryPageDataQuery } from "../../redux/service/category-page-data";

export const CategoryName = () => {
  const { name } = useParams();
  const { data } = useCategoryPageDataQuery(name, 1);
  console.log(data);
  return <div className="container">{name}</div>;
};
