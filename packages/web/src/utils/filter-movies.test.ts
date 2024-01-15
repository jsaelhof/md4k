import { subDays } from "date-fns";
import { filterMovies } from "./filter-movies";
import { Movie } from "../__generated__/graphql";

interface LocalTestContext {
  movie1: Movie;
  movie2: Movie;
  movie3: Movie;
  movie4: Movie;
  movies: Movie[];
}

describe("filter-movies", () => {
  beforeEach<LocalTestContext>((context) => {
    context.movie1 = {
      id: "0",
      title: "Movie 1",
      runtime: 5400,
      locked: false,
      addedOn: subDays(new Date(), 10).toISOString(),
    };

    context.movie2 = {
      id: "1",
      title: "Movie 2",
      runtime: 6600,
      locked: false,
      addedOn: subDays(new Date(), 20).toISOString(),
    };

    context.movie3 = {
      id: "2",
      title: "Movie 3",
      runtime: 9000,
      locked: false,
      addedOn: subDays(new Date(), 30).toISOString(),
    };

    context.movie4 = {
      id: "3",
      title: "Movie 4",
      locked: false,
      // Mising Runtime
      addedOn: subDays(new Date(), 40).toISOString(),
    };

    context.movies = [
      context.movie1,
      context.movie2,
      context.movie3,
      context.movie4,
    ];
  });

  it<LocalTestContext>("should return all movies when no options are provided", ({
    movies,
  }) => {
    const result = filterMovies(movies);
    expect(result).toHaveLength(4);
  });

  it<LocalTestContext>("should remove movies below a given minRuntime", ({
    movies,
    movie2,
    movie3,
  }) => {
    const result = filterMovies(movies, { minRuntime: 6000 });
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([movie2, movie3]));
  });

  it<LocalTestContext>("should remove movies above a given maxRuntime", ({
    movies,
    movie2,
    movie1,
  }) => {
    const result = filterMovies(movies, { maxRuntime: 8000 });
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([movie1, movie2]));
  });

  it<LocalTestContext>("should remove movies outside a given minRuntime and maxRuntime", ({
    movies,
    movie2,
  }) => {
    const result = filterMovies(movies, {
      minRuntime: 6000,
      maxRuntime: 8000,
    });
    expect(result).toHaveLength(1);
    expect(result).toEqual(expect.arrayContaining([movie2]));
  });

  it<LocalTestContext>("should remove movies after a given number of days ago", ({
    movies,
    movie3,
    movie4,
  }) => {
    const result = filterMovies(movies, {
      minAdded: 25,
    });
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([movie3, movie4]));
  });

  it<LocalTestContext>("should remove movies before a given number of days ago", ({
    movies,
    movie1,
    movie2,
  }) => {
    const result = filterMovies(movies, {
      maxAdded: 25,
    });
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([movie1, movie2]));
  });
});
