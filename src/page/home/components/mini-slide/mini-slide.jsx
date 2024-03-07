import React from "react";
import Slider from "react-slick";
import { CardModal } from "../../../../components/card-modal";
import { useGetCatologQuery } from "../../../../redux/service/catolog-get";
export const MiniSlide = () => {
  const { data, isLoading } = useGetCatologQuery();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {data?.map((item) => (
        <CardModal key={item.id} {...item} />
      ))}
    </Slider>
  );
};
