import MoviePoster from "../../../../../../../movie-poster/movie-poster";
import { Layout, Title, Year } from "./carousel-poster.styles";

const CarouselPoster = ({ height, movie, onClick }) => (
  <Layout onClick={onClick}>
    <MoviePoster movie={movie} height={height} shadow />
    <Title>{movie.title}</Title>
    <Year>{movie.year}</Year>
  </Layout>
);

export default CarouselPoster;
