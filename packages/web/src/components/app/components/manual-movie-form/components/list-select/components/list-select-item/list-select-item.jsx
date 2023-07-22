import { Item } from "./list-select-item.styles";

const ListSelectItem = ({ images, labels, value, hideLabelForSelection }) => (
  <Item value={value}>
    {images && <img src={images[value]} width="30" height="30" />}
    {!hideLabelForSelection && <span>{labels[value]}</span>}
  </Item>
);

export default ListSelectItem;
