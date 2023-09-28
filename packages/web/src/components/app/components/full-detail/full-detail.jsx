import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useSpring } from "react-spring";
import CloseThick from "mdi-material-ui/CloseThick";

import { formatRuntime } from "../../../../utils/format-runtime";
import { searchStreaming, searchTMDB } from "../../../../utils/search";
import { sources } from "md4k-constants";
import { useGetThirdPartyFullDetails } from "../../../../graphql/queries";
import {
  Backdrop,
  BackdropWrapper,
  CastLayout,
  CloseButton,
  FullDetailLayout,
  MovieData,
  MovieInfo,
  MovieTitle,
  NextBackgroundButton,
  PlotLayout,
  Poster,
  PrevBackgroundButton,
  RatingsArea,
  smallMovieTitle,
  Source,
  streamable,
  TrailerLayout,
} from "./full-detail.styles";
import { FullDetailSkeleton } from "./full-detail.skeleton";
import MoviePoster from "../movie-poster/movie-poster";
import Rated from "./components/rated/rated";
import Trailer from "./components/trailer/trailer";
import ScrollArea from "./components/scroll-area/scroll-area";
import Footer from "./components/footer/footer";
import { StarRatingLayout } from "./components/star-rating-layout/star-rating-layout";
import { sourceLogosLarge } from "../../../../constants/sources";
import pick from "lodash/pick";
import { ActionsAdd } from "./components/actions-add/actions-add";
import { ActionsView } from "./components/actions-view/actions-view";
import Cast from "./components/cast/cast";
import { Actions } from "./components/actions/actions";
import { useI18n } from "../../../../hooks/use-i18n.js";
import fullDetailStrings from "./i18n/i18n";

const FullDetail = ({
  movie,
  showCloseButton = false,
  onClose,
  actionSet = "viewMovie",
  onAddMovie,
  onChangeBackdrop,
}) => {
  const { t } = useI18n(fullDetailStrings);
  const small = useMediaQuery("(max-width: 750px)");
  const noPlotScroll = useMediaQuery("(max-width: 660px), (max-height: 414px)");
  const trailerOverlay = useMediaQuery(
    "(max-width: 500px), (max-height: 414px)"
  );

  const { data, loading } = useGetThirdPartyFullDetails(movie);

  const [trailer, setTrailer] = useState(null);

  const fadeSpring = useSpring({
    opacity: data ? 1 : 0,
  });

  const growSpring = useSpring({
    from: {
      transform: "translateX(-100px)",
    },
    transform: data ? "translateX(0)" : "translateX(-100px)",
    reset: data === null,
  });

  const search = useCallback(() => {
    window.open(searchTMDB(movie.title), "moviedb");
  }, [movie]);

  const source = movie.source || data.source || sources.NONE;
  const canStream = ![sources.DVD, sources.NONE].includes(source);

  const backdrop = useMemo(
    () => movie.background || data.backdrops?.[0],
    [data.backdrops, movie.background]
  );

  return loading ? (
    <FullDetailSkeleton
      showCloseButton={showCloseButton}
      onClose={onClose}
      small={small}
    />
  ) : (
    <FullDetailLayout>
      {showCloseButton && (
        <CloseButton onClick={onClose}>
          <CloseThick />
        </CloseButton>
      )}

      <BackdropWrapper>
        <Backdrop
          data-testid={backdrop}
          sx={[
            {
              backgroundImage: `url("${backdrop}")`,
            },
          ]}
          style={{
            ...fadeSpring,
          }}
        />

        <PrevBackgroundButton
          onClick={() => {
            if (data.backdrops) {
              onChangeBackdrop(getNeighbor(data.backdrops, backdrop, false));
            }
          }}
        >
          <ChevronLeft />
        </PrevBackgroundButton>

        <NextBackgroundButton
          onClick={() => {
            if (data.backdrops) {
              onChangeBackdrop(getNeighbor(data.backdrops, backdrop));
            }
          }}
        >
          <ChevronRight />
        </NextBackgroundButton>

        {trailer && !trailerOverlay && (
          <TrailerLayout>
            <Trailer trailerId={trailer} onComplete={() => setTrailer(null)} />
          </TrailerLayout>
        )}
      </BackdropWrapper>

      {trailer &&
        trailerOverlay &&
        createPortal(
          <Trailer
            overlay
            trailerId={trailer}
            onComplete={() => setTrailer(null)}
          />,
          document.body
        )}

      <MovieInfo>
        <Poster style={growSpring}>
          <MoviePoster
            height={small ? 300 : 400}
            movie={movie}
            onClick={search}
            noLock
            variant="zoom"
          />
        </Poster>

        <MovieTitle
          sx={[(small || movie.title.length >= 25) && smallMovieTitle]}
        >
          <div>{movie.title}</div>

          <RatingsArea>
            <StarRatingLayout
              stars={data.fiveStarRating}
              ratings={data.ratings}
            />
          </RatingsArea>
        </MovieTitle>

        <MovieData>
          <div>{formatRuntime(data.runtime)}</div>
          <div>{movie.year}</div>
          <div>{t(`common:genres.${movie.genre}`)}</div>
          <Rated rated={data.rated} />
        </MovieData>

        <Source
          sx={[canStream && streamable]}
          src={sourceLogosLarge[source]}
          alt={t(`common:sources.${source}`)}
          onClick={() =>
            canStream &&
            window.open(searchStreaming(movie.title, source), "movieView")
          }
        />

        <PlotLayout>
          <ScrollArea text={data.plot} noScroll={noPlotScroll} />
        </PlotLayout>

        <Actions
          actionSet={actionSet}
          hasTrailer={data.trailer?.site === "YouTube"}
          onPlayTrailer={() => {
            setTrailer(data.trailer.key);
          }}
        >
          {actionSet === "addMovie" && (
            <ActionsAdd
              onAddMovie={() => {
                onAddMovie({
                  ...pick(movie, ["imdbID", "title", "poster", "year"]),
                  ...pick(data, ["source", "ratings", "genre", "runtime"]),
                  ...(data.backdrop && { background: backdrop }),
                });
              }}
            />
          )}

          {actionSet === "viewMovie" && (
            <ActionsView title={movie.title} source={source} />
          )}
        </Actions>
      </MovieInfo>

      {(data.cast?.length || data.director?.length) && (
        <CastLayout>
          <>
            {(data.cast || []).slice(0, 3).map((castMember) => (
              <Cast key={castMember.id} {...castMember} />
            ))}
            {(data.director || []).slice(0, 1).map((director) => (
              <Cast
                key={director.id}
                {...director}
                character={t("full_detail:director")}
              />
            ))}
          </>
        </CastLayout>
      )}

      <Footer movie={movie} />
    </FullDetailLayout>
  );
};

const getNeighbor = (arr, item, forward = true) => {
  const currentIndex = arr.findIndex((val) => val === item);
  const index = (currentIndex + (forward ? 1 : arr.length - 1)) % arr.length;
  return arr[index];
};

export default FullDetail;
