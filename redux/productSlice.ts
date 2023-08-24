// productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductResult } from '../model/Product';
import ProductError from '../model/ProductError';

interface ProductState {
  product: ProductResult | null;
  loading: boolean;
  error: ProductError | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action: PayloadAction<ProductResult>) => {
      state.loading = false;
      state.product = action.payload;
    },
    fetchProductFailure: (state, action: PayloadAction<ProductError>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
