"use client";

import { MediaExternalLinks } from "@/src/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import Imdb from "@/public/logo/imdb-logo.png";
import Wikidata from "@/public/logo/wikidata-logo.png";
import Facebook from "@/public/logo/facebook-logo.png";
import Instagram from "@/public/logo/instagram-logo.png";
import X from "@/public/logo/x-logo.png";
import Button from "../common/Button";

interface ExternalLinksProps {
  externalLinks: MediaExternalLinks;
  homepage: string | null;
}

const ExternalLinks: FC<ExternalLinksProps> = ({ externalLinks, homepage }) => {
  return (
    <div className="inline-flex items-center gap-6 ml-auto">
      {externalLinks.imdb_id ? (
        <Link
          href={`https://www.imdb.com/title/${externalLinks.imdb_id}/`}
          target="_blank"
        >
          <Image
            src={Imdb}
            alt="Imdb logo"
            width={75}
            height={75}
            draggable="false"
            priority
            className="opacity-100 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      ) : null}
      {externalLinks.wikidata_id ? (
        <Link
          href={`https://www.wikidata.org/wiki/${externalLinks.wikidata_id}`}
          target="_blank"
        >
          <Image
            src={Wikidata}
            alt="Wikidata logo"
            width={75}
            height={75}
            draggable="false"
            priority
            className="opacity-100 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      ) : null}
      {externalLinks.facebook_id ? (
        <Link
          href={`https://www.facebook.com/${externalLinks.facebook_id}/`}
          target="_blank"
        >
          <Image
            src={Facebook}
            alt="Facebook logo"
            width={75}
            height={75}
            draggable="false"
            priority
            className="opacity-100 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      ) : null}
      {externalLinks.instagram_id ? (
        <Link
          href={`https://www.instagram.com/${externalLinks.instagram_id}/`}
          target="_blank"
        >
          <Image
            src={Instagram}
            alt="Instagram logo"
            width={75}
            height={75}
            draggable="false"
            priority
            className="opacity-100 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      ) : null}
      {externalLinks.twitter_id ? (
        <Link
          href={`https://x.com/${externalLinks.twitter_id}`}
          target="_blank"
        >
          <Image
            src={X}
            alt="X logo"
            width={75}
            height={75}
            draggable="false"
            priority
            className="opacity-100 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      ) : null}
      {externalLinks.twitter_id ? (
        <Link href={`${homepage}`} target="_blank">
          <div className="pl-6 border-l-2 border-light">
            <Button variant="primary" size="md">
              Homepage
            </Button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default ExternalLinks;
