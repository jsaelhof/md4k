import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Close from "@mui/icons-material/Close";
import Refresh from "@mui/icons-material/Refresh";
import Search from "@mui/icons-material/Search";
import TabPanel from "../tab-panel/tab-panel";
import {
  type ChangeEventHandler,
  type ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import debounce from "lodash/debounce";
import FullDetailModal from "../../../full-detail-modal/full-detail-modal";
import { useSearchByTitle } from "../../../../../../graphql/queries";
import {
  NoMoviesFound,
  SearchInput,
  SearchLayout,
  SearchStatus,
  Searching,
} from "./tab-panel-search.styles";
import { MovieQuote } from "./components/movie-quote/movie-quote";
import MovieRemove from "mdi-material-ui/MovieRemove";
import PosterGrid from "./components/poster-grid/poster-grid";
import { useInViewRef } from "rooks/dist/esm/hooks/useInViewRef";
import {
  type PageInfo,
  type SearchByTitleQuery,
  type SearchResult,
} from "../../../../../../__generated__/graphql";
import { type Maybe } from "graphql/jsutils/Maybe";
import { notEmpty } from "../../../../../../utils/not-empty";
import { useTranslation } from "react-i18next";
import { type NewMovie } from "../../../../../../graphql/types";

export type TabPanelSearchProps = {
  tabId: string;
  hidden: boolean;
  onAddMovie: (movie: NewMovie) => void;
};

const TabPanelSearch = ({
  tabId,
  hidden,
  onAddMovie,
}: TabPanelSearchProps): ReactElement => {
  const { t } = useTranslation(["tab_panel_search"]);

  const [titleSearch, setTitleSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );
  const [pageInfo, setPageInfo] = useState<Maybe<PageInfo>>(null);
  const [centerPoint, setCenterPoint] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // The type here appends an optional background that is used to save any user-selected background chosen
  // while the full detail modal is open.
  const [selectedMovie, setSelectedMovie] = useState<
    (SearchResult & { background?: string }) | null
  >(null);

  const [searching, setSearching] = useState(false);

  const resetSearchResults = (): void => {
    setPageInfo(null);
    setSelectedMovie(null);
    setSearchResults(null);
  };

  const searchQuery = useSearchByTitle({
    onCompleted: (response: SearchByTitleQuery["searchByTitle"]) => {
      if (response) {
        const { results, pageInfo } = response;
        const updatedSearchResults = (
          results ? [...(searchResults ?? []), ...results] : []
        ).filter(notEmpty);
        setPageInfo(pageInfo);
        setSearchResults(updatedSearchResults);
        setSearching(false);
      }
    },
  });

  const onQueryChange = useRef(
    debounce((title, year, page) => {
      resetSearchResults();
      if (title.trim().length > 0) {
        setSearching(true);
        searchQuery(
          title.trim(),
          year.trim().length > 0 ? year.trim() : undefined,
          page
        );
      }
    }, 750)
  ).current;

  const onTitleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => {
      setTitleSearch(target.value);
      if (target.value.trim().length) {
        onQueryChange(target.value, yearSearch, 1);
      } else {
        // Cancel the debounced function.
        onQueryChange.cancel();
        resetSearchResults();
      }
    },
    [onQueryChange, yearSearch]
  );

  const onYearChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => {
      setYearSearch(target.value);
      onQueryChange(titleSearch, target.value, 1);
    },
    [onQueryChange, titleSearch]
  );

  const onLoadMore = useCallback(() => {
    setSearching(true);
    searchQuery(
      titleSearch,
      yearSearch.trim().length > 0 ? yearSearch : undefined,
      (pageInfo?.page ?? 0) + 1
    );
  }, [pageInfo?.page, searchQuery, titleSearch, yearSearch]);

  const onSearchResultClick = useCallback(
    (searchResult: SearchResult, event: React.MouseEvent<HTMLDivElement>) => {
      setCenterPoint({ x: event.screenX, y: event.screenY });
      setSelectedMovie(searchResult);
    },
    []
  );

  const onResetSearch = useCallback(() => {
    setTitleSearch("");
    resetSearchResults();
  }, []);

  // Checks if a 0-height div is within view and displays
  const [ref, visible] = useInViewRef(undefined, { rootMargin: "-184px" });

  return (
    <>
      <TabPanel tabId={tabId} hidden={hidden}>
        <SearchLayout $shadow={!visible}>
          <SearchInput>
            <TextField
              inputProps={{ "aria-label": t("tab_panel_search:search") }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      sx={{
                        mr: "-8px",
                        visibility: titleSearch ? "visible" : "hidden",
                      }}
                      onClick={onResetSearch}
                    >
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
              fullWidth
              variant="outlined"
              placeholder={t("tab_panel_search:search_placeholder")}
              value={titleSearch}
              onChange={onTitleChange}
              autoFocus
            />

            <TextField
              inputProps={{ "aria-label": t("tab_panel_search:year") }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonth />
                  </InputAdornment>
                ),
              }}
              size="small"
              fullWidth
              variant="outlined"
              placeholder={t("tab_panel_search:year")}
              value={yearSearch}
              onChange={onYearChange}
            />
          </SearchInput>
        </SearchLayout>

        {/* This div sits at the top of the search results and used by the intersection observer to determine if scrolling has occured */}
        <div ref={ref} />

        {searchResults && (
          <PosterGrid
            searchResults={searchResults}
            onClick={onSearchResultClick}
          />
        )}

        <SearchStatus>
          {pageInfo?.page &&
          pageInfo?.pages &&
          pageInfo.page < pageInfo.pages &&
          !searching ? (
            <Button variant="contained" onClick={onLoadMore}>
              {t("tab_panel_search:load_more")}
            </Button>
          ) : searching ? (
            <Searching>
              <Refresh />
              <div>{t("tab_panel_search:searching")}</div>
            </Searching>
          ) : searchResults && searchResults.length === 0 ? (
            <NoMoviesFound>
              <MovieRemove />
              <div>{t("tab_panel_search:no_movies_found.title")}</div>
              <div>{t("tab_panel_search:no_movies_found.subtitle")}</div>
            </NoMoviesFound>
          ) : (
            !searchResults && <MovieQuote />
          )}
        </SearchStatus>
      </TabPanel>

      {selectedMovie && (
        <FullDetailModal
          open={true}
          centerPoint={centerPoint}
          onClose={(): void => {
            setCenterPoint(null);
            setSelectedMovie(null);
          }}
          fullDetailProps={{
            movie: {
              title: selectedMovie.title,
              poster: selectedMovie.poster,
              background: selectedMovie.background,
              imdbID: selectedMovie.imdbID,
            },
            onAddMovie,
            onChangeBackdrop: (url): void => {
              // This will lose the selected backdrop if the user change movies.
              // I could find the movie by id in the movies returned and update it there, which _should_ propogate to the selected movie.
              setSelectedMovie({
                ...selectedMovie,
                background: url,
              });
            },
            actionSet: "addMovie",
          }}
        />
      )}
    </>
  );
};

export default TabPanelSearch;
