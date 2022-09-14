import { MenuItem, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../../../../../context/app-context";
import { Select } from "./db-select.styles";

const NEW_LIST = "NEW_LIST";

const DbSelect = () => {
  const { lists, list, setList } = useAppContext();
  const navigate = useNavigate();

  return (
    <div>
      {lists && list && (
        <Select
          disableUnderline
          variant="standard"
          value={list.id}
          onChange={({ target }) => {
            if (target.value === NEW_LIST) {
              navigate("/create");
            } else {
              setList(lists.find(({ id }) => id === target.value));
              navigate("/");
            }
          }}
          renderValue={() => (
            <Button variant="nav" aria-label={list.label}>
              {list.label}
            </Button>
          )}
          aria-label="Choose a List"
        >
          {lists.map((list) => (
            <MenuItem key={list.id} value={list.id}>
              {list.label}
            </MenuItem>
          ))}
          <Divider variant="middle" />
          <MenuItem value={NEW_LIST} sx={{ fontStyle: "italic" }}>
            + New List
          </MenuItem>
        </Select>
      )}
    </div>
  );
};

export default DbSelect;
