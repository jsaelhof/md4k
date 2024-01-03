import { useI18n } from "../../../../hooks/use-i18n";
import PosterGridItem from "./components/poster-grid-item/poster-grid-item";
import { Layout } from "./poster-grid.styles";
import posterGridStrings from "./i18n/i18n";
import { SearchResult } from "../../../../__generated__/graphql";
import { ReactElement } from "react";

export type PosterGridProps = {
  searchResults: SearchResult[];
  onClick: (
    searchResult: SearchResult,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

const PosterGrid = ({
  searchResults,
  onClick,
}: PosterGridProps): ReactElement => {
  const { t } = useI18n(posterGridStrings);

  return (
    <Layout aria-label={t("poster_grid:label")}>
      {searchResults.map((searchResult, i) => (
        <PosterGridItem
          key={searchResult.title}
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
