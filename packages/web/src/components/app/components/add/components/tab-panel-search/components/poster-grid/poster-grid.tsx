import PosterGridItem, {
  type PosterGridItemProps,
} from "./components/poster-grid-item/poster-grid-item";
import { Layout } from "./poster-grid.styles";
import { type SearchResult } from "../../../../../../../../__generated__/graphql";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type PosterGridProps = Pick<PosterGridItemProps, "onClick"> & {
  searchResults: SearchResult[];
};

const PosterGrid = ({
  searchResults,
  onClick,
}: PosterGridProps): ReactElement => {
  const { t } = useTranslation(["poster_grid"]);

  return (
    <Layout aria-label={t("poster_grid:label")}>
      {searchResults.map((searchResult, i) => (
        <PosterGridItem
          key={searchResult.imdbID}
          height={250}
          searchResult={searchResult}
          onClick={onClick}
          // This applies a delay factor to the last 10 movies (which are the newest 10 to be loaded)
          delay={Math.max(0, i - (searchResults.length - 10))}
        />
      ))}
    </Layout>
  );
};

export default PosterGrid;
