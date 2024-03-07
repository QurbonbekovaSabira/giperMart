import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    getCatolog: build.query({
      query: () => {
        return { url: "/catalog" };
      },
    }),
  }),
});

export const { useGetCatologQuery } = catalogApi;
