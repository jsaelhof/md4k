import { useCallback } from "react";
import { useAppContext } from "../../../../../../../../../context/app-context";
import {
  editMovieOptions,
  useEditMovie,
} from "../../../../../../../../../graphql/mutations";
import { type Movie } from "../../../../../../../../../__generated__/graphql";

export const useChangeBackdrop = (
  movie: Movie
): ((background: string) => void) => {
  const { list } = useAppContext();
  const [editMovieMutation] = useEditMovie();
  const onChangeBackdrop = useCallback(
    (background: string) => {
      list &&
        editMovieMutation(
          editMovieOptions(
            {
              ...movie,
              background,
            },
            list
          )
        );
    },
    [editMovieMutation, list, movie]
  );

  return onChangeBackdrop;
};
