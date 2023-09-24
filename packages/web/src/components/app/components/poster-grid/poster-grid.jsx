import { useI18n } from "../../../../hooks/use-i18n";
import SearchResult from "./components/poster-grid-item/poster-grid-item";
import { Layout } from "./poster-grid.styles";
import posterGridStrings from "./i18n/i18n";

const PosterGrid = ({ movies, onSearchResultClick, info }) => {
  const { t } = useI18n(posterGridStrings);

  <Layout aria-label={t("poster_grid:label")}>
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
  </Layout>;
};

export default PosterGrid;
