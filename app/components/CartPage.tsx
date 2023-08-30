import React,{useRef} from "react";
import CartItem from "./CartItem";
import { CartState } from "../../model/CartTypes";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios"
import { clearCart } from "../../utils/localStorage";

 
const CartPage: React.FC<CartState> = ({ cartItems }) => {
  const router = useRouter();
  const handleCheckout = () => {
    const values = cartItems.map(item => item.id.toString());
    axios.post('/product/getCheckoutURL', { values })
    .then(response => {
      console.log('Checkout response:', response.data.url);
      router.push(response.data.url);
      clearCart();
    })
    .catch(error => {
      console.error('Checkout failed:', error);
    });
  };


  return (
    <div className="mx-auto w-full h-screen p-5 bg-white md:hidden ">
      <h1 className="text-2xl font-bold mb-4 text-black">Shopping Cart</h1>
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

      <div className="bg-white p-4 fixed bottom-0 left-0 right-0">
        <div className="flex justify-center">
          <button
            className="bg-indigo-700 text-white font-bold px-7 py-2 rounded-lg"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button
            className="bg-indigo-700 text-white font-bold px-7 py-2 rounded-lg ml-4"
            onClick={() => router.push("/")}
          >
            Add Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
