import {
  MenuItem,
  Button,
  Divider,
  type SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../../../../../context/app-context";
import { NewListMenuItem, Select } from "./db-select.styles";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

const NEW_LIST = "NEW_LIST";

const DbSelect = (): ReactElement | null => {
  const { t } = useTranslation(["titlebar"]);
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
        inputProps={{
          "aria-label": list.label,
        }}
      >
        {lists.map((list) => (
          <MenuItem key={list.id} value={list.id} aria-label={list.label}>
            {list.label}
          </MenuItem>
        ))}
        <Divider variant="middle" />
        <NewListMenuItem value={NEW_LIST}>
          {t("titlebar:db_select.new_list")}
        </NewListMenuItem>
      </Select>
    </div>
  );
};

export default DbSelect;
