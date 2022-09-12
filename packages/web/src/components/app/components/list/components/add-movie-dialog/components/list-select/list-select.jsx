import { MenuItem, Select } from "@mui/material";

import ListSelectItem from "./components/list-select-item/list-select-item";

const ListSelect = ({
  value,
  values,
  onChange,
  hideLabelForSelection,
  ...props
}) => (
  <Select
    variant="outlined"
    value={value || 0}
    onChange={({ target }) => {
      if (onChange) onChange(target.value);
    }}
    renderValue={(value) => (
      <ListSelectItem
        hideLabelForSelection={hideLabelForSelection}
        value={value}
        {...props}
      />
    )}
    {...props}
  >
    {Object.values(values).map((value) => (
      <MenuItem key={value} value={value}>
        <ListSelectItem value={value} {...props} />
      </MenuItem>
    ))}
  </Select>
);

export default ListSelect;
