import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import pcBuilderSlice from "./features/pcBulderSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    pcBuilder: pcBuilderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
