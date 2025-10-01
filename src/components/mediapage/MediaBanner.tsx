"use client";

import { MediaProps, MediaVideo } from "@/src/types/type";
import Image from "next/image";
import React, { FC, useState } from "react";

import Dot from "@/public/icons/dot-light.png";
import Quote from "@/public/icons/quote-light.png";
import PlayLight from "@/public/icons/play-light.png";
import PlayDark from "@/public/icons/play-dark.png";
import Expand from "@/public/icons/expand-light.png";
import PosterPlaceholder from "@/public/images/poster-placeholder-1.png";
import BackdropPlaceholder from "@/public/images/backdrop-placeholder.png";

import Chip from "../common/Chip";
import Button from "../common/Button";
import Link from "next/link";
import { formatRuntime, getSrc } from "@/src/utils/format";
import TrailerModal from "./TrailerModal";

interface MediaBannerProps {
  media: Partial<MediaProps>;
  trailer: MediaVideo | undefined;
}

const MediaBanner: FC<MediaBannerProps> = ({ media, trailer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-[575] flex overflow-hidden rounded-lg border border-light">
      <div
        className="relative flex-shrink-0 h-[575] min-w-[150] border-r border-light"
        style={{ aspectRatio: "2 / 3" }}
      >
        <Image
          src={getSrc(media.poster_path, PosterPlaceholder)}
          alt={media.title || "Poster"}
          fill
          className="object-cover"
          draggable="false"
          priority
        />

        {media?.poster_path && (
          <Link
            href={`https://image.tmdb.org/t/p/original${media.poster_path}`}
            target="_blank"
          >
            <div className="group absolute inset-0 hover:bg-black/80 hover:cursor-pointer transition-all duration-200 flex justify-center items-center">
              <Image
                src={Expand}
                alt="Expand"
                width={100}
                height={100}
                draggable="false"
                className="transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
        )}
      </div>

      <div className="relative flex-1 h-full">
        <Image
          src={getSrc(media.backdrop_path, BackdropPlaceholder)}
          alt={`${media.title} backdrop`}
          fill
          className="object-cover"
          draggable={false}
          sizes="(max-width: 640px) 100vw, 60vw"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/75 from-0% via-black/70 via-50% to-black/25 to-100% flex flex-col justify-between p-6">
          <div className="inline-flex flex-col gap-2">
            <h1 className="text-5xl font-agenorNeueRegular text-light text-pretty">
              {media.title}
            </h1>
            {media.title !== media.original_title && (
              <h3 className="text-3xl font-agenorNeueRegular text-accent">
                {media.original_title}
              </h3>
            )}
          </div>

          <div className="inline-flex flex-col gap-4">
            <div className="inline-flex items-center">
              <span className="font-exo2Regular text-2xl text-light">
                {media.release_date}
              </span>
              <Image
                src={Dot}
                alt="Dot icon"
                width={50}
                height={50}
                draggable="false"
                className="select-none"
              />
              <span className="font-exo2Regular text-2xl text-light">
                {formatRuntime(media.runtime || 0)}
              </span>
            </div>
            <div className="inline-flex items-center gap-3">
              {media.genres &&
                media.genres.map((genre) => (
                  <Chip path={`/media?genre=${genre.id}`} key={genre.id}>
                    {genre.name}
                  </Chip>
                ))}
            </div>
          </div>

          <div className="inline-flex flex-col gap-4">
            <div className="inline-flex items-center gap-4">
              {media.tagline && (
                <>
                  <Image
                    src={Quote}
                    alt="Quote icon"
                    width={50}
                    height={50}
                    draggable="false"
                    className="select-none"
                  />
                  <span className="font-exo2Regular font-bold text-2xl text-light italic text-balance">
                    {media.tagline}
                  </span>
                </>
              )}
            </div>
            <p className="text-light font-nunitoSemibold font-semibold text-xl line-clamp-4 text-ellipsis leading-[1.3] opacity-90">
              {media.overview}
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            className="group relative w-fit flex items-center overflow-hidden transition-all duration-300 gap-4"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={PlayLight}
              alt="Play Light"
              width={50}
              height={50}
              className="transition-opacity duration-200 group-hover:opacity-0"
            />
            <Image
              src={PlayDark}
              alt="Play Dark"
              width={50}
              height={50}
              className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
            />
            <span className="font-poppinsBold font-bold text-light">
              Play Trailer
            </span>
          </Button>
        </div>
      </div>
      <TrailerModal
        trailer={trailer}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default MediaBanner;
