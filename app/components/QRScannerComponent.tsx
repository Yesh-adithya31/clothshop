import React, { useEffect, useRef } from 'react';
const zxing = require('zxing-js/library'); 

const QRScannerComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const codeReader = new zxing();
    codeReader.listVideoInputDevices().then((videoInputDevices: string | any[]) => {
      // Use the first available video device
      if (videoInputDevices.length > 0) {
        const constraints = { video: { deviceId: videoInputDevices[0].deviceId } };
        codeReader.decodeFromVideoDevice(undefined, videoRef.current, (result: { text: any; }) => {
          console.log('QR Code result:', result.text);
        }, constraints);
      } else {
        console.log('No video input devices available.');
      }
    });

    return () => {
      codeReader.reset();
    };
  }, []);

  return <video ref={videoRef} />;
};

export default QRScannerComponent;
