const token = process.env.NEXT_PUBLIC_TMDB_TOKEN!;
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json;charset=utf-8",
};

async function getGenres(type: "movie" | "tv") {
  const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list`, {
    headers,
  });
  const data = await res.json();
  const map = new Map<number, { id: number; name: string }>();
  data.genres.forEach((g: { id: number; name: string }) => map.set(g.id, g));
  return map;
}

export async function getTrendingMovies(term: "day" | "week", limit = 5) {
  const genresMap = await getGenres("movie");
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/${term}`,
    { headers }
  );
  const data = await res.json();

  const results = data.results.slice(0, limit).map((movie: any) => {
    const { genre_ids, ...rest } = movie;

    return {
      ...rest,
      genres: genre_ids
        .map((id: number) => genresMap.get(id))
        .filter(Boolean) as { id: number; name: string }[],
    };
  });

  return { ...data, results };
}

export async function getPopularMovies(limit = 20) {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers,
  });
  const data = await res.json();
  return { ...data, results: data.results.slice(0, limit) };
}

export async function getTopRatedMovies(limit = 20) {
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
    headers,
  });
  const data = await res.json();
  return { ...data, results: data.results.slice(0, limit) };
}

export async function getNowPlayingMovies(limit = 20) {
  const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
    headers,
  });
  const data = await res.json();
  return { ...data, results: data.results.slice(0, limit) };
}

export async function getUpcomingMovies(limit = 20) {
  const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
    headers,
  });
  const data = await res.json();
  return { ...data, results: data.results.slice(0, limit) };
}
