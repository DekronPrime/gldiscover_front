import Image from "next/image";
import React from "react";
import Star from "@/public/icons/star-light.png";

type MediaRateProps = {
  vote_average: number;
  vote_count: number;
};

const MediaRate: React.FC<MediaRateProps> = ({
  vote_average = 0,
  vote_count = 0,
}) => {
  return (
    <div className="flex items-center justify-start gap-6">
      <div className="inline-flex gap-3">
        <span className="font-londonTwoRegular text-5xl">
          {vote_average.toFixed(1)}
        </span>
        <Image
          src={Star}
          alt="Star icon"
          width={50}
          height={50}
          draggable="false"
        />
      </div>
      <span className="font-londonBetweenRegular text-4xl">
        ({vote_count} Votes)
      </span>
    </div>
  );
};

export default MediaRate;
