import React from "react";
import { CartData } from "../../model/CartTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeItem } from "../../redux/cartSlice";
import { Product } from "../../model/Product";
import { setCartItemsToLocalStorage } from "../../utils/localStorage";

interface CartItemProps {
  cart: CartData;
}

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItemsToLocalStorage(updatedCartItems);
  };

  return (
    <div className="md:hidden flex items-center border-2 border-gray-300 p-2 w-full mt-5 bg-white rounded-lg">
      <div className="flex-shrink-0  flex items-center justify-center mr-4">
        <img
          className="w-20 h-20 object-cover rounded-lg"
          src={cart.imgurl}
          width={500}
          height={500}
          alt="Product Image"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-purple-800 whitespace-pre-line">
          {cart.name}
        </h3>
        <p className="text-gray-500">LKR. {cart.price.toFixed(2)}</p>
      </div>
      <div className="flex-grow">
        <h3 className="text-md font-small text-black">Qty</h3>
        <p className="text-gray-500">{cart.quantity}</p>
      </div>
      <button
        className="text-red-500 font-semibold"
        onClick={() => handleRemoveFromCart(cart.id)}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;

// import React from "react";
// import Link from "next/link";

// const CartItem = ({item}) => {

// }
