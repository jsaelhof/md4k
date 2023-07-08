import SearchResult from "./components/poster-grid-item/poster-grid-item";
import { Layout } from "./poster-grid.styles";

const PosterGrid = ({ movies, onSearchResultClick, info }) => (
  <Layout aria-label="Search Results">
    {movies.map((movie, i) => (
      <SearchResult
        key={movie.title}
        height={250}
        movie={movie}
        onClick={onSearchResultClick}
        // This applies a delay factor to the last 10 movies (which are the newest 10 to be loaded)
        delay={Math.max(0, i - (movies.length - 10))}
        info={info}
      />
    ))}
  </Layout>
);

export default PosterGrid;
