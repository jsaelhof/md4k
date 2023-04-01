import { useEffect, useState } from "react";

import { useAppContext } from "../../../../context/app-context";
import { errorCodes } from "md4k-constants";
import { errorMessage } from "../../../../constants/error-messages";
import ErrorDialog from "../error-dialog/error-dialog";
import FullDetail from "../full-detail/full-detail";
import filter from "lodash/filter";
import conforms from "lodash/conforms";
import sample from "lodash/sample";
import size from "lodash/size";
import reject from "lodash/reject";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isBefore, parseISO, subDays } from "date-fns";

const useRandomPick = () => {
  const { movies, pick, setPick, clearPick } = useAppContext();
  const [searchParams] = useSearchParams();
  const minRuntime = searchParams.get("minRuntime");
  const maxRuntime = searchParams.get("maxRuntime");
  const maxAdded = searchParams.get("maxAdded");
  const minAdded = searchParams.get("minAdded");

  const [history, setHistory] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (movies && !pick) {
      const filters = {
        locked: (locked) => !locked,
      };

      if (minRuntime || maxRuntime) {
        filters.runtime = (runtime) =>
          runtime >= (minRuntime || 0) && runtime <= (maxRuntime || Infinity);
      }

      // maxAdded is an integer of days (ex: 30)
      // Find only movies that were added no more than N days ago
      if (maxAdded) {
        filters.addedOn = (addedOn) =>
          !isBefore(parseISO(addedOn), subDays(new Date(), maxAdded));
      }

      // minAded is an integer of days (ex: 30)
      // Find only movies that were added at least N days ago
      if (minAdded) {
        filters.addedOn = (addedOn) =>
          isBefore(parseISO(addedOn), subDays(new Date(), minAdded));
      }

      const list = filter(movies, conforms(filters));

      if (size(list) === 0) {
        setError(errorCodes.PICKING);
      } else if (size(list) === 1) {
        setPick(list[0].id);
      } else {
        const unpickedMovies = reject(list, ({ id }) => history.includes(id));

        if (unpickedMovies.length > 0) {
          const nextPick = sample(unpickedMovies);
          setHistory([...history, nextPick.id]);
          setPick(nextPick.id);
        } else {
          // Every movie is in the history already.
          // Clear the history and start over.
          // Keep the last movie as the first movie in the new history to prevent getting it again on the next pick.
          setHistory(history.slice(-1));
          clearPick();
        }
      }
    }
  }, [
    clearPick,
    history,
    maxAdded,
    maxRuntime,
    minAdded,
    minRuntime,
    movies,
    pick,
    setPick,
  ]);

  if (error) {
    return { pick: null, error };
  } else {
    return { pick, error: null };
  }
};

export const Pick = () => {
  const { moviesById, clearPick } = useAppContext();
  const navigate = useNavigate();

  // This is used to reset the pick in app state when the page loads the first time.
  // Without this, when leaving the pick page and then picking again, the last pick will remain
  // in app state. This also means it does not conform to new pick options.
  // eslint-disable-next-line
  useEffect(() => clearPick, []);

  const { pick, error } = useRandomPick();

  return (
    <>
      {pick && <FullDetail movie={moviesById[pick]} />}

      {error && (
        <ErrorDialog
          open={!!error}
          content={
            errorMessage[error] || errorMessage.UNKNOWN.replace("%%", error)
          }
          // FIXME: Can't clear the error easily because it's in the hook. Navigate home for now.
          // The only cause of an error right now is 0 movies matching the criteria so maybe build an empty state for that.
          onConfirm={() => navigate("/")}
        />
      )}
    </>
  );
};
