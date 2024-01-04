import { MenuItem, Button, Divider, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../../../../../context/app-context";
import { Select } from "./db-select.styles";
import { useI18n } from "../../../../../../hooks/use-i18n";
import titlebarStrings from "../../i18n/i18n";
import { ReactElement } from "react";

const NEW_LIST = "NEW_LIST";

const DbSelect = (): ReactElement | null => {
  const { t } = useI18n(titlebarStrings);
  const { lists, list, setList } = useAppContext();
  const navigate = useNavigate();

  if (!list) return null;

  return (
    <div>
      <Select
        disableUnderline
        variant="standard"
        value={list.id}
        onChange={({ target }: SelectChangeEvent<string>): void => {
          if (target.value === NEW_LIST) {
            navigate("/create");
          } else {
            const newList = lists.find(({ id }) => id === target.value);
            newList && setList(newList);
            navigate("/");
          }
        }}
        renderValue={(): ReactElement => (
          <Button variant="nav" aria-label={list.label}>
            {list.label}
          </Button>
        )}
        aria-label={t("titlebar:db_select.label")}
      >
        {lists.map((list) => (
          <MenuItem key={list.id} value={list.id}>
            {list.label}
          </MenuItem>
        ))}
        <Divider variant="middle" />
        <MenuItem value={NEW_LIST} sx={{ fontStyle: "italic" }}>
          {t("titlebar:db_select.new_list")}
        </MenuItem>
      </Select>
    </div>
  );
};

export default DbSelect;
