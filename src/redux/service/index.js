import { allApi } from "./all-product";
import { catalogApi } from "./catolog-get";
import { getBanners } from "./banners-data";
import { categoryData } from "./category-data";
import { categoryPage } from "./category-page-data";

export const apiReducer = {
  [allApi.reducerPath]: allApi.reducer,
  [catalogApi.reducerPath]: catalogApi.reducer,
  [getBanners.reducerPath]: getBanners.reducer,
  [categoryData.reducerPath]: categoryData.reducer,
  [categoryPage.reducerPath]: categoryPage.reducer,
};

export default [allApi, catalogApi, getBanners, categoryData, categoryPage];
