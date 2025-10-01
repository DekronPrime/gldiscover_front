"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Placeholder from "@/public/images/backdrop-placeholder.png";
import { getSrc } from "@/src/utils/format";

interface MovieCardProps {
  id: number;
  mediaType: "movie" | "tv";
  posterPath?: string | null;
  title?: string;
  voteAverage?: number;
  voteCount?: number;
  mode?: "light" | "dark";
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  mediaType = "movie",
  posterPath = null,
  title = "Movie",
  mode = "light",
}) => {
  return (
    <Link href={`/media/${id}?mediaType=${mediaType}`}>
      <div className="flex flex-col items-center gap-3 group hover:cursor-pointer">
        <div
          className="relative w-full rounded-lg overflow-hidden"
          style={{ aspectRatio: "2 / 3" }}
        >
          <Image
            src={getSrc(posterPath, Placeholder)}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 rounded-lg transition-all"
            draggable={false}
          />
        </div>

        <h3
          className={`font-agenorNeueRegular text-2xl line-clamp-2 text-center text-ellipsis leading-[1.3] transition-all ${
            mode === "light"
              ? `text-light group-hover:text-accent`
              : `text-black`
          }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
