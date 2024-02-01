import { DetailButton, Layout } from "./actions.styles";
import TelevisionPlay from "mdi-material-ui/TelevisionPlay";
import TelevisionOff from "mdi-material-ui/TelevisionOff";
import { PropsWithChildren, ReactElement } from "react";
import { useTranslation } from "react-i18next";

export type ActionsProps = PropsWithChildren<{
  hasTrailer: boolean;
  onPlayTrailer: () => void;
}>;

export const Actions = ({
  hasTrailer,
  onPlayTrailer,
  children,
}: ActionsProps): ReactElement => {
  const { t } = useTranslation(["full_detail"]);

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
