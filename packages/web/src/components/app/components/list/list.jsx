import { useCallback, useState } from "react";
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
import { errorMessage } from "../../../../constants/error-messages";
import map from "lodash/map";

export const List = () => {
  const navigate = useNavigate();
  const { list, movies, lists, setToast } = useAppContext();
  const [error, setError] = useState(null);

  const [undoMarkWatchedMutation] = useUndoMarkWatched({
    onCompleted: ({ editMovie: movie }) => {
      setToast({
        message: `Moved '${movie.title}' back to movies list`,
      });
    },
  });

  const [markWatchedMutation] = useMarkWatched({
    onCompleted: ({ editMovie: movie }) => {
      setToast({
        message: `Moved '${movie.title}' to watched list`,
        onUndo: () => {
          undoMarkWatchedMutation(undoMarkWatchedOptions(movie, list));
        },
      });
    },
  });

  const [editMovieMutation] = useEditMovie();
  const [removeMovieMutation] = useRemoveMovie(({ message }) => {
    setError(message);
  });

  const onPick = useCallback(
    (options) => {
      navigate(`/pick?${map(options, (v, k) => `${k}=${v}`).join("&")}`);
    },
    [navigate]
  );

  const onEditMovie = useCallback(
    (movie, useEditor = true) =>
      useEditor
        ? navigate(`/edit/${movie.id}`)
        : editMovieMutation(editMovieOptions(movie, list)),
    [editMovieMutation, list, navigate]
  );

  const onRemoveMovie = useCallback(
    (movie) => removeMovieMutation(removeMovieOptions(movie)),
    [removeMovieMutation]
  );

  const onMarkWatched = useCallback(
    (movie) => {
      const watchedOn = new Date().toISOString();
      markWatchedMutation(markWatchedOptions(movie, watchedOn, list));
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

      <ErrorDialog
        open={!!error}
        content={
          errorMessage[error] || errorMessage.UNKNOWN.replace("%%", error)
        }
        onConfirm={() => setError(null)}
      />
    </>
  );
};
