import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storege";
const initialState = loadState("product") || {
  product: [],
  totalPrice: 0,
  count: 0,
};

const productReduser = createSlice({
  name: "productReduser",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = state.product?.find(
        (item) => item.id === action.payload.id,
      );
      if (!product) {
        return {
          ...state,
          product: [
            ...state.product,
            {
              ...action.payload,
              userCount: 1,
              userPrice: Number(action.payload.price.replace(/\D/g, "")),
            },
          ],
        };
      }
      return state;
    },

    remove: (state, action) => {
      return {
        ...state,
        product: state.product.filter((item) => item.id !== action.payload.id),
        count: state.count - 1,
      };
    },
    toggleAnmount: (state, action) => {
      if (action.payload.type === "add") {
        const newProduct = state.product.map((item) => {
          if (
            item.id == action.payload.id &&
            item.count !== action.payload.userCount
          ) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice:
                (item.userCount + 1) * Number(item.price.replace(/\D/g, "")),
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
      if (action.payload.type === "delete") {
        const newProduct = state.product.map((item) => {
          if (item.id == action.payload.id && 1 !== action.payload.userCount) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice:
                (item.userCount - 1) * Number(item.price.replace(/\D/g, "")),
            };
          }
          return item;
        });
        return { ...state, product: newProduct };
      }
    },
    totalPriceData: (state, action) => {
      const count = state.product?.reduce((a,b)=> {
        return a + b.userPrice
      },0)

      console.log(count);
      return { ...state, totalPrice: count };
    },
    setcount: (state) => {
      const count = state.product.reduce((a, b) => {
        return a + b.userCount;
      }, 0);
      return { ...state, count: count };
    },
  },
});
export default productReduser.reducer;

export const { add, remove, totalPriceData, toggleAnmount, setcount } =
  productReduser.actions;
