// TMDB Error
export type TMDBError = {
  success: false;
  status_code: 34;
  status_message: "The resource you requested could not be found.";
};

export type TMDBProviderResults = {
  id: number;
  results: {
    [key: string]: {
      link: string;
      flatrate: {
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }[];
      rent: {
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }[];
      buy: {
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }[];
      ads: {
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }[];
    };
  };
};

export type TMDBFindResult = {
  movie_results: {
    adult: boolean;
    backdrop_path: "string";
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
};

export type TMDBMovieResult = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  images: {
    backdrops: [];
    logos: [];
    posters: [];
  };
  videos: {
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }[];
  };
  credits: {
    cast: {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }[];
    crew: {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      credit_id: string;
      department: string;
      job: string;
    }[];
  };
};
