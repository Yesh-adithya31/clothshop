import { setCartItemsToLocalStorage } from '../utils/localStorage';
import { CartData, CartState } from '../model/CartTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartData>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        setCartItemsToLocalStorage([...state.cartItems]);
      } else {
        setCartItemsToLocalStorage([...state.cartItems, newItem]);
        state.cartItems.push(newItem);
      }

    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(cartItems => cartItems.id !== action.payload);
    }
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
