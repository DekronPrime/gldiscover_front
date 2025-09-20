import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface SocialMediaProps {
  icon: StaticImageData;
  link: string;
  hoverIcon: StaticImageData | string;
}

const SocialMedia: FC<SocialMediaProps> = ({ icon, link, hoverIcon }) => {
  return (
    <Link href={link} className="group relative" target="_blank">
      <Image
        src={icon}
        alt={`${icon} logo`}
        width={75}
        height={75}
        className="transition-opacity duration-200 group-hover:opacity-0"
      />
      <Image
        src={hoverIcon}
        alt={`${icon} logo`}
        width={75}
        height={75}
        className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
      />
    </Link>
  );
};

export default SocialMedia;
