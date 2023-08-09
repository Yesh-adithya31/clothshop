"use client"
import { useEffect, useRef } from 'react';

const QRScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const constraints = { video: true };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((error) => {
        console.error('Error accessing webcam:', error);
      });
  }, []);

  const handleVideoStream = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        // Use a QR code library (like ZXing) to decode the imageData and extract QR code content
        // Handle the decoded content as needed
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} />
      <button onClick={handleVideoStream}>Scan QR Code</button>
    </div>
  );
};

export default QRScanner;







  


