// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import { getCartItemsFromLocalStorage } from '../utils/localStorage';

const persistedCartItems = getCartItemsFromLocalStorage();

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: persistedCartItems,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
