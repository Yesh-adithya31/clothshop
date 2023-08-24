"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";

const QRScanner: React.FC = () => {
  const router = useRouter();
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scannerActive, setScannerActive] = useState<boolean>(false);

  useEffect(() => {
    if (scannerActive) {
      const scanner = new Html5QrcodeScanner(
        "reader",
        {
          qrbox: {
            width: 250,
            height: 250,
          },
          fps: 5,
        },
        false
      );
      scanner.render(success, error);

      return () => {
        scanner.clear();
      };
    }
    function success(result: string) {
      router.push(`/details/${result.split("/")[4]}`);
      // console.log(result.split("/")[4]);
      // setScanResult(result);
      setScannerActive(false);
    }
  }, [scannerActive]);

  function error(err: any) {
    console.warn(err);
  }

  const startScanning = () => {
    setScannerActive(true);
  };

  const endScanning = () => {
    setScanResult(null);
    setScannerActive(false);
  };

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="flex items-center justify-center h-screen w-full md:hidden">
        <div className="mx-auto bg-white p-8 shadow-md h-screen w-full">
          <div className="pt-24">
            {scanResult ? (
              <div className="w-80 h-64 bg-gray-200 mb-4 mx-auto rounded-lg text-green-600">
                Success: <a href={"https://" + scanResult}>{scanResult}</a>
              </div>
            ) : (
              <div
                id="reader"
                className="w-80 h-64 bg-gray-200 mx-auto rounded-lg"
              ></div>
            )}
          </div>
          <div>
            {!scanResult && (
              <button
                onClick={startScanning}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full block w-full mx-auto mt-4"
              >
                SCAN NOW
              </button>
            )}
            {scanResult && (
              <button
                onClick={endScanning}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded block mx-auto mt-4"
              >
                End Scan
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QRScanner;
