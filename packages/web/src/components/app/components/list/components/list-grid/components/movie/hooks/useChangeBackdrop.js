import { useCallback } from "react";
import { useAppContext } from "../../../../../../../../../context/app-context";
import {
  editMovieOptions,
  useEditMovie,
} from "../../../../../../../../../graphql/mutations";

export const useChangeBackdrop = (movie) => {
  const { list } = useAppContext();
  const [editMovieMutation] = useEditMovie();
  const onChangeBackdrop = useCallback(
    (background) => {
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
