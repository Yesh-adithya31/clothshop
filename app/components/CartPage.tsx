import React from "react";
import CartItem from "./CartItem";

interface CartData {
  id: number;
  name: string;
  price: number;
}

const mockCartItems: CartData[] = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  // Add more items as needed
];

const CartPage: React.FC = () => {
  return (
    <div className="mx-auto w-full p-5 bg-white md:hidden ">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {mockCartItems.map((item) => (
          <CartItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row mt-2 md:mt-0 justify-center">
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 md:px-8 focus:outline-none hover:bg-indigo-600 rounded mb-2 sm:mb-0 sm:mr-2">
          Add to Cart
        </button>
        <button className="text-indigo-500 border-2 py-2 px-6 md:px-8 focus:outline-none hover:text-indigo-600 rounded">
          Next Product
        </button>
      </div>
    </div>
  );
};

export default CartPage;
