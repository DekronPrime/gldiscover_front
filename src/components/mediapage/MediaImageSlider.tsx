import { MediaImage } from "@/src/types/type";
import Image from "next/image";
import React, { FC, useState } from "react";

import Eye from "@/public/icons/eye-light.png";

interface MediaImageSliderProps {
  images: MediaImage[];
}

const MediaImageSlider: FC<MediaImageSliderProps> = ({
  images,
}: MediaImageSliderProps) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const thumbUrl = "https://image.tmdb.org/t/p/w300";
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const active = images[activeIndex];

  return (
    <div className="flex flex-col gap-6">
      <div
        className="relative w-full h-[600] rounded-2xl overflow-hidden shadow-lg"
        style={{ aspectRatio: active.aspect_ratio }}
      >
        <Image
          src={baseUrl + active.file_path}
          alt={`Movie still ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex justify-between gap-4">
        {images.map((img, index) => (
          <button
            key={img.file_path}
            onClick={() => setActiveIndex(index)}
            className="relative flex-1 rounded-xl overflow-hidden group"
            style={{ aspectRatio: img.aspect_ratio }}
          >
            <Image
              src={thumbUrl + img.file_path}
              alt={`Preview ${index + 1}`}
              fill
              className="object-cover"
            />

            <div
              className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity
              ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <Image src={Eye} alt="Eye icon" width={50} height={50} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediaImageSlider;
