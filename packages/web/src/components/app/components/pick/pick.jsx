import { useEffect, useState } from "react";

import { useAppContext } from "../../../../context/app-context";
import { errorCodes } from "md4k-constants";
import FullDetail from "../full-detail/full-detail";
import sample from "lodash/sample";
import size from "lodash/size";
import reject from "lodash/reject";
import { useNavigate, useSearchParams } from "react-router-dom";
import EmptyState from "../empty-state/empty-state";
import { Button } from "@mui/material";
import { filterMovies } from "../../../../utils/filter-movies";

const useRandomPick = () => {
  const { movies, pick, setPick, clearPick } = useAppContext();
  const [searchParams] = useSearchParams();

  const [history, setHistory] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (movies && !pick) {
      const minRuntime = searchParams.get("minRuntime");
      const maxRuntime = searchParams.get("maxRuntime");
      const maxAdded = searchParams.get("maxAdded");
      const minAdded = searchParams.get("minAdded");

      const list = filterMovies(movies, {
        minRuntime,
        maxRuntime,
        maxAdded,
        minAdded,
      });

      if (size(list) === 0) {
        setError(errorCodes.PICK_EMPTY);
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
  }, [clearPick, history, movies, pick, searchParams, setPick]);

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

      {/* Currently the only error case is no movies being available within the given criteria. */}
      {error && (
        <EmptyState
          imgSrc="/images/rocket.png"
          quote="&quot;There's one more thing we need to complete the plan. That guy's eye...&quot;"
          message="There aren't any movies here to choose from. Head back to the list and try again."
          content={
            <Button variant="contained" onClick={() => navigate("/")}>
              Back to Movies
            </Button>
          }
        />
      )}
    </>
  );
};
