import {CartData} from '../model/CartTypes';

export const isBrowser = (): boolean => {
    return typeof window !== 'undefined'
  }
  
  export const nextLocalStorage = (): Storage | void => {
    if (isBrowser()) {
      return window.localStorage
    }
  }

export const getCartItemsFromLocalStorage = (): CartData[] => {
        const cartItems = nextLocalStorage()?.getItem('cartItems');
        return cartItems ? JSON.parse(cartItems) : [];
  };
  
export const setCartItemsToLocalStorage = (items: CartData[]): void => {
        nextLocalStorage()?.setItem('cartItems', JSON.stringify(items)); 
};

export const clearCart = () =>{
  nextLocalStorage()?.setItem('cartItems', JSON.stringify([])); 
}