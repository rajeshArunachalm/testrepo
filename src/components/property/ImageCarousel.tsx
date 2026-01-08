"use client";

import { ChevronLeft, ChevronRight, Grid3x3, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function ImageCarousel({
  images,
  startIndex,
  onClose,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setShowThumbnails(false);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/80">
        <div className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="flex-1 flex items-center justify-center relative">
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors bg-black/50 p-3 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <Image
          fill={true}
          src={images[currentIndex]}
          alt={`Property ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors bg-black/50 p-3 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Grid */}
      {showThumbnails && (
        <div className="absolute inset-0 bg-black/95 flex items-center justify-center p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl">
            {images.map((img, index) => (
              // biome-ignore lint/a11y/noStaticElementInteractions: --
              // biome-ignore lint/a11y/useKeyWithClickEvents: --
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: --
                key={index}
                onClick={() => goToImage(index)}
                className={`cursor-pointer border-2 ${
                  index === currentIndex
                    ? "border-amber-500"
                    : "border-transparent"
                } hover:border-amber-500 transition-colors`}
              >
                <Image
                  src={img}
                  fill={true}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
