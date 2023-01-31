import { format, parseISO } from "date-fns";
import { useState, useMemo } from "react";
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
import { useSpring } from "react-spring";

const WatchedMovie = ({
  movie,
  right = false,
  isEditing,
  onEditMovie,
  onSave,
  onCancel,
  onDelete,
}) => {
  const { data } = useGetThirdPartyFullDetails(movie);

  const small = useMediaQuery("(max-width: 550px)");
  const xsmall = useMediaQuery("(max-width: 430px)");
  const [datePickerMounted, setDatePickerMounted] = useState(null);

  const calendarSpring = useSpring({
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
    () => new Date(movie.watchedOn),
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
          parseISO(movie.watchedOn),
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
      onClick={() => {
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
            onSave={(day) => {
              onSave({
                ...movie,
                watchedOn: day.toISOString(),
              });
            }}
            onCancel={() => {
              onCancel();
            }}
            onDelete={() => {
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
