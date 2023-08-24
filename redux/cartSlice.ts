import { setCartItemsToLocalStorage } from '../utils/localStorage';
import { CartData, CartState } from '../model/CartTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useRouter } from "next/navigation";
import axios from 'axios'

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
    },
    checkout: (state) => {
      const router = useRouter();
      const values = state.cartItems.map(item => item.id.toString());
      axios.post('http://18.136.12.149:8080/product/getCheckoutURL', { values })
        .then(response => {
          console.log('Checkout response:', response.data);
          router.push(response.data)
        })
        .catch(error => {
          console.error('Checkout failed:', error);
        });
    },
  },
});

export const { addToCart, removeItem, checkout } = cartSlice.actions;
export default cartSlice.reducer;
