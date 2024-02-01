import { GetListsQuery, GetMoviesQuery } from "../../__generated__/graphql";
import { ArrayElement } from "../utils";

export type GetListsItem = NonNullable<
  ArrayElement<NonNullable<GetListsQuery["lists"]>>
>;

export type GetMovieItem = NonNullable<
  ArrayElement<NonNullable<GetMoviesQuery["movies"]>>
>;
