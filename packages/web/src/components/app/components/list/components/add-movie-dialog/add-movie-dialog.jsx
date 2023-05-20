import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import isNil from "lodash/isNil";
import { useCallback, useRef, useState } from "react";

import { formatRuntime } from "../../../../../../utils/format-runtime";
import { genreLabels, genres } from "md4k-constants";
import { sourceLabels, sourceLogos } from "../../../../../../constants/sources";
import { sources } from "md4k-constants";
import { parseRuntime } from "../../../../../../utils/parse-runtime";
import {
  useGetThirdPartySummaryDetails,
  useSearchByTitle,
} from "../../../../../../graphql/queries";
import Carousel from "./components/carousel/carousel";
import {
  Genre,
  Input,
  Poster,
  Runtime,
  Source,
  Title,
  Year,
  RatingsContainer,
  Actions,
} from "./add-movie-dialog.styles";
import Ratings from "../ratings/ratings";
import MoviePoster from "../../../movie-poster/movie-poster";
import debounce from "lodash/debounce";

const AUTO_REFRESH_TIMEOUT = 1500;

const AddMovieDialog = ({
  onAddMovie,
  onCancel,
  movie: initialInputState = {},
}) => {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searching, setSearching] = useState(false);

  // TODO: This tracks more than just the inputs now (poster, ratings etc) so maybe rename it.
  const [input, setInput] = useState({
    title: "",
    runtime: "",
    genre: null,
    source: sources.NONE,
    year: "",
    locked: false,
    ...initialInputState,
    ...(initialInputState.runtime && {
      runtime: formatRuntime(initialInputState.runtime, true),
    }),
  });

  const xsmall = useMediaQuery("(max-width: 600px), (max-height: 414px)");

  const searchQuery = useSearchByTitle({
    onCompleted: (searchByTitle) => {
      setMovies(searchByTitle);
      setSearching(false);
    },
  });

  // Putting the debounced function in a ref prevents it from being recreated on each render.
  const onQueryChange = useRef(
    debounce((title, year) => {
      if (title.trim().length > 0) {
        setSearching(true);
        searchQuery(
          title.trim(),
          year.trim().length > 0 ? year.trim() : undefined
        );
      }
    }, AUTO_REFRESH_TIMEOUT)
  ).current;

  const onTitleChange = useCallback(
    ({ target }) => {
      // Reset the search immediately when typing begins to clear any previous results.
      setSelectedMovie(null);
      setMovies(null);
      setInput((state) => ({
        ...state,
        title: target.value,
        poster: null,
        ratings: null,
      }));

      // Invoke the debounced handler that will do the lazy query
      onQueryChange(target.value, input.year);
    },
    [onQueryChange, input.year]
  );

  const onYearChange = useCallback(
    ({ target }) => {
      setInput((state) => ({ ...state, year: target.value }));

      // Invoke the debounced handler that will do the lazy query
      onQueryChange(input.title, target.value);
    },
    [onQueryChange, input.title]
  );

  useGetThirdPartySummaryDetails(movies?.[selectedMovie], {
    onCompleted: (details) =>
      setInput({
        ...input,
        ...details,
      }),
  });

  return (
    <Dialog open={true} fullWidth fullScreen={xsmall} maxWidth="lg">
      {!xsmall && <DialogTitle>Add a Movie</DialogTitle>}
      <DialogContent>
        <Input>
          <Poster>
            <MoviePoster
              height={xsmall ? 130 : 200}
              movie={{ title: input.title, poster: input.poster }}
              shadow
            />
          </Poster>

          <Title
            label="Title"
            value={input.title}
            size="small"
            fullWidth
            variant="outlined"
            placeholder="Title"
            onChange={onTitleChange}
            autoFocus
          />

          <Runtime
            label="Runtime"
            value={input.runtime || ""}
            size="small"
            variant="outlined"
            placeholder="0:00"
            inputProps={{
              maxLength: 4,
            }}
            onChange={({ target }) =>
              setInput({ ...input, runtime: target.value })
            }
          />

          <Genre
            onChange={(value) => setInput({ ...input, genre: value })}
            value={input.genre}
            values={genres}
            labels={genreLabels}
          />

          <Year
            label="Year"
            value={input.year || ""}
            size="small"
            variant="outlined"
            placeholder="1978"
            inputProps={{
              maxLength: 4,
            }}
            onChange={onYearChange}
          />

          <Source
            onChange={(value) => setInput({ ...input, source: value })}
            value={input.source}
            values={sources}
            labels={sourceLabels}
            images={sourceLogos}
          />

          {input.ratings && !xsmall && (
            <RatingsContainer>
              <Ratings ratings={input.ratings} dense />
            </RatingsContainer>
          )}
        </Input>

        <Carousel
          movies={movies}
          searching={searching}
          onSelectMovie={setSelectedMovie}
        />

        <Actions>
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onAddMovie({
                ...input,
                runtime: parseRuntime(input.runtime),
                // If we have additional data not captured in inputs loaded, add it to the movie
                ...(!isNil(selectedMovie) && {
                  imdbID: movies[selectedMovie].imdbID,
                  poster: movies[selectedMovie].poster,
                }),
              });
            }}
            color="primary"
            variant="contained"
            disabled={input.title?.length === 0}
          >
            Save Movie
          </Button>
        </Actions>
      </DialogContent>
    </Dialog>
  );
};

export default AddMovieDialog;
