import { type ReactElement, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useSpring } from "react-spring";
import CloseThick from "mdi-material-ui/CloseThick";
import isNil from "lodash/isNil";

import { formatRuntime } from "../../../../utils/format-runtime";
import { searchStreaming, searchTMDB } from "../../../../utils/search";
import { Source } from "md4k-constants";
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
  SourceLogo,
  TrailerLayout,
} from "./full-detail.styles";
import { FullDetailSkeleton } from "./components/full-detail-skeleton/full-detail.skeleton";
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
import { type Movie } from "../../../../__generated__/graphql";
import { notEmpty } from "../../../../utils/not-empty";
import { useTranslation } from "react-i18next";
import type resources from "../../../../__generated__/resources";
import { type NewMovie } from "../../../../graphql/types";

export type FullDetailProps = {
  movie: Omit<Movie, "id" | "list">; // This needs to omit id and list because it could be a SearchResult which creates additional type issues. This makes Movie basically an interface/Partial but with a required title.
  showCloseButton?: boolean;
  onClose?: () => void;
  actionSet?: "addMovie" | "viewMovie";
  onAddMovie?: (movie: NewMovie) => void;
  onChangeBackdrop?: (url: string) => void;
};

const FullDetail = ({
  movie,
  showCloseButton = false,
  onClose,
  actionSet = "viewMovie",
  onAddMovie,
  onChangeBackdrop,
}: FullDetailProps): ReactElement => {
  const { t } = useTranslation(["full_detail", "common"]);
  const small = useMediaQuery("(max-width: 750px)");
  const noPlotScroll = useMediaQuery("(max-width: 660px), (max-height: 414px)");
  const trailerOverlay = useMediaQuery(
    "(max-width: 500px), (max-height: 414px)"
  );

  const { data, loading } = useGetThirdPartyFullDetails(movie.imdbID);

  const [trailer, setTrailer] = useState<string | null>(null);

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

  const source = (
    !isNil(movie.source)
      ? movie.source
      : !isNil(data.source)
      ? data.source
      : Source.NONE
  ) as Source;

  const canStream = ![Source.DVD, Source.NONE].includes(source);

  const backdrop = useMemo(
    () => movie.background || data.backdrops?.[0],
    [data.backdrops, movie.background]
  );

  return loading ? (
    <FullDetailSkeleton
      showCloseButton={showCloseButton}
      small={small}
      {...(onClose && { onClose })}
    />
  ) : (
    <FullDetailLayout>
      {showCloseButton && (
        <CloseButton $useColorBlend={!!backdrop} onClick={onClose}>
          <CloseThick />
        </CloseButton>
      )}

      <BackdropWrapper>
        <Backdrop
          data-testid={backdrop}
          $backdrop={backdrop}
          style={{
            ...fadeSpring,
          }}
        />

        {(data.backdrops ?? []).length > 1 && (
          <PrevBackgroundButton
            onClick={(): void => {
              if (data.backdrops && onChangeBackdrop) {
                onChangeBackdrop(
                  getNeighbor(data.backdrops.filter(notEmpty), backdrop, false)
                );
              }
            }}
          >
            <ChevronLeft />
          </PrevBackgroundButton>
        )}

        {(data.backdrops ?? []).length > 1 && (
          <NextBackgroundButton
            onClick={(): void => {
              if (data.backdrops && onChangeBackdrop) {
                onChangeBackdrop(
                  getNeighbor(data.backdrops.filter(notEmpty), backdrop)
                );
              }
            }}
          >
            <ChevronRight />
          </NextBackgroundButton>
        )}

        {trailer && !trailerOverlay && (
          <TrailerLayout>
            <Trailer
              trailerId={trailer}
              onComplete={(): void => setTrailer(null)}
            />
          </TrailerLayout>
        )}
      </BackdropWrapper>

      {trailer &&
        trailerOverlay &&
        createPortal(
          <Trailer
            overlay
            trailerId={trailer}
            onComplete={(): void => setTrailer(null)}
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

        <MovieTitle $size={small || movie.title.length >= 25 ? "sm" : "lg"}>
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
          <div>
            {movie.genre
              ? t(
                  `common:genres.${
                    movie.genre.toString() as keyof typeof resources.common.genres
                  }`
                )
              : t("full_detail:no_genre")}
          </div>
          <Rated rated={data.rated} />
        </MovieData>

        <SourceLogo
          $streamable={canStream}
          src={sourceLogosLarge[source]}
          alt={t(`common:sources.${source}`)}
          onClick={(): void => {
            canStream &&
              window.open(searchStreaming(movie.title, source), "movieView");
          }}
        />

        <PlotLayout>
          <ScrollArea text={data.plot} noScroll={noPlotScroll} />
        </PlotLayout>

        <Actions
          hasTrailer={data.trailer?.site === "YouTube"}
          onPlayTrailer={(): void => {
            data.trailer?.key && setTrailer(data.trailer.key);
          }}
        >
          {actionSet === "addMovie" && onAddMovie && (
            <ActionsAdd
              onAddMovie={(): void => {
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
              <Cast key={castMember?.id} {...castMember} />
            ))}
            {(data.director || []).slice(0, 1).map((director) => (
              <Cast
                key={director?.id}
                {...director}
                character={t("full_detail:director")}
              />
            ))}
          </>
        </CastLayout>
      )}

      <Footer title={movie.title} imdbID={movie.imdbID} />
    </FullDetailLayout>
  );
};

const getNeighbor = (
  arr: string[],
  item: string | null | undefined,
  ahead = true
): string => {
  const currentIndex = arr.findIndex((val) => val === item);
  const index = (currentIndex + (ahead ? 1 : arr.length - 1)) % arr.length;
  return arr[index];
};

export default FullDetail;
