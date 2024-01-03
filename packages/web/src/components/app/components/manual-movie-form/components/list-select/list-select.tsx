import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";

import ListSelectItem from "./components/list-select-item/list-select-item";
import { ReactElement } from "react";

export type ListSelectProps = {
  value?: number | null;
  values: { [key: string]: number };
  onChange: (value: number) => void;
  hideLabelForSelection?: boolean;
  label: string;
  listSelectItemProps: {
    images?: { [key: number]: string };
    labels: { [key: number]: string };
  };
  selectProps: {
    inputRef: SelectProps<number>["inputRef"];
    fullWidth: SelectProps<number>["fullWidth"];
  };
};

const ListSelect = ({
  value,
  values,
  onChange,
  hideLabelForSelection,
  label,
  listSelectItemProps,
  selectProps,
}: ListSelectProps): ReactElement => (
  <Select<number>
    sx={{
      "& div": {
        padding: "6px 8px",
      },
    }}
    id={label}
    labelId={label}
    data-testid={label}
    variant="outlined"
    value={value || 0}
    onChange={({ target }: SelectChangeEvent<number>): void => {
      onChange(target.value as number); // Don't know why TS insists that value might also be a string.
    }}
    renderValue={(val: number): ReactElement => (
      <ListSelectItem
        hideLabelForSelection={hideLabelForSelection}
        value={val}
        labels={listSelectItemProps.labels}
        images={listSelectItemProps.images}
      />
    )}
    {...selectProps}
  >
    {Object.values(values).map((value) => (
      <MenuItem key={value} value={value}>
        <ListSelectItem
          value={value}
          labels={listSelectItemProps.labels}
          images={listSelectItemProps.images}
        />
      </MenuItem>
    ))}
  </Select>
);

export default ListSelect;
