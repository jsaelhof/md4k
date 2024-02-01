import { Movie } from "../../../../../__generated__/graphql";

// TODO: This could probably be more accurate and specify only what the form provides.
export type MovieFormFields = Omit<Movie, "runtime"> & {
  runtime: string | null;
};
