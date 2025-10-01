import { getSrc } from "@/src/utils/format";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import Expand from "@/public/icons/expand-light.png";
import { Actor } from "@/src/types/type";

import Placeholder from "@/public/images/person-placeholder-1.png";

interface ActorCardProps {
  actor: Actor;
}

const ActorCard: FC<ActorCardProps> = ({ actor }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-light p-[2] h-full">
      <div
        className="relative flex-shrink-0 w-full"
        style={{ aspectRatio: "3 / 4", height: "400px" }}
      >
        <Image
          src={getSrc(actor?.profile_path, Placeholder)}
          alt="Poster"
          fill
          className="object-cover rounded-t-lg"
          draggable="false"
          priority
        />

        {actor?.profile_path && (
          <Link
            href={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            target="_blank"
          >
            <div className="group absolute inset-0 hover:bg-black/50 hover:cursor-pointer rounded-t-lg transition-all duration-200 flex justify-center items-center">
              <Image
                src={Expand}
                alt="Expand"
                width={50}
                height={50}
                draggable="false"
                className="transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
        )}
      </div>
      <div className="inline-flex flex-col gap-2 items-center w-full rounded-b-lg px-4 py-2 text-center text-black line-clamp-2 text-ellipsis text-balance">
        <span className="text-2xl font-exo2Bold font-bold">{actor?.name}</span>
        <span className="text-lg font-londonBetweenRegular">
          {actor?.character}
        </span>
      </div>
    </div>
  );
};

export default ActorCard;
