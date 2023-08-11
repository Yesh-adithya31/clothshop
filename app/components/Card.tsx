"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Product from "../../model/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="p-4 w-full bg-white md:hidden">
      <div className="h-full  overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-semibold title-font mb-6">
            {product.title}
          </h2>
          <div className="flex items-center justify-center sm:h-64 md:h-80 mb-6">
            <img
              className=" object-center border-8 border-gray-500 border-opacity-60 rounded-lg"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className=""></div>
          </div>
          <p className="text-base md:text-lg font-medium text-gray-500 mb-2 ">
            {/* LKR {product.price.toFixed(2)} */}
            LKR {product.price}
          </p>
          <div className="mb-2 md:mb-3 ">
            <h3 className="text-gray-500 text-sm md:text-xs tracking-widest title-font mb-1">
              Sizes Available:
            </h3>
            {/* {product.sizes.map((size, index) => ( */}
            <span
              key={product.rating}
              className="inline-block border rounded-full py-1 px-2 text-xs font-semibold text-gray-700 mr-2"
            >
              {product.rating}
            </span>
            {/* ))} */}
          </div>
          <div className=" mb-10 md:mb-3">
            <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
              Details
            </h3>
            <p className="text-sm md:text-base leading-relaxed  ">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row mt-2 md:mt-0 justify-center">
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 md:px-8 focus:outline-none hover:bg-indigo-600 rounded mb-2 sm:mb-0 sm:mr-2"
              onClick={() => router.push("/cart")}
            >
              Add to Cart
            </button>
            <button
              className="text-indigo-500 border-2 py-2 px-6 md:px-8 focus:outline-none hover:text-indigo-600 rounded"
              onClick={() => router.push("/")}
            >
              Next Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
