import { GetListsQuery, GetMoviesQuery } from "../../__generated__/graphql";
import { ArrayElement } from "../utils";

export type GetListsItem =
  | ArrayElement<NonNullable<GetListsQuery["lists"]>>
  | undefined;

export type GetMovieItem = NonNullable<
  ArrayElement<NonNullable<GetMoviesQuery["movies"]>>
>;
