import React from "react";
import CartItem from "./CartItem";
import { CartState } from "../../model/CartTypes";
import { useRouter } from "next/navigation";

const CartPage: React.FC<CartState> = ({ cartItems }) => {
  const router = useRouter();

  return (
    <div className="mx-auto w-full h-screen p-5 bg-white md:hidden ">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cart={item} />)
        ) : (
          <>
            <div className="flex items-center border-gray-300 p-5 w-full mt-5 bg-gray-300 rounded">
              <p className="text-gray-600 text-xl mb-4">
                There is no cart items.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="bg-white p-4 fixed bottom-20 left-0 right-0 shadow-lg">
        <div className="flex justify-center">
          <button className="bg-indigo-700 text-white font-bold px-7 py-2 rounded-lg" >Checkout</button>
          <button className="bg-indigo-700 text-white font-bold px-7 py-2 rounded-lg ml-4" onClick={() => router.push("/")}>Add Another</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
