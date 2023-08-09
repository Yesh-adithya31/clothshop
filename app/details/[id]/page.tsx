import React from "react";
import Card from "../../components/Card";

const products = [
  {
    title: "V-NECK BUTTON DOWN TOP",
    image: "/image.jpg",
    price: 29.99,
    sizes: ["S", "M", "L"],
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Page = () => {
  return (
    <div className="flex flex-wrap h-screen">
        <Card product={products[0]} />
    </div>
  );
};

export default Page;
