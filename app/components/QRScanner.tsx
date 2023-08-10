import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QRScanner() {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    }, false);
    scanner.render(success, error);
    function success(result: string) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err: any) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="container mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4">Scan here</h1>
      {scanResult ? (
        <div className="text-green-600">
          Success: <a href={"http://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader" className="w-80 h-64"></div>
      )}
    </div>
  );
}

export default QRScanner;