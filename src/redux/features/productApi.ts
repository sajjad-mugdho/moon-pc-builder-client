import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getLastProduct: builder.query({
      query: () => "/products/last",
    }),
  }),
});

export const { useGetAllProductQuery, useGetLastProductQuery } = productApi;
