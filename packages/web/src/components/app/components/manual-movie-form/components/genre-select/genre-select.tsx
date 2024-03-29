import {
  MenuItem,
  type SelectChangeEvent,
  type SelectProps,
} from "@mui/material";

import ListSelectItem from "../list-select-item/list-select-item";
import { type ReactElement } from "react";
import { type Genre, genres } from "md4k-constants";
import { useTranslation } from "react-i18next";
import { Select } from "./genre-select.styles";

export type GenreSelectProps = {
  value?: Genre | null;
  onChange: (value: Genre) => void;
  selectProps?: {
    inputRef?: SelectProps<number>["inputRef"];
  };
};

const GenreSelect = ({
  value,
  onChange,
  selectProps,
}: GenreSelectProps): ReactElement => {
  const { t } = useTranslation(["common"]);
  return (
    <Select
      id="genre"
      labelId="genre"
      data-testid="genre"
      variant="outlined"
      value={value || 0}
      onChange={({ target }: SelectChangeEvent<number>): void => {
        onChange(target.value as number); // Don't know why TS insists that value might also be a string.
      }}
      renderValue={(val: Genre): ReactElement => (
        <ListSelectItem value={val} label={t(`common:genres.${val}`)} />
      )}
      fullWidth
      {...selectProps}
    >
      {genres.map((genre) => (
        <MenuItem key={genre} value={genre}>
          <ListSelectItem value={genre} label={t(`common:genres.${genre}`)} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default GenreSelect;
