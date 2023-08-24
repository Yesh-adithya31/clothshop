export interface CartData {
    id: number;
    name: string;
    imgurl: string;
    price: number;
    quantity: number;
    maxQty: number;
  }
  
  export interface CartState {
    cartItems: CartData[];
  }
  
  export const ADD_TO_CART = "ADD_TO_CART";
  export const REMOVE_FROM_CART = "REMOVE_FROM_CART";