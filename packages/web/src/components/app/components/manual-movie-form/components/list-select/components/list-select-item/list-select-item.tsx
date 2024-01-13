import { ReactElement } from "react";
import { Item } from "./list-select-item.styles";
import { useTranslation } from "react-i18next";
import resources from "../../../../../../../../__generated__/resources";

export type ListSelectItemProps = {
  variant: "sources" | "genres";
  images?: { [key: number]: string };
  value: number;
  hideLabelForSelection?: boolean;
};

const ListSelectItem = ({
  variant,
  images,
  value,
  hideLabelForSelection,
}: ListSelectItemProps): ReactElement => {
  const { t } = useTranslation(["common"]);

  return (
    <Item value={value}>
      {images && <img src={images[value]} width="30" height="30" />}
      {!hideLabelForSelection && (
        <span>
          {/* This cast is NOT great but should be cleaned up when specializing the list selects for sources and genres */}
          {t(
            `common:${variant}.${
              value.toString() as keyof typeof resources.common.sources &
                keyof typeof resources.common.genres
            }`
          )}
        </span>
      )}
    </Item>
  );
};

export default ListSelectItem;
