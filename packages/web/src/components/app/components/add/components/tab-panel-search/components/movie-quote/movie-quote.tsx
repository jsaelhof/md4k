import { ReactElement, useMemo } from "react";
import { Attribution, Layout, Quote } from "./movie-quote.styles";
import { useTranslation } from "react-i18next";
import resources from "../../../../../../../../__generated__/resources";

export const MovieQuote = (): ReactElement => {
  const { t } = useTranslation(["tab_panel_search"]);

  const { quote, speaker, movie } = useMemo(() => {
    const quotes = Object.keys(resources.tab_panel_search.quotes);
    const i = Math.floor(Math.random() * quotes.length);
    const quoteKey =
      `quote${i}` as keyof typeof resources.tab_panel_search.quotes;
    return {
      quote: t(`tab_panel_search:quotes.${quoteKey}.quote`),
      speaker: t(`tab_panel_search:quotes.${quoteKey}.speaker`),
      movie: t(`tab_panel_search:quotes.${quoteKey}.movie`),
    };
  }, [t]);

  return (
    <Layout data-testid="quote">
      <Quote>&ldquo;{quote}&rdquo;</Quote>
      <Attribution>
        &mdash; {speaker}&nbsp;&nbsp; | &nbsp;&nbsp;{movie}
      </Attribution>
    </Layout>
  );
};
