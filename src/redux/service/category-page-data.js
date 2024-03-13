import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const categoryPage = createApi({
  reducerPath: "categoyPage",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  endpoints: (build) => ({
    categoryPageData: build.query({
      query: ({ name, page }) => {
        return {
          url: `/${name}`,
          params: { _page: page, _limit: 8 },
        };
      },
      transformResponse: (data, res) => {
        const totalCount = res?.response.headers?.get("X-Total-count");
        const pageSize = Math.ceil(Number(totalCount) / 8);
        return { data, pageSize };
      },
    }),
  }),
});

export const { useCategoryPageDataQuery } = categoryPage;
