import React from "react";
import img from "../../assets/img/not-found.jpg";
import { loadState } from "../../config/storege";
import { PhoneCard } from "../../components/phone-card";
import { useSelector } from "react-redux";
const LikePage = () => {
  const data = loadState("product");

  const [newData, setData] = React.useState(data);

  return (
    <>
      {data.like.length ? (
        <div className="container flex flex-wrap gap-[30px] py-[50px]">
          {newData?.like?.map((item) => (
            <PhoneCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className=" mx-auto max-w-[750px] ">
          <img src={img} alt="" />
        </div>
      )}
    </>
  );
};

export default LikePage;
