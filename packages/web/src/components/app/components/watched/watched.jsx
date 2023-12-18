import { useCallback, useEffect, useMemo, useState } from "react";
import isNil from "lodash/isNil";

import { StackedContainer, NoMoviesFound } from "./watched.styles";
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
import WatchedToolbar from "./components/watched-toolbar/watched-toolbar";
import MovieRemove from "mdi-material-ui/MovieRemove";
import { useGetWatchedMovies } from "../../../../graphql/queries/get-watched-movies";
import { useI18n } from "../../../../hooks/use-i18n";
import watchedStrings from "./i18n/i18n";

const INFINITE_LOAD_CHUNK_SIZE = 5;

export const Watched = () => {
  const { t } = useI18n(watchedStrings);
  const { list } = useAppContext();
  const { watchedMovies } = useGetWatchedMovies(list);
  const [error, setError] = useState(null);
  const [deleteMovie, setDeleteMovie] = useState(null);
  const [editingMovie, setEditingMovie] = useState(null);
  const [infiniteLoadPointer, setInfiniteLoadPointer] = useState(
    INFINITE_LOAD_CHUNK_SIZE
  );
  const [searchTerm, setSearchTerm] = useState("");

  const sortedMovies = useMemo(
    () =>
      orderBy(watchedMovies, "watchedOn", [sortDirection.DESC]).filter(
        ({ title }) =>
          searchTerm.length === 0 ||
          title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, watchedMovies]
  );

  useEffect(() => {
    const onScroll = ({ target: { documentElement } }) => {
      if (
        watchedMovies?.length > 0 &&
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
      <WatchedToolbar
        count={watchedMovies.length}
        visibleCount={sortedMovies.length}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      {sortedMovies.length ? (
        <StackedContainer>
          {sortedMovies.map(
            (movie, i) =>
              i < infiniteLoadPointer && (
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
          )}
        </StackedContainer>
      ) : searchTerm ? (
        <NoMoviesFound>
          <MovieRemove />
          <div>{t("watched:not_found.message_1")}</div>
          <div>{t("watched:not_found.message_2")}</div>
        </NoMoviesFound>
      ) : null}

      <DeleteDialog
        open={!isNil(deleteMovie)}
        content={t("watched:delete.will_remove", { title: deleteMovie?.title })}
        onCancel={() => setDeleteMovie(null)}
        onConfirm={() => {
          removeMovieMutation(removeMovieOptions(deleteMovie));
          setDeleteMovie(null);
        }}
      />

      <ErrorDialog
        open={!!error}
        content={t("watched:error_removing")}
        debug={error}
        onConfirm={() => setError(null)}
      />
    </>
  ) : null;
};
