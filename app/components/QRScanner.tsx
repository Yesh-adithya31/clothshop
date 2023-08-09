"use client"
import React, { useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [result, setResult] = useState('');

  const startScanner = async () => {
    const codeReader = new BrowserMultiFormatReader();
    try {
      const videoInputDevices = await codeReader.listVideoInputDevices();
      if (videoInputDevices.length > 0 && videoRef.current) {
        const constraints = {
          video: {
            deviceId: videoInputDevices[0].deviceId,
          },
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
        codeReader.decodeFromVideoDevice(videoInputDevices[0].deviceId, videoRef.current, (result, error) => {
          if (result) {
            setResult(result.getText());
          }
          if (error) {
            console.error(error);
          }
        });
      } else {
        console.error('No video input devices found.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} autoPlay playsInline />
      <p>Scanned Result: {result}</p>
      <button onClick={startScanner}>Start Scanner</button>
    </div>
  );
};

export default QRScanner;
