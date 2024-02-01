export type OMDBMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: "Internet Movie Database" | "Rotten Tomatoes" | "Metacritic";
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie";
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

export type OMDBResponse = {
  Response: "True" | "False";
};

export type OMDBGetMovieResponse = OMDBResponse & OMDBMovie;

export type OMDBSearchResponse = OMDBResponse & {
  Search: OMDBMovie[];
  totalResults: number;
};
