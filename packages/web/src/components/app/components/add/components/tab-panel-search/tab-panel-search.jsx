import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Close from "@mui/icons-material/Close";
import Refresh from "@mui/icons-material/Refresh";
import Search from "@mui/icons-material/Search";
import TabPanel from "../tab-panel/tab-panel";
import { useCallback, useRef, useState } from "react";
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
import PosterGrid from "../../../poster-grid/poster-grid";
import { useInViewRef } from "rooks/dist/esm/hooks/useInViewRef";

const TabPanelSearch = ({ tabId, hidden, onAddMovie }) => {
  const [titleSearch, setTitleSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");
  const [movies, setMovies] = useState(null);
  const [pageInfo, setPageInfo] = useState(null);
  const [centerPoint, setCenterPoint] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searching, setSearching] = useState(false);

  const resetSearchResults = () => {
    setPageInfo(null);
    setSelectedMovie(null);
    setMovies(null);
  };

  const searchQuery = useSearchByTitle({
    onCompleted: ({ results, pageInfo }) => {
      setPageInfo(pageInfo);
      setMovies(pageInfo?.page > 1 ? [...movies, ...results] : results);
      setSearching(false);
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

  const onTitleChange = useCallback(
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

  const onYearChange = useCallback(
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
      pageInfo.page + 1
    );
  }, [pageInfo?.page, searchQuery, titleSearch, yearSearch]);

  const onSearchResultClick = useCallback((movie, event) => {
    setCenterPoint({ x: event.screenX, y: event.screenY });
    setSelectedMovie(movie);
  }, []);

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
              inputProps={{ "aria-label": "Search" }}
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
              placeholder="Search for a movie"
              value={titleSearch}
              onChange={onTitleChange}
              autoFocus
            />

            <TextField
              inputProps={{ "aria-label": "Year" }}
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
              placeholder="Year"
              value={yearSearch}
              onChange={onYearChange}
            />
          </SearchInput>
        </SearchLayout>

        {/* This div sits at the top of the search results and used by the intersection observer to determine if scrolling has occured */}
        <div ref={ref} />

        {movies && (
          <PosterGrid
            movies={movies}
            onSearchResultClick={onSearchResultClick}
            info="year"
          />
        )}

        <SearchStatus>
          {pageInfo && pageInfo.page < pageInfo.pages && !searching ? (
            <Button variant="contained" onClick={onLoadMore}>
              Load More
            </Button>
          ) : searching ? (
            <Searching>
              <Refresh />
              <div>Searching...</div>
            </Searching>
          ) : movies && movies.length === 0 ? (
            <NoMoviesFound>
              <MovieRemove />
              <div>No movies found.</div>
              <div>Please try a different search.</div>
            </NoMoviesFound>
          ) : (
            !movies && <MovieQuote />
          )}
        </SearchStatus>
      </TabPanel>

      {selectedMovie && (
        <FullDetailModal
          movie={selectedMovie}
          open={true}
          centerPoint={centerPoint}
          onClose={() => {
            setCenterPoint(null);
            setSelectedMovie(null);
          }}
          onAddMovie={onAddMovie}
          onChangeBackdrop={(url) => {
            // This will lose the selected backdrop if the user change movies.
            // I could find the movie by id in the movies returned and update it there, which _should_ propogate to the selected movie.
            setSelectedMovie({
              ...selectedMovie,
              background: url,
            });
          }}
          actionSet="addMovie"
        />
      )}
    </>
  );
};

export default TabPanelSearch;
