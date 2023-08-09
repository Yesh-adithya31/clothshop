import React from "react";
import QRScanner from "../app/components/QRScanner";

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
    <div className="flex flex-wrap h-screen ">
    <div>
      <h1>QR Code Scanner</h1>
      <QRScanner />
    </div>
    </div>
  );
};

export default Page;
