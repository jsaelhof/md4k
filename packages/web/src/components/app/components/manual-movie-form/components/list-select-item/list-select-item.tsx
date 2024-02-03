import { ReactElement } from "react";
import { Item } from "./list-select-item.styles";

export type ListSelectItemProps = {
  label: string;
  imageUrl?: string;
  value: number;
  hideLabelForSelection?: boolean;
};

const ListSelectItem = ({
  label,
  imageUrl,
  value,
  hideLabelForSelection,
}: ListSelectItemProps): ReactElement => (
  <Item value={value}>
    {imageUrl && <img src={imageUrl} width="30" height="30" />}
    {!hideLabelForSelection && <span>{label}</span>}
  </Item>
);

export default ListSelectItem;
