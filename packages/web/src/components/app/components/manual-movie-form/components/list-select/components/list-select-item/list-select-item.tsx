import { ReactElement } from "react";
import { Item } from "./list-select-item.styles";

export type ListSelectItemProps = {
  images?: { [key: number]: string };
  labels: { [key: number]: string };
  value: number;
  hideLabelForSelection?: boolean;
};

const ListSelectItem = ({
  images,
  labels,
  value,
  hideLabelForSelection,
}: ListSelectItemProps): ReactElement => (
  <Item value={value}>
    {images && <img src={images[value]} width="30" height="30" />}
    {!hideLabelForSelection && <span>{labels[value]}</span>}
  </Item>
);

export default ListSelectItem;
