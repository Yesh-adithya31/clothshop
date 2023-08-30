"use client";
import React, { useState } from "react";
import { QrReader, OnResultFunction } from "react-qr-reader";
import { useRouter } from "next/navigation";

const QRScannerComponent: React.FC = () => {
  const router = useRouter();

  const handleResult: OnResultFunction = (result: any) => {
    if (result) {
      router.push(`/details/${result.text.split("/")[4]}`);
    }
  };

  const handleError = (error: any) => {
    console.error("Error scanning QR code:", error);
  };

  const videoConstraints = {
    facingMode: "environment", // or 'user' for front camera
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen w-full md:hidden">
      <div className="mx-auto p-4 w-full">
        <h1 className="text-black font-bold text-xl flex justify-center">QR Scanner</h1>
        <div className="rounded-lg p-1 mx-1 w-full">
          <QrReader
            scanDelay={300}
            onResult={handleResult}
            className={""}
            // videoStyle={{ width: '100%' }}
            constraints={videoConstraints}
          />
          <div className="overlay absolute inset-20 pt-5 flex items-center justify-center">
            <img
              src="/images/scaneframe.png"
              alt="Overlay"
              className="overlay-image h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScannerComponent;
