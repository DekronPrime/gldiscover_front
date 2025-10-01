import Image from "next/image";
import React, { FC } from "react";

import ImagesLight from "@/public/icons/images-light.png";
import ImagesAccent from "@/public/icons/images-accent.png";
import VideosLight from "@/public/icons/videos-light.png";
import VideosAccent from "@/public/icons/videos-accent.png";
import Link from "next/link";

interface MediaResourceCardProps {
  resourceType: "image" | "video";
  resourceCount: number;
}

const MediaResourceCard: FC<MediaResourceCardProps> = ({
  resourceType,
  resourceCount,
}: MediaResourceCardProps) => {
  return (
    <Link
      href={"#"}
      className="flex justify-center items-center h-[200] w-full bg-black/50 hover:bg-black/70 transition-all duration-200 rounded-2xl group relative"
    >
      <div className="inline-flex items-center gap-6">
        <Image
          src={resourceType === "image" ? ImagesLight : VideosLight}
          alt="Resource light icon"
          width={100}
          height={100}
          draggable="false"
          className="transition-opacity duration-200 group-hover:opacity-0"
        />
        <Image
          src={resourceType === "image" ? ImagesAccent : VideosAccent}
          alt="Resource light icon"
          width={100}
          height={100}
          draggable="false"
          className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
        />

        <span className="text-light font-exo2Bold font-bold text-4xl uppercase transition-all d group-hover:text-accent">
          {resourceCount === 0
            ? "NO"
            : resourceCount < 100
            ? resourceCount
            : "99+"}{" "}
          {resourceCount === 1 ? resourceType + "s" : resourceType}s{" "}
        </span>
      </div>
    </Link>
  );
};

export default MediaResourceCard;
