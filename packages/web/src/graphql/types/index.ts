import {
  type ListsFragment,
  type GetListsQuery,
  type GetMoviesQuery,
  type Movie,
  type MovieInput,
} from "../../__generated__/graphql";
import { type ArrayElement } from "../utils";

export type InitialListItem = NonNullable<
  ArrayElement<NonNullable<ListsFragment["lists"]>>
>;

export type GetListsItem = NonNullable<
  ArrayElement<NonNullable<GetListsQuery["lists"]>>
>;

export type GetMovieItem = NonNullable<
  ArrayElement<NonNullable<GetMoviesQuery["movies"]>>
>;

export type NewMovie = Omit<Movie, "id" | "list">;

export type NewMovieInput = Omit<MovieInput, "id" | "list">;
