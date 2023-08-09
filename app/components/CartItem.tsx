import React from "react";
import Image from "next/image";

interface CartItemProps {
  name: string;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price }) => {
  return (
    <div className="md:hidden flex items-center border-2 border-gray-300 p-5 w-full mt-5 bg-white rounded">
      <div className="flex-shrink-0  flex items-center justify-center mr-4">
        <Image
          className="w-20 h-20 object-cover rounded-lg"
          src="/image.jpg"
          width={500}
          height={500}
          alt="Product Image"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>
      <button className="text-red-500 font-semibold">
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
