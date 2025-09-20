"use client";

import Play from "@/public/icons/play-light.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import MediaRate from "../common/MediaRate";

interface BannerCarouselProps {
  slides: {
    id: number;
    backdrop_path: string;
    alt?: string;
    title: string;
    overview: string;
    media_type: string;
    genres: { id: number; name: string }[];
    release_date: string;
    vote_average: number;
    vote_count: number;
  }[];
  interval?: number;
  initialIndex?: number;
}

export default function BannerCarousel({
  slides,
  interval = 10000,
  initialIndex = Math.floor(slides.length / 2),
}: BannerCarouselProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [slides.length]);

  // --- Mobile Touch ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (endX - startX > 50) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[650px] relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
              alt={slide.alt || slide.title}
              fill
              className="object-cover"
              draggable="false"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/75 from-0% via-black/75 via-30% to-black/0 to-100% flex justify-between p-6 pb-12"
              draggable="false"
            >
              <div className="relative max-w-[45%] h-full inline-flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="font-agenorNeueRegular text-6xl text-balance line-clamp-2 text-ellipsis leading-[1.1]">
                    {slide.title}
                  </h1>
                  <span className="text-3xl font-londonBetweenRegular">
                    {slide.release_date}
                  </span>
                </div>
                <div>
                  <p
                    className="line-clamp-5 text-ellipsis text-balance  leading-[1.3] font-nunitoRegular text-2xl"
                    title={slide.overview}
                  >
                    {slide.overview}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-4">
                    {slide.genres.map((genre) => (
                      <Chip path={`/media?genre=${genre.id}`} key={genre.id}>
                        {genre.name}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <MediaRate
                    vote_average={slide.vote_average}
                    vote_count={slide.vote_count}
                  />
                </div>
              </div>
              <div className="relative max-w-[50%] h-full inline-flex flex-col justify-between">
                <Button
                  variant="trailer"
                  icon={
                    <Image
                      src={Play}
                      alt="Play icon"
                      width={50}
                      height={50}
                      draggable="false"
                    />
                  }
                  size="lg"
                  className="group w-fit ml-auto flex items-center overflow-hidden transition-all duration-300"
                >
                  <span
                    className="opacity-0 translate-x-2 max-w-0 
      group-hover:opacity-100 group-hover:translate-x-0 group-hover:max-w-xs
      transition-all duration-300
      whitespace-nowrap"
                  >
                    Play Trailer
                  </span>
                </Button>
                <Button variant="learnmore" size="xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex lg:gap-3 gap-2 w-1/2 sm:w-1/3">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 flex-1 rounded-full transition-all duration-500 hover:cursor-pointer border-2 ${
              idx === current ? "bg-white" : "bg-black/50 hover:bg-black/75"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
