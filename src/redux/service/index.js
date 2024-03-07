import { allApi } from "./all-product";
import { catalogApi } from "./catolog-get";
import { getBanners } from "./banners-data";
import { categoryData } from "./category-data";

export const apiReducer = {
  [allApi.reducerPath]: allApi.reducer,
  [catalogApi.reducerPath]: catalogApi.reducer,
  [getBanners.reducerPath]: getBanners.reducer,
  [categoryData.reducerPath]: categoryData.reducer,
};

export default [allApi, catalogApi, getBanners, categoryData];
