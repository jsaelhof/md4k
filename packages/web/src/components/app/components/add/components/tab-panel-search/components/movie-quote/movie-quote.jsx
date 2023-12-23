import { useMemo } from "react";
import { Attribution, Layout, Quote } from "./movie-quote.styles";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import tabPanelSearchStrings from "../../i18n/i18n";

export const MovieQuote = () => {
  const { t } = useI18n(tabPanelSearchStrings);

  const { quote, speaker, movie } = useMemo(() => {
    const quotes = Object.keys(tabPanelSearchStrings.en.tabPanelSearch.quotes);
    const i = Math.floor(Math.random() * quotes.length);
    return {
      quote: t(`tabPanelSearch:quotes.quote${i}.quote`),
      speaker: t(`tabPanelSearch:quotes.quote${i}.speaker`),
      movie: t(`tabPanelSearch:quotes.quote${i}.movie`),
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
