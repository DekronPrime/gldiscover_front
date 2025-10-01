"use client";

import BannerCarousel from "@/src/components/mainpage/BannerCarousel";

import MovieCategory from "@/public/images/movie-category.webp";
import TVCategory from "@/public/images/tv-show-category.jpg";
import MediaCarouselSection from "../components/common/MediaCarouselSection";
import CategoryCard from "../components/mainpage/CategoryCard";

import NowPlaying from "@/public/icons/now-playing-dark.png";
import Popular from "@/public/icons/popular-light.png";
import TopRated from "@/public/icons/top-rated-light.png";
import Upcoming from "@/public/icons/upcoming-light.png";
import { useEffect, useState } from "react";
import DayWeekToggle from "../components/common/DayWeekToggle";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../configs/api/tmdb";

const MainPage = () => {
  const [term, setTerm] = useState<"day" | "week">("day");
  const [trendingDay, setTrendingDay] = useState<any[]>([]);
  const [trendingWeek, setTrendingWeek] = useState<any[]>([]);
  const [popular, setPopular] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [nowPlaying, setNowPlaying] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      getTrendingMovies("day", 5),
      getTrendingMovies("week", 5),
      getPopularMovies(),
      getTopRatedMovies(),
      getNowPlayingMovies(),
      getUpcomingMovies(),
    ]).then(
      ([
        trendingDay,
        trendingWeek,
        popular,
        topRated,
        nowPlaying,
        upcoming,
      ]) => {
        setTrendingDay(trendingDay.results);
        setTrendingWeek(trendingWeek.results);
        setPopular(popular.results);
        setTopRated(topRated.results);
        setNowPlaying(nowPlaying.results);
        setUpcoming(upcoming.results);
      }
    );
  }, []);

  return (
    <div className="flex flex-col">
      <section className="pt-4 pb-14">
        <div className="w-11/12 mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-exo2Bold text-4xl text-light">
              Trending Movies Of The {term === "day" ? "Day" : "Week"}
            </h1>
            <DayWeekToggle value={term} onChange={setTerm} />
          </div>
          <BannerCarousel
            slides={term === "day" ? trendingDay : trendingWeek}
          />
        </div>
      </section>
      <section className="py-14 bg-foreground">
        <div className="w-11/12 mx-auto flex flex-col gap-6">
          <h1 className="font-exo2Bold text-4xl text-light mx-auto">
            Find Your Next Favorite
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <CategoryCard categoryName="Movie" bgImagePath={MovieCategory} />
            <CategoryCard categoryName="TV Show" bgImagePath={TVCategory} />
          </div>
        </div>
      </section>

      <MediaCarouselSection
        movies={popular}
        mediaType="movie"
        title="Popular Movies"
        icon={Popular}
        expandable={true}
        mode="light"
      />
      <MediaCarouselSection
        movies={topRated}
        mediaType="movie"
        title="Top Rated Movies"
        icon={TopRated}
        expandable={true}
        mode="light"
        className="bg-foreground"
      />
      <MediaCarouselSection
        movies={nowPlaying}
        mediaType="movie"
        title="Now Playing In Cinema"
        icon={NowPlaying}
        expandable={true}
        mode="dark"
      />
      <MediaCarouselSection
        movies={upcoming}
        mediaType="movie"
        title="Upcoming Movies"
        icon={Upcoming}
        expandable={true}
        mode="light"
      />
    </div>
  );
};

export default MainPage;
