// import Image from "next/image";
// import React from "react";

// interface MovieCardProps {
//   posterPath: string;
//   title: string;
//   voteAverage: number;
//   voteCount: number;
// }

// const MovieCard: React.FC<MovieCardProps> = ({
//   posterPath = null,
//   title = "Movie",
//   voteAverage = 0.0,
//   voteCount = 0,
// }) => {
//   return (
//     <div className="flex flex-col justify-center gap-2">
//       <Image
//         src={`https://image.tmdb.org/t/p/original${posterPath}`}
//         alt="Movie card"
//         width={400}
//         height={683}
//         draggable="false"
//         className="rounded-lg"
//       />
//       <h3 className="font-agenorNeueRegular text-2xl text-balance line-clamp-2 text-ellipsis leading-[1.3] text-center">
//         {title}
//       </h3>
//     </div>
//   );
// };

// export default MovieCard;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  id: number;
  posterPath?: string | null;
  title?: string;
  voteAverage?: number;
  voteCount?: number;
  mode?: "light" | "dark";
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  posterPath = null,
  title = "Movie",
  mode = "light",
}) => {
  const src = posterPath
    ? `https://image.tmdb.org/t/p/original${posterPath}`
    : "/placeholder.jpg";

  return (
    <Link href={`media/${id}`}>
      <div className="flex flex-col items-center gap-3 group hover:cursor-pointer">
        <div
          className="relative w-full rounded-lg overflow-hidden"
          style={{ aspectRatio: "2 / 3" }}
        >
          <Image
            src={src}
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
