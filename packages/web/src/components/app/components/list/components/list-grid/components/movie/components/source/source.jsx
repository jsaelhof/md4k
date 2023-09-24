import { sourceLogos } from "../../../../../../../../../../constants/sources";
import { useI18n } from "../../../../../../../../../../hooks/use-i18n";
import { SourceBorder, SourceImage, SourceLayout } from "./source.styles";

const Source = ({ source }) => {
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
