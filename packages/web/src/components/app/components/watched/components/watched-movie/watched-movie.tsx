import { format, parseISO } from "date-fns";
import { useState, useMemo, type ReactElement } from "react";
import { useGetThirdPartyFullDetails } from "../../../../../../graphql/queries";
import DatePicker from "../date-picker/date-picker";
import MoviePoster from "../../../movie-poster/movie-poster";
import {
  Backdrop,
  BackdropWrapper,
  Container,
  InfoLayout,
  PosterLayout,
  InfoTitle,
  InfoDate,
  Content,
} from "./watched-movie.styles";
import { useMediaQuery } from "@mui/material";
import { type SpringValues, useSpring } from "react-spring";
import { type Movie } from "../../../../../../__generated__/graphql";

export type WatchedMovieProps = {
  movie: Movie;
  right?: boolean;
  isEditing: boolean;
  onEditMovie: (movie: Movie) => void;
  onSave: (movie: Movie) => void;
  onCancel: () => void;
  onDelete: (movie: Movie) => void;
};

const WatchedMovie = ({
  movie,
  right = false,
  isEditing,
  onEditMovie,
  onSave,
  onCancel,
  onDelete,
}: WatchedMovieProps): ReactElement => {
  const { data } = useGetThirdPartyFullDetails(movie.imdbID);

  const small = useMediaQuery("(max-width: 550px)");
  const xsmall = useMediaQuery("(max-width: 430px)");
  const [datePickerMounted, setDatePickerMounted] = useState<boolean | null>(
    null
  );

  const calendarSpring: SpringValues<{ mounted: number }> = useSpring({
    mounted: isEditing ? 1 : 0,
    transform: isEditing
      ? "translateX(0px)"
      : `translateX(${right ? "-" : ""}200px)`,
    opacity: isEditing ? 1 : 0,
    onRest: ({ value: { mounted } }) => {
      !mounted && setDatePickerMounted(false);
    },
  });

  const watchedDate = useMemo(
    () => new Date(movie.watchedOn ?? 0),
    [movie.watchedOn]
  );

  const nodes = [
    <PosterLayout key={`${movie.id}-poster`}>
      <MoviePoster movie={movie} height={small ? 200 : 270} />
    </PosterLayout>,
    <InfoLayout key={`${movie.id}-info`} $right={right} data-testid="info">
      <InfoTitle>{movie.title}</InfoTitle>
      <InfoDate>
        {format(
          parseISO(movie.watchedOn ?? "0"),
          (xsmall && "EEE, MMM do, yyyy") ||
            (small && "EEEE, MMM do, yyyy") ||
            "EEEE, MMMM do, yyyy"
        )}
      </InfoDate>
    </InfoLayout>,
  ];

  return (
    <Container
      aria-label={movie.title}
      data-id={movie.id}
      key={movie.id}
      onClick={(): void => {
        if (isEditing) {
          onCancel();
        } else {
          setDatePickerMounted(true);
          onEditMovie({ ...movie });
        }
      }}
    >
      <BackdropWrapper>
        <Backdrop
          sx={{
            backgroundImage: `url(${movie.background || data?.backdrop})`,
          }}
        />
      </BackdropWrapper>
      <Content $right={right} data-testid="content">
        {right ? nodes.reverse() : nodes}

        {datePickerMounted && (
          <DatePicker
            spring={calendarSpring}
            useDrawer={small}
            title={movie.title}
            right={right}
            defaultDate={watchedDate}
            onSave={(day): void => {
              onSave({
                ...movie,
                watchedOn: day.toISOString(),
              });
            }}
            onCancel={(): void => {
              onCancel();
            }}
            onDelete={(): void => {
              onCancel();
              onDelete(movie);
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default WatchedMovie;
