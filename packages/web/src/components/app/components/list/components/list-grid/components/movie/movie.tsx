import React, { ReactElement, useRef, useState } from "react";
import { useSpring } from "react-spring";
import debounce from "lodash/debounce";

import {
  InfoLayout,
  InfoFooterLayout,
  InfoRuntime,
  MovieDetail,
  MovieDetailPositioner,
  MoviePosterContainer,
  MovieContainer,
  OverflowWrapper,
  movieDetailPositionerFocused,
  movieContainerFocused,
  StarRatingLayout,
  SourceLayout,
} from "./movie.styles";
import { formatRuntime } from "../../../../../../../../utils/format-runtime";
import DetailActions from "./components/detail-actions/detail-actions";
import MoviePoster from "../../../../../movie-poster/movie-poster";
import Ratings from "../../../ratings/ratings";
import FiveStarRating from "../../../../../five-star-rating/five-star-rating";
import Source from "./components/source/source";
import FullDetailModal from "../../../../../full-detail-modal/full-detail-modal";
import { useResponsive } from "../../../../../../../../hooks/use-responsive";
import { useUpdateMovie } from "../../../../../../../../graphql/mutations/update-movie";
import { useChangeBackdrop } from "./hooks/useChangeBackdrop";
import { Movie as MovieType } from "../../../../../../../../__generated__/graphql";
import { ListGridHandlers } from "../../types";

const isTouchInterface = "ontouchstart" in window;

const getCenterPoint = (
  rect?: DOMRect
): { x: number; y: number } | undefined => {
  if (!rect) return undefined;

  const { x, y, width, height } = rect;
  return { x: x + width / 2, y: y + height / 2 };
};

export type MovieProps = ListGridHandlers & {
  movie: MovieType;
};

const Movie = ({
  movie,
  onEditMovie,
  onMarkWatched,
  onRemoveMovie,
}: MovieProps): ReactElement => {
  const { mobile } = useResponsive();

  const ref = useRef<HTMLDivElement | null>(null);
  const centerPoint = getCenterPoint(ref.current?.getBoundingClientRect());

  const [infoState, setInfoState] = useState("actions");
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const switchToRatings = debounce(() => setInfoState("ratings"), 250);
  const focus = debounce(
    () => {
      setFocused(true);
    },
    isTouchInterface ? 0 : 500
  );
  const unfocus = (): void => {
    focus.cancel();
    setFocused(false);
    // This is ugly. Occasionally, posters get stuck in the focused state because they unfocus and then trigger a very fast
    // focus. Its a weird timing issue with the events, the debounce and the poster spring.
    // I don't want to lift the focus state up (two levels)... I want each poster to manage its own state.
    // This extra unfocus, as ugly as it is, cancels it when it occurs.
    setTimeout(() => setFocused(false), 100);
  };

  const posterSpring = useSpring({
    transform: focused
      ? mobile
        ? "scale3d(0.95, 0.95, 0.95)"
        : "scale3d(1,1,1)"
      : "scale3d(0.67,0.67,1)",
  });

  const actionsSpring = useSpring({
    transform:
      infoState === "actions" ? "translateX(0px)" : "translateX(240px)",
  });

  const ratingsSpring = useSpring({
    transform:
      infoState === "ratings" ? "translateX(0px)" : "translateX(-240px)",
  });

  const onCloseExpanded = (): void => setExpanded(false);
  const onChangeBackdrop = useChangeBackdrop(movie);

  useUpdateMovie(movie, focused);

  return (
    <>
      <MovieContainer
        key={movie.id}
        sx={[focused && movieContainerFocused]}
        onMouseOver={focus}
        onMouseEnter={focus}
        onMouseLeave={unfocus}
        ref={ref}
        data-testid={"listItem"}
      >
        <MoviePosterContainer>
          <MoviePoster movie={movie} />
        </MoviePosterContainer>

        <MovieDetailPositioner
          sx={[focused && movieDetailPositionerFocused]}
          onClick={(): void => {
            unfocus();
            setExpanded(true);
          }}
          data-testid="positioner"
        >
          <MovieDetail style={posterSpring}>
            <OverflowWrapper>
              <MoviePoster movie={movie} height={375} variant="zoom" />

              <InfoLayout>
                <StarRatingLayout
                  onMouseEnter={switchToRatings}
                  onMouseLeave={(): void => {
                    switchToRatings.cancel();
                    setInfoState("actions");
                  }}
                  onClick={(e): void => {
                    // OnClick, toggle the state.
                    // Works for desktop and mobile but mainly here for mobile.
                    setInfoState(
                      infoState === "ratings" ? "actions" : "ratings"
                    );

                    // This prevents the card from expanding when tapping the stars on mobile to
                    // display the ratings breakdown.
                    if (
                      "ontouchstart" in window ||
                      navigator.maxTouchPoints > 0
                    ) {
                      e.stopPropagation();
                    }
                  }}
                  data-testid="rating"
                >
                  <FiveStarRating stars={movie.fiveStarRating} />
                </StarRatingLayout>

                <InfoRuntime>{formatRuntime(movie.runtime)}</InfoRuntime>

                <InfoFooterLayout style={actionsSpring} data-testid="actions">
                  <DetailActions
                    movie={movie}
                    onEdit={(): void => {
                      setFocused(false);
                      onEditMovie(movie);
                    }}
                    onMarkWatched={(): void => {
                      setFocused(false);
                      onMarkWatched(movie);
                    }}
                    onToggleLock={(locked: boolean): void => {
                      onEditMovie({ ...movie, locked }, false);
                    }}
                    onDelete={(): void => {
                      setFocused(false);
                      onRemoveMovie(movie);
                    }}
                  />
                </InfoFooterLayout>

                <InfoFooterLayout style={ratingsSpring} data-testid="ratings">
                  <Ratings ratings={movie.ratings} size="small" dense />
                </InfoFooterLayout>

                <SourceLayout>
                  <Source source={movie.source} />
                </SourceLayout>
              </InfoLayout>
            </OverflowWrapper>
          </MovieDetail>
        </MovieDetailPositioner>
      </MovieContainer>

      <FullDetailModal
        preload={focused}
        open={expanded}
        centerPoint={centerPoint}
        onClose={onCloseExpanded}
        fullDetailProps={{
          movie,
          onChangeBackdrop,
          actionSet: "viewMovie",
        }}
      />
    </>
  );
};

export default React.memo(Movie);
