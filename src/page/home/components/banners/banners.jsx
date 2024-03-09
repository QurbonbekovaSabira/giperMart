import React from "react";
import Slider from "react-slick";
import { useGetBannersDataQuery } from "../../../../redux/service/banners-data";
import { BannerArrow } from "../../../../assets/icon/banner-arrow";
import { BannerArrowRight } from "../../../../assets/icon/banner-arrow-right";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button className="absolute right-[50px] top-[50%] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center">
        <BannerArrowRight />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button className="absolute left-[50px] top-[50%] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center">
        <BannerArrow />
      </button>
    </div>
  );
}
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
export const Banners = () => {
  const { data, isLoading } = useGetBannersDataQuery();
  if (isLoading && !data) return "";
  return (
    <Slider {...settings} className="relative">
      {data?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </Slider>
  );
};
