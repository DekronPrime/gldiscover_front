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
  title: string;
  icon: StaticImageData;
  itemsPerPage?: number;
  mode?: "light" | "dark";
  className?: string;
}

const MovieCarouselSection: React.FC<MovieCarouselSectionProps> = ({
  movies,
  title,
  icon,
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
      <div className="flex flex-col gap-6">
        <MovieCarouselTitle title={title} icon={icon} mode={mode} />
        <MovieCarousel movies={movies} mode={mode} />
      </div>
    </section>
  );
};

export default MovieCarouselSection;
