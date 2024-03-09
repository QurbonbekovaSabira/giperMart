import React from "react";
import { Banners } from "./components/banners/banners";
import { MiniSlide } from "./components/mini-slide";
import { useGetCategoryDataQuery } from "../../redux/service/category-data";
import Slider from "react-slick";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { ArrowRightIcon } from "../../assets/icon/arrow-right-icon";
import { PhoneCard } from "../../components/phone-card";
import { LaptopCard } from "../../components/laptop-card";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button className="absolute right-[50px] top-[-40px] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center">
        <ArrowRightIcon />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <button
        className={`absolute right-[100px] top-[-40px] z-30 inline-block translate-y-[-50%] rounded-full bg-white p-4 text-center`}
      >
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export const Home = () => {
  const { data, isLoading } = useGetCategoryDataQuery("phones");
  const { data: noteData, isLoading: noteIsLoading } =
    useGetCategoryDataQuery("notebook");
  const notebookData = noteData?.slice(0, 3);
  const telData = data?.slice(0, 6);
  return (
    <>
      <Banners />
      <section className="overflow-hidden pb-[48px] pt-[32px]">
        <div className="pl-[50px]">
          <MiniSlide />
        </div>
      </section>
      <section className="pb-[48px]">
        <div className="container">
          <h2 className="relative mb-7 block text-2xl font-semibold text-carbon">
            Смартфоны и планшеты
          </h2>
        </div>
        <div className="pl-[44px]">
          <Slider {...settings}>
            {data?.map((item) => (
              <PhoneCard key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </section>
      <section className="bg-aureolin pb-[40px] pt-4">
        <div className="container">
          <h2 className="mb-[24px] text-2xl font-semibold text-cannon-black">
            Акции
          </h2>
        </div>
      </section>
      <section className="py-[64px]">
        <div className="container grid grid-cols-3 gap-[40px]">
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Смартфоны и планшеты
            </h2>
            <div className="flex flex-col gap-[32px]">
              {telData?.slice(0, 3)?.map((item) => (
                <LaptopCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Ноутбуки, планшеты и компьютеры
            </h2>
            <div className="flex flex-col gap-[32px]">
              {notebookData?.map((item) => (
                <LaptopCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Смартфоны и планшеты
            </h2>
            <div className="flex flex-col gap-[32px]">
              {telData?.slice(3, 6)?.map((item) => (
                <LaptopCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[30px] pt-[64px]">
        <div className="container">
          <h2 className="relative mb-7 block text-2xl font-semibold text-carbon">
            Смартфоны и планшеты
          </h2>
        </div>
        <div className="pl-[44px]">
          <Slider {...settings}>
            {data?.map((item) => (
              <PhoneCard key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </section>
      <section className="pb-[52px] pt-[48px]">
        <div className="container">
          <h2 className="relative mb-7 block text-2xl font-semibold text-carbon">
            Ноутбуки, планшеты и компьютеры
          </h2>
        </div>
        <div className="pl-[44px]">
          <Slider {...settings}>
            {noteData?.map((item) => (
              <PhoneCard key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
