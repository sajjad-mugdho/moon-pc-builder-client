import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),
    getLastProduct: builder.query({
      query: () => "/products/last",
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetLastProductQuery,
  useGetProductQuery,
} = productApi;
