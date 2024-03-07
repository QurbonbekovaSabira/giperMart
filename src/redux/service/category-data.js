import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const categoryData = createApi({
  reducerPath: "categoryData",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    getCategoryData: build.query({
      query: (name) => {
        return {
          url: `/${name}`,
        };
      },
    }),
  }),
});

export const { useGetCategoryDataQuery } = categoryData;
