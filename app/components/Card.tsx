"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Product } from "../../model/Product";
import { CartData } from "../../model/CartTypes";
import { addToCart } from "../../redux/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = (item: Product) => {
    const cartItemData: CartData = {
      id: item.id, // Set an appropriate ID
      name: item.name,
      imgurl: item.image_url,
      price: item.price,
      quantity: 1, // Assuming you start with a quantity of 1
      maxQty: item.quantity,
    };
    dispatch(addToCart(cartItemData));
    router.push("/cart");
  };

  return (
    <div className="p-4 w-full bg-white md:hidden">
      <div className="h-full  overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-xl text-black font-semibold title-font mb-6">
            {product.name}
          </h2>
          <div className="flex items-center justify-center sm:h-64 md:h-80 mb-6">
            <img
              className=" object-center border-8 border-gray-500 border-opacity-60 rounded-lg"
              src={product.image_url}
              alt={product.name}
            />
            <div className=""></div>
          </div>
          <p className="text-base md:text-lg font-medium text-gray-500 mb-2 ">
            {/* LKR {product.price.toFixed(2)} */}
            LKR {product.price}
          </p>
          <div className="mb-2 md:mb-3 ">
            <h3 className="text-gray-500 text-sm md:text-xs tracking-widest title-font mb-1">
              Category:
            </h3>
            {/* {product.sizes.map((size, index) => ( */}
            <span
              key={product.category}
              className="inline-block border rounded-full py-1 px-2 text-xs font-semibold text-gray-700 mr-2"
            >
              {product.category}
            </span>
            {/* ))} */}
          </div>
          <div className=" mb-10 md:mb-3">
            <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
              Details
            </h3>
            <p className="text-black text-sm md:text-base leading-relaxed text-justify">
              {product.description}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 fixed bottom-0 left-0 right-0">
          <div className="flex justify-center">
            <button
              className="bg-indigo-700 text-white font-bold px-7 py-2 rounded-lg"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="text-indigo-500 font-bold border-2 py-2 px-6 focus:outline-none hover:text-indigo-600  rounded-lg ml-4"
              onClick={() => router.push("/")}
            >
              Add Another
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
