'use client'
import React, { useState } from "react";
import QRScanner from "../app/components/QRScanner";

const Page: React.FC = () => {
  return (
    <div className="flex flex-wrap h-screen md:hidden">
      <QRScanner />
    </div>
  );
};

export default Page;
