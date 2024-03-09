import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const categoryPage = createApi({
  reducerPath: "categoyPage",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    categoryPageData: build.query({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useCategoryPageDataQuery } = categoryPage;
