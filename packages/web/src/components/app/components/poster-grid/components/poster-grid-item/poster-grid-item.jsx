import { useSpring } from "react-spring";
import MoviePoster from "../../../movie-poster/movie-poster";
import { Layout, Title, Info } from "./poster-grid-item.styles";
import { format, parseISO } from "date-fns";

const PosterGridItem = ({ height, movie, delay, onClick, info }) => {
  const mountSpring = useSpring({
    from: {
      opacity: 0,
      transform: "scaleX(85%) translateY(-40px)",
    },
    to: {
      opacity: 1,
      transform: "scaleX(100%) translateY(0px)",
    },
    delay: delay * 50,
  });

  return (
    <Layout
      onClick={(event) => onClick && onClick(movie, event)}
      style={mountSpring}
    >
      <MoviePoster movie={movie} height={height} shadow />
      <Title>{movie.title}</Title>
      {info === "year" && <Info>{movie.year}</Info>}
      {info === "watchedOn" && (
        <Info>{format(parseISO(movie.watchedOn), "MMM do, yyyy")}</Info>
      )}
    </Layout>
  );
};

export default PosterGridItem;
