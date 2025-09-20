import Image, { StaticImageData } from "next/image";
import React from "react";

import ShowAllLight from "@/public/icons/show-all-light.png";
import ShowAllDark from "@/public/icons/show-all-dark.png";

interface MovieCarouselTitleProps {
  title: string;
  icon: StaticImageData;
  mode?: "light" | "dark";
}

const MovieCarouselTitle: React.FC<MovieCarouselTitleProps> = ({
  title,
  icon,
  mode = "light",
}) => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div className={`inline-flex gap-4 items-center`}>
        <Image src={icon} alt="Icon" width={70} height={70} draggable="false" />
        <h1
          className={`font-exo2Bold font-bold text-5xl leading-[1.1] ${
            mode === "light" ? `text-light` : `text-black`
          }`}
        >
          {title}
        </h1>
      </div>
      <button
        className={`inline-flex gap-4 items-center border-2 border-transparent rounded-lg py-3 px-4 transition-all ${
          mode === "light"
            ? `text-light hover:border-light`
            : `text-black hover:border-black`
        } `}
      >
        <Image
          src={mode === "light" ? ShowAllLight : ShowAllDark}
          alt="Icon"
          width={40}
          height={40}
          draggable="false"
        />
        <span className="font-exo2Semibold font-semibold text-4xl leading-[1.1]">
          Show All
        </span>
      </button>
    </div>
  );
};

export default MovieCarouselTitle;
