import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";

import ListSelectItem from "./components/list-select-item/list-select-item";
import { ReactElement } from "react";
import { Genre, Source, genres, sources } from "md4k-constants";

export type ListSelectProps = {
  value?: Genre | Source | null;
  values: typeof sources | typeof genres;
  onChange: (value: number) => void;
  hideLabelForSelection?: boolean;
  label: string;
  listSelectItemProps: {
    variant: "sources" | "genres";
    images?: { [key: number]: string };
  };
  selectProps?: {
    inputRef?: SelectProps<number>["inputRef"];
    fullWidth?: SelectProps<number>["fullWidth"];
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
        variant={listSelectItemProps.variant}
        hideLabelForSelection={hideLabelForSelection}
        value={val}
        images={listSelectItemProps.images}
      />
    )}
    {...selectProps}
  >
    {Object.values(values).map((value) => (
      <MenuItem key={value} value={value}>
        <ListSelectItem
          value={value}
          variant={listSelectItemProps.variant}
          images={listSelectItemProps.images}
        />
      </MenuItem>
    ))}
  </Select>
);

export default ListSelect;
