import { type ReactElement } from "react";
import { sourceLogos } from "../../../../../../../../../../constants/sources";
import { SourceBorder, SourceImage, SourceLayout } from "./source.styles";
import { Source as SourceConstants } from "md4k-constants";
import { useTranslation } from "react-i18next";
import { type Maybe } from "../../../../../../../../../../__generated__/graphql";

export type SourceProps = {
  source?: Maybe<SourceConstants>;
};

const Source = ({ source }: SourceProps): ReactElement => {
  const { t } = useTranslation(["common"]);

  return (
    <SourceLayout>
      <SourceBorder />
      <SourceImage
        aria-label={t(`common:sources.${source ?? SourceConstants.NONE}`)}
        $logo={sourceLogos[source ?? SourceConstants.NONE]}
      />
    </SourceLayout>
  );
};

export default Source;
