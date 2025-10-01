import { getSrc } from "@/src/utils/format";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import Expand from "@/public/icons/expand-light.png";
import Placeholder from "@/public/images/person-placeholder-1.png";

interface DirectorCardProps {
  director:
    | {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        credit_id: string;
        department: string;
        job: string;
      }
    | undefined;
}

const DirectorCard: FC<DirectorCardProps> = ({ director }) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <div
        className="relative flex-shrink-0 h-[400] w-full"
        style={{ aspectRatio: "3 / 4" }}
      >
        <Image
          src={getSrc(director?.profile_path, Placeholder)}
          alt={"Poster"}
          fill
          className="object-cover rounded-t-lg"
          draggable="false"
          priority
        />

        {director?.profile_path && (
          <Link
            href={`https://image.tmdb.org/t/p/original${director.profile_path}`}
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
      <div className="bg-black/50 inline-flex flex-col gap-2 items-center w-full rounded-b-lg px-4 py-2 text-center line-clamp-2 text-ellipsis text-balance">
        <span className="text-2xl font-exo2Bold font-bold">
          {director?.name}
        </span>
        <span className="text-lg font-londonBetweenRegular">
          {director?.job}
        </span>
      </div>
    </div>
  );
};

export default DirectorCard;
