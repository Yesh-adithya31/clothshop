"use client";
import React from "react";
import { useSelector } from 'react-redux';
import CartPage from "../components/CartPage";
import { RootState } from "../../redux/store";

const Page: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div className="flex flex-wrap h-screen">
      <CartPage cartItems={cartItems} />
    </div>
  );
};

export default Page;
