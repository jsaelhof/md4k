import { useCallback, useEffect, useMemo, useState } from "react";
import isNil from "lodash/isNil";

import { Container } from "./watched.styles";
import { errorMessage } from "../../../../constants/error-messages";
import DeleteDialog from "../delete-dialog/delete-dialog";
import ErrorDialog from "../error-dialog/error-dialog";
import WatchedMovie from "./components/watched-movie/watched-movie";
import orderBy from "lodash/orderBy";
import { useAppContext } from "../../../../context/app-context";
import {
  editMovieOptions,
  removeMovieOptions,
  useEditMovie,
  useRemoveWatchedMovie,
} from "../../../../graphql/mutations";
import { sortDirection } from "../../../../constants/sorts";
import { useGetWatchedMovies } from "../../../../graphql/queries";

const INFINITE_LOAD_CHUNK_SIZE = 5;

export const Watched = () => {
  const { list } = useAppContext();
  const { watchedMovies } = useGetWatchedMovies(list);
  const [error, setError] = useState(null);
  const [deleteMovie, setDeleteMovie] = useState(null);
  const [editingMovie, setEditingMovie] = useState(null);
  const [infiniteLoadPointer, setInfiniteLoadPointer] = useState(
    INFINITE_LOAD_CHUNK_SIZE
  );

  const sortedMovies = useMemo(
    () => orderBy(watchedMovies, "watchedOn", [sortDirection.DESC]),
    [watchedMovies]
  );

  useEffect(() => {
    const onScroll = ({ target: { documentElement } }) => {
      if (
        documentElement.scrollHeight - documentElement.scrollTop ===
        documentElement.clientHeight
      ) {
        setInfiniteLoadPointer(
          Math.min(
            watchedMovies?.length ?? 0,
            infiniteLoadPointer + INFINITE_LOAD_CHUNK_SIZE
          )
        );
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [infiniteLoadPointer, watchedMovies?.length]);

  const [editMovieMutation] = useEditMovie();
  const [removeMovieMutation] = useRemoveWatchedMovie({
    onError: ({ message }) => {
      setError(message);
    },
  });

  const onSaveMovie = useCallback(
    (movie) => {
      editMovieMutation(editMovieOptions(movie, list));
      setEditingMovie(null);
    },
    [editMovieMutation, list]
  );

  const onCancelEdit = useCallback(() => setEditingMovie(null), []);

  const onDeleteMovie = useCallback((movie) => {
    setDeleteMovie(movie);
  }, []);

  return watchedMovies ? (
    <>
      <Container>
        {sortedMovies.map(
          (movie, i) => (
            // i < infiniteLoadPointer && (
            <WatchedMovie
              key={movie.id}
              movie={editingMovie?.id === movie.id ? editingMovie : movie}
              right={i % 2}
              isEditing={editingMovie?.id === movie.id}
              onEditMovie={setEditingMovie}
              onSave={onSaveMovie}
              onCancel={onCancelEdit}
              onDelete={onDeleteMovie}
            />
          )
          // )
        )}
      </Container>

      <DeleteDialog
        open={!isNil(deleteMovie)}
        content={`'${deleteMovie?.title}' will be removed from the Watched Movies list`}
        onCancel={() => setDeleteMovie(null)}
        onConfirm={() => {
          removeMovieMutation(removeMovieOptions(deleteMovie));
          setDeleteMovie(null);
        }}
      />

      <ErrorDialog
        open={!!error}
        content={
          errorMessage[error] || errorMessage.UNKNOWN.replace("%%", error)
        }
        onConfirm={() => setError(null)}
      />
    </>
  ) : null;
};
