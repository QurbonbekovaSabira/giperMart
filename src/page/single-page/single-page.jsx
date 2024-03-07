import React from "react";
import { useParams } from "react-router-dom";
export const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SinglePage</div>;
};
