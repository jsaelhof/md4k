import { ReactElement, useEffect, useState } from "react";

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
import { useI18n } from "../../../../hooks/use-i18n";
import pickStrings from "./i18n/i18n";
import { Movie } from "../../../../__generated__/graphql";

const getSearchParam = (
  key: string,
  searchParams: URLSearchParams
): number | undefined => {
  const val = searchParams.get(key);
  return val ? parseInt(val) : undefined;
};

const useRandomPick = (): { pick: string | null; error: string | null } => {
  const { movies, pick, setPick, clearPick } = useAppContext();
  const [searchParams] = useSearchParams();

  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (movies && !pick) {
      const list = filterMovies(movies, {
        minRuntime: getSearchParam("minRuntime", searchParams),
        maxRuntime: getSearchParam("maxRuntime", searchParams),
        maxAdded: getSearchParam("maxAdded", searchParams),
        minAdded: getSearchParam("minAdded", searchParams),
      });

      if (size(list) === 0) {
        setError(errorCodes.PICK_EMPTY);
      } else if (size(list) === 1) {
        setPick(list[0].id);
      } else {
        const unpickedMovies = reject(list, ({ id }) => history.includes(id));

        if (unpickedMovies.length > 0) {
          const nextPick = sample(unpickedMovies) as Movie; // TS can't see that sample will never return undefined because of the length check above.
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

export const Pick = (): ReactElement => {
  const { t } = useI18n(pickStrings);
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
          quote={t("pick:quote")}
          message={t("pick:message")}
          content={
            <Button variant="contained" onClick={(): void => navigate("/")}>
              {t("pick:action")}
            </Button>
          }
        />
      )}
    </>
  );
};
