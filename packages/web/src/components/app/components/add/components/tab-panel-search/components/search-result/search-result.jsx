import { useSpring } from "react-spring";
import MoviePoster from "../../../../../movie-poster/movie-poster";
import { Layout, Title, Year } from "./search-result.styles";

const SearchResult = ({ height, movie, delay, onClick }) => {
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
    <Layout onClick={(event) => onClick(movie, event)} style={mountSpring}>
      <MoviePoster movie={movie} height={height} shadow />
      <Title>{movie.title}</Title>
      <Year>{movie.year}</Year>
    </Layout>
  );
};

export default SearchResult;
