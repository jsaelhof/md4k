import { ReactElement, useCallback, useState } from "react";
import { useAppContext } from "../../../../context/app-context";
import {
  editMovieOptions,
  markWatchedOptions,
  removeMovieOptions,
  undoMarkWatchedOptions,
  useEditMovie,
  useMarkWatched,
  useRemoveMovie,
  useUndoMarkWatched,
} from "../../../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { animated, useSpring, useTransition } from "react-spring";
import { Countdown } from "./components/countdown/countdown";
import ActionBar from "./components/action-bar/action-bar";
import ListGrid from "./components/list-grid/list-grid";
import ErrorDialog from "../error-dialog/error-dialog";
import map from "lodash/map";
import { Movie } from "../../../../__generated__/graphql";
import { PickOption } from "../../../../types";
import { useTranslation } from "react-i18next";

export const List = (): ReactElement => {
  const navigate = useNavigate();
  const { list, movies, lists, setToast } = useAppContext();
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation(["list"]);

  const [undoMarkWatchedMutation] = useUndoMarkWatched({
    onCompleted: ({ editMovie: movie }) => {
      movie &&
        setToast({
          message: t("list:moved_back_to_movie_list", {
            movieTitle: movie.title,
          }),
        });
    },
  });

  const [markWatchedMutation] = useMarkWatched({
    onCompleted: ({ editMovie: movie }) => {
      movie &&
        setToast({
          message: t("list:moved_to_watched_list", { movieTitle: movie.title }),
          onUndo: () => {
            if (list) {
              undoMarkWatchedMutation(undoMarkWatchedOptions(movie, list));
            }
          },
        });
    },
  });

  const [editMovieMutation] = useEditMovie();
  const [removeMovieMutation] = useRemoveMovie(({ message }) => {
    setError(message);
  });

  const onPick = useCallback(
    (options?: PickOption) => {
      navigate(`/pick?${map(options, (v, k) => `${k}=${v}`).join("&")}`);
    },
    [navigate]
  );

  const onEditMovie = useCallback(
    (movie: Movie, useEditor = true) => {
      if (useEditor) {
        navigate(`/edit/${movie.id}`);
      } else if (list) {
        editMovieMutation(editMovieOptions(movie, list));
      }
    },
    [editMovieMutation, list, navigate]
  );

  const onRemoveMovie = useCallback(
    (movie: Movie) => {
      if (list) {
        removeMovieMutation(removeMovieOptions(movie.id, list.id));
      }
    },
    [list, removeMovieMutation]
  );

  const onMarkWatched = useCallback(
    (movie: Movie) => {
      if (list) {
        const watchedOn = new Date().toISOString();
        markWatchedMutation(markWatchedOptions(movie, watchedOn, list));
      }
    },
    [list, markWatchedMutation]
  );

  // Controls the fade-out and unmount of the countdown animation.
  // Transition is used so it unmounts after the animation completes.
  const loadingTransitions = useTransition(!movies, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Controls fading in the movies once loaded.
  const moviesSpring = useSpring({
    opacity: movies ? 1 : 0,
    delay: 500,
  });

  if (lists?.length === 0) navigate("/create", { replace: true });

  return (
    <>
      <div>
        {loadingTransitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <Countdown />
              </animated.div>
            )
        )}

        {movies && (
          <>
            <ActionBar
              disabled={!movies || movies?.length === 0}
              onPick={onPick}
            />

            <animated.div style={moviesSpring}>
              <ListGrid
                movies={movies}
                onEditMovie={onEditMovie}
                onRemoveMovie={onRemoveMovie}
                onMarkWatched={onMarkWatched}
              />
            </animated.div>
          </>
        )}
      </div>

      {error && (
        <ErrorDialog
          open={true}
          content={t("list:error_removing")}
          debug={error}
          onConfirm={(): void => setError(null)}
        />
      )}
    </>
  );
};
