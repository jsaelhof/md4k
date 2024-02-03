import {
  GetListsQuery,
  GetMoviesQuery,
  Movie,
  MovieInput,
} from "../../__generated__/graphql";
import { ArrayElement } from "../utils";

export type GetListsItem = NonNullable<
  ArrayElement<NonNullable<GetListsQuery["lists"]>>
>;

export type GetMovieItem = NonNullable<
  ArrayElement<NonNullable<GetMoviesQuery["movies"]>>
>;

export type NewMovie = Omit<Movie, "id" | "list">;

export type NewMovieInput = Omit<MovieInput, "id" | "list">;
