import { apiReducer } from "./service";
import { configureStore } from "@reduxjs/toolkit";
import service from "./service";
import { saveState } from "../config/storege";
import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import productReducer from "./reducer/product-reducer";
import {
  add,
  remove,
  totalPriceData,
  toggleAnmount,
  setcount,
} from "./reducer/product-reducer";

const storageMiddlware = createListenerMiddleware();

storageMiddlware.startListening({
  matcher: isAnyOf(add, remove, toggleAnmount),
  effect: (action, api) => {
    api.dispatch(totalPriceData());
    api.dispatch(setcount());
  },
});

export const store = configureStore({
  reducer: {
    ...apiReducer,
    product: productReducer,
  },

  middleware: (defaultMiddleware) => {
    return defaultMiddleware()
      .concat(...service.map((api) => api.middleware))
      .prepend(storageMiddlware.middleware);
  },
});
store.subscribe(() => {
  saveState("product", store.getState().product);
});
