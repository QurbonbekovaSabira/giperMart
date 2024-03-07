import React from "react";
import { useParams } from "react-router-dom";

export const CategoryName = () => {
  const { name } = useParams();
  return <div className="container">{name}</div>;
};
