"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import MediaCarouselSection from "../components/common/MediaCarouselSection";
import ExternalLinks from "../components/mediapage/ExternalLinks";
import MediaBanner from "../components/mediapage/MediaBanner";
import {
  getMediaCast,
  getMediaDirector,
  getMediaExternalLinks,
  getMediaImages,
  getMediaImagesCount,
  getMediaInfo,
  getMediaKeywords,
  getMediaRecommendations,
  getMediaTrailer,
  getMediaVideosCount,
} from "../configs/api/tmdb";
import {
  Actor,
  Keyword,
  MediaDirector,
  MediaExternalLinks,
  MediaImage,
  MediaProps,
  MediaVideo,
} from "../types/type";

import Tmdb from "@/public/logo/tmdb-logo.svg";
import Image from "next/image";
import MediaRate from "../components/common/MediaRate";
import ColumnInfo from "../components/mediapage/ColumnInfo";
import ProductionCompanies from "../components/mediapage/ProductionCompanies";

import Country from "@/public/icons/country-light.png";
import Language from "@/public/icons/language-light.png";
import TopCast from "@/public/icons/top-cast-light.png";
import Stats from "@/public/icons/stats-light.png";

import DirectorCard from "../components/mediapage/DirectorCard";
import { formatCurrency } from "../utils/format";

import Similar from "@/public/icons/similar-light.png";
import Keywords from "@/public/icons/keywords-light.png";
import Media from "@/public/icons/media-light.png";

import MovieCarouselTitle from "../components/common/MediaCarouselTitle";
import ActorCarousel from "../components/mediapage/ActorCarousel";
import KeywordList from "../components/mediapage/KeywordList";
import MediaImageSlider from "../components/mediapage/MediaImageSlider";
import MediaResourceCard from "../components/mediapage/MediaResourceCard";

interface MediaPageProps {
  id: number;
  mediaType: "movie" | "tv";
}

const MediaPage: React.FC<MediaPageProps> = ({ id, mediaType }) => {
  const [media, setMedia] = useState<MediaProps>();
  const [mediaExternalLinks, setMediaExternalLinks] =
    useState<MediaExternalLinks>();
  const [mediaCast, setMediaCast] = useState<Actor[]>([]);
  const [mediaDirector, setMediaDirector] = useState<
    MediaDirector | undefined
  >();
  const [mediaRecommendations, setMediaRecommendations] = useState<any[]>([]);
  const [mediaKeywords, setMediaKeywords] = useState<Keyword[]>([]);
  const [mediaImages, setMediaImages] = useState<MediaImage[]>([]);
  const [mediaImagesCount, setMediaImagesCount] = useState<number>(0);
  const [mediaVideosCount, setMediaVideosCount] = useState<number>(0);
  const [mediaTrailer, setMediaTrailer] = useState<MediaVideo>();

  useEffect(() => {
    Promise.all([
      getMediaInfo(mediaType, id),
      getMediaExternalLinks(mediaType, id),
      getMediaCast(mediaType, id, 20),
      getMediaDirector(mediaType, id),
      getMediaRecommendations(mediaType, id),
      getMediaKeywords(mediaType, id),
      getMediaImages(mediaType, id, 6),
      getMediaTrailer(mediaType, id),
      getMediaImagesCount(mediaType, id),
      getMediaVideosCount(mediaType, id),
    ]).then(
      ([
        media,
        mediaExternalLinks,
        mediaCast,
        mediaDirector,
        mediaRecommendations,
        mediaKeywords,
        mediaImages,
        mediaTrailer,
        mediaImagesCount,
        mediaVideosCount,
      ]) => {
        setMedia(media);
        setMediaExternalLinks(mediaExternalLinks);
        setMediaCast(mediaCast);
        setMediaDirector(mediaDirector);
        setMediaRecommendations(mediaRecommendations.results);
        setMediaKeywords(mediaKeywords);
        setMediaImages(mediaImages.backdrops);
        setMediaTrailer(mediaTrailer);
        setMediaImagesCount(mediaImagesCount);
        setMediaVideosCount(mediaVideosCount);
      }
    );
  }, []);

  return (
    <div className="flex flex-col">
      <section className="py-6">
        {media ? (
          <div className="w-11/12 mx-auto flex flex-col gap-6">
            <Breadcrumb
              items={[
                {
                  label: mediaType === "movie" ? "Movies" : "TV Shows",
                  href: mediaType === "movie" ? "/movies" : "/tv",
                },
                ...(media.belongs_to_collection
                  ? [
                      {
                        label: media.belongs_to_collection.name,
                        href: `/collection/${media.belongs_to_collection.id}`,
                      },
                    ]
                  : []),
                { label: media.title },
              ]}
            />

            <MediaBanner media={media} trailer={mediaTrailer} />

            <div className="flex justify-between items-center">
              <div className="pr-4 mr-4 border-r border-light">
                <Image
                  src={Tmdb}
                  alt="Tmdb logo"
                  width={140}
                  height={60}
                  draggable="false"
                  priority
                />
              </div>

              {media.vote_count > 0 && (
                <MediaRate
                  vote_average={media.vote_average}
                  vote_count={media.vote_count}
                />
              )}
              {mediaExternalLinks && (
                <ExternalLinks
                  externalLinks={mediaExternalLinks}
                  homepage={media.homepage}
                />
              )}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section className="py-6">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between gap-9">
            <div className="w-1/5">
              <DirectorCard director={mediaDirector} />
            </div>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-3 gap-9">
              <ColumnInfo
                icon={Stats}
                items={[
                  { label: "Budget", value: formatCurrency(media?.budget) },
                  { label: "Revenue", value: formatCurrency(media?.revenue) },
                  { label: "Popularity", value: media?.popularity },
                  { label: "Status", value: media?.status },
                ]}
              />
              <ColumnInfo
                icon={Country}
                items={[
                  {
                    label: "Origin Country",
                    value: media?.origin_country,
                  },
                  {
                    label: "Production Countries",
                    value: media?.production_countries.map(
                      (country) => country.iso_3166_1
                    ),
                  },
                ]}
              />
              <ColumnInfo
                icon={Language}
                items={[
                  {
                    label: "Original Language",
                    value: media?.original_language,
                  },
                  {
                    label: "Spoken Languages",
                    value: media?.spoken_languages.map(
                      (language) => language.iso_639_1
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 my-6 bg-light">
        <ProductionCompanies
          productionCompanies={media?.production_companies}
        />
      </section>
      {mediaCast.length > 0 && (
        <section className="py-6">
          <div className="flex flex-col gap-5">
            <div className="w-11/12 mx-auto">
              <MovieCarouselTitle
                title={"Top Cast"}
                icon={TopCast}
                expandable={true}
                expandTitle="Full Cast & Crew"
                mode={"light"}
              />
            </div>
            <ActorCarousel actors={mediaCast} />
          </div>
        </section>
      )}
      <section className="py-6 my-6 bg-foreground">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col gap-6">
            <MovieCarouselTitle title="Media" icon={Media} expandable={false} />
            <div className="flex justify-between gap-4">
              <MediaResourceCard
                resourceType="image"
                resourceCount={mediaImagesCount}
              />
              <MediaResourceCard
                resourceType="video"
                resourceCount={mediaVideosCount}
              />
            </div>
            <MediaImageSlider images={mediaImages} />
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col gap-6">
            <MovieCarouselTitle
              title="Keywords"
              icon={Keywords}
              expandable={false}
            />
            <KeywordList keywords={mediaKeywords} />
          </div>
        </div>
      </section>
      {mediaRecommendations.length > 0 && (
        <MediaCarouselSection
          movies={mediaRecommendations}
          mediaType="movie"
          title="More Like This"
          icon={Similar}
          expandable={false}
          mode="light"
        />
      )}
    </div>
  );
};

export default MediaPage;
