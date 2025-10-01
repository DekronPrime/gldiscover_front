import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import MovieCarousel from "../mainpage/MediaCarousel";
import MovieCarouselTitle from "./MediaCarouselTitle";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface MovieCarouselSectionProps {
  movies: Movie[];
  mediaType: "movie" | "tv";
  title: string;
  icon: StaticImageData;
  expandable: boolean;
  itemsPerPage?: number;
  mode?: "light" | "dark";
  className?: string;
}

const MovieCarouselSection: React.FC<MovieCarouselSectionProps> = ({
  movies,
  mediaType = "movie",
  title,
  icon,
  expandable = true,
  itemsPerPage = 4,
  mode = "light",
  className,
  ...props
}) => {
  return (
    <section
      className={`py-14 ${
        mode === "light" ? `bg-background` : `bg-accent`
      } ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-5">
        <div className="w-11/12 mx-auto">
          <MovieCarouselTitle
            title={title}
            icon={icon}
            expandable={expandable}
            mode={mode}
          />
        </div>
        <MovieCarousel movies={movies} mediaType={mediaType} mode={mode} />
      </div>
    </section>
  );
};

export default MovieCarouselSection;
