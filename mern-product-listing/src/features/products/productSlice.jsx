import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",

  // Async API call from backend
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");

    return response.data;
  },
);

// Initial Redux state and any component can read directly
const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  // it connected with fatchProducts with help of Thunk Handles async states
  extraReducers: (builder) => {
    builder

      // when Loading state
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      // Success state
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;

        // Save products
        state.products = action.payload;
      })

      // Error state
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;

        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
