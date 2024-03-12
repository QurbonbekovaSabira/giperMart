import React from "react";
import { LikeIcon } from "../../assets/icon/like-icon";
import { ShoppingCartIcon } from "../../assets/icon/shopping-cart-icon";
import { Link } from "react-router-dom";
import { LikeRedIcon } from "../../assets/icon/like-red-icon";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/product-reducer";
import { useSelector } from "react-redux";
export const PhoneCard = (product) => {
  const [like, setLike] = React.useState(false);
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(add({ ...product }));
  };
  const selectData = useSelector((state) => state.product.product);

  return (
    <div className="w-full max-w-[240px] px-1 py-2">
      {product && (
        <>
          <div className="relative mb-[14px]">
            <Link to={`/data/${product.id}`}>
              <img
                className="mx-auto max-w-[165px]"
                src={product.img}
                alt={product.title}
              />
            </Link>
            <button
              onClick={() => setLike(true)}
              className="absolute right-2 top-2 text-cannon-black"
            >
              {like ? <LikeRedIcon /> : <LikeIcon />}
            </button>
          </div>
          <div className="pl-1">
            <p className="h-[45px] pr-[33px] text-base font-normal">
              {product.title.slice(0, 25)} {product.rame}
            </p>
            <div className="flex items-center justify-between gap-4 pb-[6px]">
              <p>{product.price} Сум</p>
              <button
                onClick={() => addProduct()}
                className="bg-aureolin p-[6px]"
              >
                <ShoppingCartIcon />
              </button>
            </div>
          </div>
        </>
      )}

      {!product && (
        <div
          role="status"
          class="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 dark:border-gray-700"
        >
          <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              classname="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mt-4 flex items-center">
            <svg
              classname="me-3 h-10 w-10 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};
