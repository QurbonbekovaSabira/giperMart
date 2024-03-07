import React from "react";
import { Banners } from "./components/banners/banners";
import { MiniSlide } from "./components/mini-slide";
import { useGetCategoryDataQuery } from "../../redux/service/category-data";
import Slider from "react-slick";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { ArrowRightIcon } from "../../assets/icon/arrow-right-icon";
import { PhoneCard } from "../../components/phone-card/phone-card";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button className="absolute right-[50px] top-[50%] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center">
        <ArrowRightIcon />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button className="absolute left-[50px] top-[50%] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center">
        <ArrowLeftIcon />
      </button>
    </div>
  );
}
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Home = () => {
  const { data, isLoading } = useGetCategoryDataQuery("tel");
  return (
    <>
      <Banners />
      <section className="overflow-hidden pb-[48px] pt-[32px]">
        <div className="pl-[50px]">
          <MiniSlide />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="mb-7 text-2xl font-semibold text-carbon">
            Смартфоны и планшеты
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            {data?.map((item) => (
              <PhoneCard key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
