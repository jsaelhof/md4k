import { ReactElement } from "react";
import { sourceLogos } from "../../../../../../../../../../constants/sources";
import { useI18n } from "../../../../../../../../../../hooks/use-i18n";
import { SourceBorder, SourceImage, SourceLayout } from "./source.styles";
import { sources } from "md4k-constants";
import { ValueOf } from "../../../../../../../../../../types";

export type SourceProps = {
  source: ValueOf<typeof sources>;
};

const Source = ({ source }: SourceProps): ReactElement => {
  const { t } = useI18n();

  return (
    <SourceLayout>
      <SourceBorder />
      <SourceImage
        aria-label={t(`common:sources.${source}`)}
        sx={{
          backgroundImage: `url("${sourceLogos[source]}")`,
        }}
      />
    </SourceLayout>
  );
};

export default Source;
