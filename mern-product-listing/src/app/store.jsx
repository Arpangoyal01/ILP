// configureStore creates Redux store
import { configureStore } from "@reduxjs/toolkit";

// Product reducer
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    // Product state
    products: productReducer,
  },
});
