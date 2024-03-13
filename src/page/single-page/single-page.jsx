import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllIdDataQuery } from "../../redux/service/all-product";
import { StarsIcon } from "../../assets/icon/stars-icon";
import { LikeIcon } from "../../assets/icon/like-icon";
import { add } from "../../redux/reducer/product-reducer";
import { useDispatch } from "react-redux";
import { loadState } from "../../config/storege";
import { LikeRed } from "../../assets/icon/like-red";
const SinglePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useGetAllIdDataQuery(id);
  const [save, setSave] = React.useState(false);
  const [newLike, setLikeData] = React.useState(false);
  const { like } = loadState("product");
  React.useEffect(() => {
    setLikeData(like.some((item) => item.id == id));
  }, [like, id]);

  const submit = () => {
    dispatch(add(data));
    setSave(true);
  };

  if (data) {
    <h2>Loading...</h2>;
  }
  return (
    <div className="container pb-[20px]">
      <h2 className="mb-[14px] mt-[36px] text-2xl font-semibold text-carbon">
        {data?.title} {data?.rame}
      </h2>
      <div className="mb-[19px] flex items-start justify-between">
        <div className="flex items-center gap-[36px]">
          <p className="flex items-center gap-[12px] text-base font-normal text-zunda-green">
            <StarsIcon />
            (0)
          </p>
          {!newLike ? (
            <button className="flex items-center gap-[12px] text-base font-normal text-carbon">
              <LikeIcon /> В избранное
            </button>
          ) : (
            <button className="flex items-center gap-[12px] text-base font-normal text-carbon">
              <LikeRed /> В избранное
            </button>
          )}
        </div>
        <p>арт.{data?.id}</p>
      </div>
      <span className="mb-6 block h-[1px] bg-white-edgar"></span>
      <div className="flex gap-6">
        <div className="w-full max-w-[435px]">
          <img className="w-full" src={data?.img} alt="" />
        </div>
        <div>
          <div className="mb-5 flex items-center gap-2">
            <p className=" text-lg font-medium text-carbon">Бренд:</p>
            <p className="text-base font-normal text-carbon">{data?.brand}</p>
          </div>
          {data?.rame && (
            <div className="mb-5 ">
              <p className=" mb-2 text-lg font-medium text-carbon">
                Объем памяти
              </p>
              <p className="inline border-[2px] border-primary px-[12px] py-2 text-base font-normal text-carbon">
                {data.rame}
              </p>
            </div>
          )}
          {data?.ram && (
            <div className="mb-5 flex flex-col gap-[14px]">
              <p className=" text-lg font-medium text-carbon">Объем памяти</p>
              <p className="border-[2px] border-primary px-[12px] py-2 text-base font-normal text-carbon">
                {data.ram}
              </p>
            </div>
          )}
          <p className="mb-4 text-lg font-medium text-carbon">Характеристики</p>
          {data?.color && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">Цвет:</p>
              <p className="text-base font-normal text-carbon">{data.color}</p>
            </div>
          )}
          {data?.rame && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">память:</p>
              <p className="text-base font-normal text-carbon">{data.rame}</p>
            </div>
          )}
          {data?.geForce && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">Память:</p>
              <p className="text-base font-normal text-carbon">
                {data.geForce}
              </p>
            </div>
          )}
          {data?.core && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">Core:</p>
              <p className="text-base font-normal text-carbon">{data.core}</p>
            </div>
          )}
          {data?.display && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Диагональ дисплея:
              </p>
              <p className="text-base font-normal text-carbon">
                {data.display}
              </p>
            </div>
          )}
          {data?.memory && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Общий объем накопителей:
              </p>
              <p className="text-base font-normal text-carbon">{data.memory}</p>
            </div>
          )}
          {data?.weight && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">Масса:</p>
              <p className="text-base font-normal text-carbon">{data.weight}</p>
            </div>
          )}
          {data?.details?.display && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Диагональ дисплея:
              </p>
              <p className="text-base font-normal text-carbon">
                {data.details?.display}
              </p>
            </div>
          )}
          {data?.details?.display && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Частота обновления экрана:
              </p>
              <p className="text-base font-normal text-carbon">
                {data?.details?.frequency}
              </p>
            </div>
          )}
          {data?.details?.weight && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">Масса:</p>
              <p className="text-base font-normal text-carbon">
                {data?.details?.weight}
              </p>
            </div>
          )}
          {data?.details?.security && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Безопасность:
              </p>
              <p className="text-base font-normal text-carbon">
                {data?.details?.security}
              </p>
            </div>
          )}
          {data?.details?.security && (
            <div className="mb-[12px] flex items-center gap-2">
              <p className="text-base font-normal text-basalt-grey">
                Диагональ:
              </p>
              <p className="text-base font-normal text-carbon">
                {data?.details?.diagonal}
              </p>
            </div>
          )}
        </div>
        <div className="ml-auto h-[167px] w-full max-w-[340px] border px-[16px]  py-[12px]">
          <p className="mb-[21px] text-4xl font-semibold text-carbon">
            {data?.price} Сум
          </p>
          <button
            onClick={submit}
            className={`w-full ${!save && "bg-aureolin"} ${save && "bg-vermilion-cinnabar"} py-[12px] text-base font-normal text-cannon-black`}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
