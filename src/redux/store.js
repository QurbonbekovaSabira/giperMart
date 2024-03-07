import { apiReducer } from "./service";
import { configureStore } from "@reduxjs/toolkit";
import service from "./service";

export const store = configureStore({
  reducer: {
    ...apiReducer,
  },

  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(...service.map((api) => api.middleware));
  },
});
