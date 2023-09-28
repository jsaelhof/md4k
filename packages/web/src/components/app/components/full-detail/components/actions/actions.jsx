import { DetailButton, Layout } from "./actions.styles";
import TelevisionPlay from "mdi-material-ui/TelevisionPlay";
import TelevisionOff from "mdi-material-ui/TelevisionOff";
import fullDetailStrings from "../../i18n/i18n";
import { useI18n } from "../../../../../../hooks/use-i18n";

export const Actions = ({ hasTrailer, onPlayTrailer, children }) => {
  const { t } = useI18n(fullDetailStrings);

  return (
    <Layout>
      {hasTrailer ? (
        <DetailButton
          color="primary"
          startIcon={<TelevisionPlay />}
          onClick={onPlayTrailer}
        >
          {t("full_detail:actions.watch_trailer")}
        </DetailButton>
      ) : (
        <DetailButton
          color="primary"
          startIcon={<TelevisionOff />}
          onClick={onPlayTrailer}
          disabled={true}
        >
          {t("full_detail:actions.no_trailer")}
        </DetailButton>
      )}

      {children}
    </Layout>
  );
};
