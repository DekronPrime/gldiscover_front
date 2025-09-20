"use client";

import ArrowButton from "@/src/components/common/ArrowButton";
import MovieCard from "@/src/components/common/MediaCard";
import { motion } from "framer-motion";
import { useState } from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface MovieCarouselProps {
  movies: Movie[];
  itemsPerPage?: number;
  mode?: "light" | "dark";
}

export default function MovieCarousel({
  movies,
  itemsPerPage = 4,
  mode = "light",
}: MovieCarouselProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-evenly">
        <ArrowButton
          onClick={prevPage}
          disabled={page === 0}
          direction="left"
        />

        <div className="overflow-hidden w-11/12">
          <motion.div
            className="flex"
            animate={{ x: `-${page * movies.length}%` }}
            transition={{ type: "tween", duration: 0.45 }}
            style={{ width: `${totalPages * 100}%` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * itemsPerPage;
              const pageMovies = movies.slice(start, start + itemsPerPage);

              return (
                <div
                  key={pageIndex}
                  className="grid gap-4 w-full"
                  style={{
                    gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                  }}
                >
                  {pageMovies.map((movie) => (
                    <MovieCard
                      id={movie.id}
                      key={movie.id}
                      posterPath={movie.poster_path}
                      title={movie.title}
                      voteAverage={movie.vote_average}
                      voteCount={movie.vote_count}
                      mode={mode}
                    />
                  ))}
                </div>
              );
            })}
          </motion.div>
        </div>

        <ArrowButton
          onClick={nextPage}
          disabled={page >= totalPages - 1}
          direction="right"
        />
      </div>

      <div className="flex gap-3 items-center justify-center w-1/3 mx-auto">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-3 rounded-full w-20 transition-all ${
              i === page
                ? mode === "light"
                  ? "bg-light"
                  : "bg-black"
                : "bg-gray-600/50"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
