"use client";

import ArrowButton from "@/src/components/common/ArrowButton";
import MovieCard from "@/src/components/common/MediaCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface MovieCarouselProps {
  movies: Movie[];
  mediaType: "movie" | "tv";
  visibleCount?: number;
  step?: number;
  mode?: "light" | "dark";
}

const GAP = 16;

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  mediaType,
  visibleCount = 4,
  step = 4,
  mode = "light",
}) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.offsetWidth;
      const singleWidth =
        (totalWidth - GAP * (visibleCount - 1)) / visibleCount;
      setCardWidth(singleWidth);
    }
  }, [visibleCount]);

  const maxIndex = Math.max(movies.length - visibleCount, 0);
  const totalPages = Math.ceil(movies.length / visibleCount);

  const next = () => setIndex((p) => Math.min(p + step, maxIndex));
  const prev = () => setIndex((p) => Math.max(p - step, 0));

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center justify-evenly w-full">
        <ArrowButton onClick={prev} disabled={index === 0} direction="left" />

        <div className="overflow-hidden w-11/12" ref={containerRef}>
          <motion.div
            className="flex"
            style={{ gap: `${GAP}px` }}
            animate={{ x: -(index * (cardWidth + GAP)) }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                }}
              >
                <MovieCard
                  id={movie.id}
                  mediaType={mediaType}
                  posterPath={movie.poster_path}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  voteCount={movie.vote_count}
                  mode={mode}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <ArrowButton
          onClick={next}
          disabled={index >= maxIndex}
          direction="right"
        />
      </div>

      <div className="flex gap-3 items-center justify-center w-1/3 mx-auto">
        {Array.from({ length: totalPages }).map((_, i) => {
          const startIndex = i * visibleCount;
          const active =
            index >= startIndex && index < startIndex + visibleCount;
          return (
            <button
              key={i}
              onClick={() => setIndex(startIndex)}
              className={`h-3 rounded-full w-20 transition-all ${
                active
                  ? mode === "light"
                    ? "bg-light"
                    : "bg-black"
                  : "bg-gray-600/50"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
