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

export async function getMediaInfo(type: "movie" | "tv", id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}`, {
    headers,
  });
  const data = await res.json();

  return data;
}

export async function getMediaExternalLinks(type: "movie" | "tv", id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/external_ids`,
    {
      headers,
    }
  );
  const data = await res.json();

  return data;
}

export async function getMediaCast(
  type: "movie" | "tv",
  id: number,
  limit = 20
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits`,
    {
      headers,
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch credits for ${type} ${id}`);
  }

  const data = await res.json();
  const cast = Array.isArray(data.cast) ? data.cast.slice(0, limit) : [];
  return cast;
}

export async function getMediaDirector(type: "movie" | "tv", id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits`,
    {
      headers,
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch credits for ${type} ${id}`);
  }

  const data = await res.json();

  const director = Array.isArray(data.crew)
    ? data.crew.find((person: any) => person.job === "Director")
    : null;

  return director;
}

export async function getMediaRecommendations(
  type: "movie" | "tv",
  id: number,
  limit = 20
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations`,
    {
      headers,
    }
  );
  const data = await res.json();

  return { ...data, results: data.results.slice(0, limit) };
}

export async function getMediaKeywords(type: "movie" | "tv", id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/keywords`,
    {
      headers,
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch credits for ${type} ${id}`);
  }

  const data = await res.json();

  return data.keywords;
}

export async function getMediaImages(
  type: "movie" | "tv",
  id: number,
  limit = 5
) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, {
    headers,
  });
  const data = await res.json();

  return { ...data, backdrops: data.backdrops.slice(1, limit + 1) };
}

export async function getMediaImagesCount(type: "movie" | "tv", id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, {
    headers,
  });
  const data = await res.json();
  const count = data.backdrops.length + data.logos.length + data.posters.length;

  return count;
}

export async function getMediaTrailer(type: "movie" | "tv", id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
    headers,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch credits for ${type} ${id}`);
  }

  const data = await res.json();

  const trailer = Array.isArray(data.results)
    ? data.results.find(
        (video: any) => video.type === "Trailer" && video.official === true
      )
    : null;

  return trailer;
}

export async function getMediaVideosCount(type: "movie" | "tv", id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
    headers,
  });
  const data = await res.json();
  const count = data.results.length;

  return count;
}
