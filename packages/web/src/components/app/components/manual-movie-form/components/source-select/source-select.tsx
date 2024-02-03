import {
  MenuItem,
  Select,
  type SelectChangeEvent,
  type SelectProps,
} from "@mui/material";

import ListSelectItem from "../list-select-item/list-select-item";
import { type ReactElement } from "react";
import { type Source, sources } from "md4k-constants";
import { sourceLogos } from "../../../../../../constants/sources";
import { useTranslation } from "react-i18next";

export type SourceSelectProps = {
  value?: Source | null;
  onChange: (value: Source) => void;
  selectProps?: {
    inputRef?: SelectProps<number>["inputRef"];
  };
};

const SourceSelect = ({
  value,
  onChange,
  selectProps,
}: SourceSelectProps): ReactElement => {
  const { t } = useTranslation(["common"]);

  return (
    <Select<number>
      sx={{
        "& div": {
          padding: "6px 8px",
        },
      }}
      id="source"
      labelId="source"
      data-testid="source"
      variant="outlined"
      value={value || 0}
      onChange={({ target }: SelectChangeEvent<number>): void => {
        onChange(target.value as number); // Don't know why TS insists that value might also be a string.
      }}
      renderValue={(val: Source): ReactElement => (
        <ListSelectItem
          value={val}
          label={t(`common:sources.${val}`)}
          imageUrl={sourceLogos[val]}
        />
      )}
      fullWidth
      {...selectProps}
    >
      {sources.map((sourceValue) => (
        <MenuItem key={sourceValue} value={sourceValue}>
          <ListSelectItem
            value={sourceValue}
            label={t(`common:sources.${sourceValue}`)}
            imageUrl={sourceLogos[sourceValue]}
          />
        </MenuItem>
      ))}
    </Select>
  );
};

export default SourceSelect;
