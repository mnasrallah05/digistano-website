"use client";

import { useEffect, useState } from "react";

const isoImages = [
  { src: "/images/iso-45001.png", alt: "ISO 45001" },
  { src: "/images/iso-14001.png", alt: "ISO 14001" },
  { src: "/images/iso-9001.png", alt: "ISO 9001" },
];

export default function IsoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % isoImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl bg-blue-50 p-6 shadow-md">
        <div className="relative h-[360px] md:h-[420px]">
          {isoImages.map((image, index) => (
            <div
              key={image.alt}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {isoImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}