"use client";

import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface ImageGalleryProps {
  images?: string[];
}

const defaultImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
];

export default function ImageGallery({
  images = defaultImages,
}: ImageGalleryProps) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Use default images if provided images array is empty
  const displayImages = images && images.length > 0 ? images : defaultImages;
  const imageCount = displayImages.length;
  const showViewAll = imageCount > 5;

  const openCarousel = (index: number) => {
    setStartIndex(index);
    setCarouselOpen(true);
  };

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4">
          {/* Mobile View - Single image with overlay */}
          <div className="block md:hidden">
            {/** biome-ignore lint/a11y/noStaticElementInteractions: -- */}
            {/** biome-ignore lint/a11y/useKeyWithClickEvents: -- */}
            <div
              className="relative h-64 cursor-pointer overflow-hidden"
              onClick={() => openCarousel(0)}
            >
              <Image
                fill={true}
                src={displayImages[0]}
                alt="Property"
                className="w-full h-full object-cover"
              />
              {showViewAll && (
                <div className="absolute bottom-2 right-2 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium">
                  View all {displayImages.length} Images
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            {imageCount <= 4 ? (
              <div
                className={`grid gap-2 h-64 lg:h-96 ${
                  imageCount === 1
                    ? "grid-cols-1"
                    : imageCount === 2
                      ? "grid-cols-2"
                      : imageCount === 3
                        ? "grid-cols-3"
                        : "grid-cols-2 grid-rows-2"
                }`}
              >
                {displayImages.map((img, index) => (
                  // biome-ignore lint/a11y/noStaticElementInteractions: --
                  // biome-ignore lint/a11y/useKeyWithClickEvents: --
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: --
                    key={index}
                    className="relative cursor-pointer overflow-hidden group"
                    onClick={() => openCarousel(index)}
                  >
                    <Image
                      fill={true}
                      src={img}
                      alt={`Property ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 h-64 lg:h-96">
                {/** biome-ignore lint/a11y/noStaticElementInteractions: -- */}
                {/** biome-ignore lint/a11y/useKeyWithClickEvents: -- */}
                <div
                  className="col-span-2 row-span-2 cursor-pointer relative overflow-hidden group"
                  onClick={() => openCarousel(0)}
                >
                  <Image
                    fill={true}
                    src={displayImages[0]}
                    alt="Property"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Small Images */}
                {displayImages.slice(1, 4).map((img, index) => (
                  // biome-ignore lint/a11y/noStaticElementInteractions: --
                  // biome-ignore lint/a11y/useKeyWithClickEvents: --
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: --
                    key={index}
                    className="cursor-pointer relative overflow-hidden group"
                    onClick={() => openCarousel(index + 1)}
                  >
                    <Image
                      src={img}
                      fill={true}
                      alt={`Property ${index + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}

                {/** biome-ignore lint/a11y/noStaticElementInteractions: -- */}
                {/** biome-ignore lint/a11y/useKeyWithClickEvents: -- */}
                <div
                  className="cursor-pointer relative overflow-hidden group"
                  onClick={() => openCarousel(4)}
                >
                  <Image
                    fill={true}
                    src={
                      displayImages[4] ??
                      displayImages[displayImages.length - 1]
                    }
                    alt="Property 5"
                    className="w-full h-full object-cover"
                  />
                  {showViewAll ? (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        View all Images
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {carouselOpen && (
        <ImageCarousel
          images={displayImages}
          startIndex={startIndex}
          onClose={() => setCarouselOpen(false)}
        />
      )}
    </>
  );
}
