import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    getAllData: build.query({
      query: (search) => {
        return {
          url: `/all`,
          params: { title_like: search },
        };
      },
    }),
  }),
});

export const { useGetAllDataQuery } = allApi;