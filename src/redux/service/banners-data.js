import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const getBanners = createApi({
  reducerPath: "getBanners",

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    getBannersData: build.query({
      query: () => {
        return {
          url: "/banners",
        };
      },
    }),
  }),
});

export const { useGetBannersDataQuery } = getBanners;
