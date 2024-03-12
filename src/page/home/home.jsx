import React from "react";
import { Banners } from "./components/banners/banners";
import { MiniSlide } from "./components/mini-slide";
import { useGetCategoryDataQuery } from "../../redux/service/category-data";
import Slider from "react-slick";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { ArrowRightIcon } from "../../assets/icon/arrow-right-icon";
import { PhoneCard } from "../../components/phone-card";
import { LaptopCard } from "../../components/laptop-card";
import { Link } from "react-router-dom";
import { CardPhoneSkeleton } from "../../components/card-phone-skeleton";
import { BrandSkeleton } from "./components/brand-skeleton";
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
  const { data: dataBrand, isLoading: BrandLoading } =
    useGetCategoryDataQuery("brand");
  const { data: saleData, isLoading: saleLoading } =
    useGetCategoryDataQuery("ads");
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
          {!isLoading ? (
            <>
              {" "}
              <Slider {...settings}>
                {data?.map((item) => (
                  <PhoneCard key={item.id} {...item} />
                ))}
              </Slider>
            </>
          ) : (
            <Slider {...settings}>
              {[...Array(5)]?.map((item, i) => (
                <CardPhoneSkeleton key={i} />
              ))}
            </Slider>
          )}
        </div>
      </section>
      <section className="bg-aureolin pb-[40px] pt-4">
        <div className="container">
          <h2 className="mb-[24px] text-2xl font-semibold text-cannon-black">
            Акции
          </h2>
          {!isLoading ? (
            <div className="flex items-center gap-[22px]">
              {saleData?.map((item) => (
                <img key={item.id} src={item.img} alt="img" />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-[22px]">
              {[...Array(3)]?.map((item, i) => (
                <div
                  key={i}
                  role="status"
                  className="flex h-56 max-w-full animate-pulse items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-400"
                >
                  <svg
                    className=" w-[33%] text-gray-100 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="py-[64px]">
        <div className="container grid grid-cols-3 gap-[40px]">
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Смартфоны и планшеты
            </h2>
            <div className="flex flex-col gap-[32px]">
              {!isLoading
                ? telData
                    ?.slice(0, 3)
                    ?.map((item) => <LaptopCard key={item.id} {...item} />)
                : [...Array(3)].map((item, i) => (
                    <div
                      key={i}
                      role="status"
                      className="grid h-[157px] max-w-sm animate-pulse grid-cols-2 justify-center  gap-[40px] rounded  bg-gray-100 p-4 shadow md:p-6 "
                    >
                      <div className="mb-4 flex h-[120px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                        <svg
                          className="h-10 w-full text-gray-100 dark:text-gray-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                      </div>
                      <div className="flex h-[120px] flex-col justify-between">
                        <div className="">
                          <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-300" />
                          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                        </div>
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Ноутбуки, планшеты и компьютеры
            </h2>
            {!isLoading ? (
              <div className="flex flex-col gap-[32px]">
                {notebookData?.map((item) => (
                  <LaptopCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[32px]">
                {[...Array(3)].map((item, i) => (
                  <div
                    key={i}
                    role="status"
                    className="grid h-[157px] max-w-sm animate-pulse grid-cols-2 justify-center  gap-[40px] rounded  bg-gray-100 p-4 shadow md:p-6 "
                  >
                    <div className="mb-4 flex h-[120px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                      <svg
                        className="h-10 w-full text-gray-100 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="flex h-[120px] flex-col justify-between">
                      <div className="">
                        <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-300" />
                        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="mb-[32px] border-b pb-[14px] text-2xl font-normal text-carbon">
              Смартфоны и планшеты
            </h2>
            {!isLoading ? (
              <div className="flex flex-col gap-[32px]">
                {telData?.slice(3, 6)?.map((item) => (
                  <LaptopCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-[32px]">
                {[...Array(3)].map((item, i) => (
                  <div
                    key={i}
                    role="status"
                    className="grid h-[157px] max-w-sm animate-pulse grid-cols-2 justify-center  gap-[40px] rounded  bg-gray-100 p-4 shadow md:p-6 "
                  >
                    <div className="mb-4 flex h-[120px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                      <svg
                        className="h-10 w-full text-gray-100 dark:text-gray-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="flex h-[120px] flex-col justify-between">
                      <div className="">
                        <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-300" />
                        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            )}
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
          {!isLoading ? (
            <>
              {" "}
              <Slider {...settings}>
                {data?.map((item) => (
                  <PhoneCard key={item.id} {...item} />
                ))}
              </Slider>
            </>
          ) : (
            <Slider {...settings}>
              {[...Array(5)]?.map((item, i) => (
                <CardPhoneSkeleton key={i} />
              ))}
            </Slider>
          )}
        </div>
      </section>
      <section className="pb-[52px] pt-[48px]">
        <div className="container">
          <h2 className="relative mb-7 block text-2xl font-semibold text-carbon">
            Ноутбуки, планшеты и компьютеры
          </h2>
        </div>
        <div className="pl-[44px]">
          {!noteIsLoading ? (
            <>
              <Slider {...settings}>
                {noteData?.map((item) => (
                  <PhoneCard key={item.id} {...item} />
                ))}
              </Slider>
            </>
          ) : (
            <Slider {...settings}>
              {[...Array(5)]?.map((item, i) => (
                <CardPhoneSkeleton key={i} />
              ))}
            </Slider>
          )}
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="mb-7 text-2xl font-semibold text-carbon">
            Популярные бренды
          </h2>
          <div className="flex flex-wrap items-center gap-[30px]">
            {!BrandLoading
              ? dataBrand?.map((item) => (
                  <Link to={`/brand/${item.brand}`} key={item.id}>
                    <img
                      className="h-[90px] w-[165px] object-contain"
                      src={item.img}
                      alt={item.brand}
                    />
                  </Link>
                ))
              : [...Array(12)].map((item, i) => <BrandSkeleton key={i} />)}
          </div>
        </div>
      </section>
    </>
  );
};
