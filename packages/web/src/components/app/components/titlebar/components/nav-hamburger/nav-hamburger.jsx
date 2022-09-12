import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClickAwayListener, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppContext } from "../../../../../../context/app-context";
import {
  AddListIcon,
  EyeIcon,
  ListIcon,
  MenuDivider,
  MovieIcon,
  NavMenu,
  RefreshIcon,
} from "./nav-hamburger.styles";

const NavHamburger = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lists, setList, clearPick, list } = useAppContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (pathname === "/create" && !list) return null;

  return (
    <NavMenu>
      <IconButton onClick={handleClick} color="secondary" size="large">
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open}>
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            {pathname === "/pick" && (
              <>
                <MenuItem
                  onClick={() => {
                    clearPick();
                    handleClose();
                  }}
                >
                  <RefreshIcon /> Pick again
                </MenuItem>

                <MenuDivider variant="middle" />
              </>
            )}

            {pathname !== "/" && (
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleClose();
                }}
              >
                <MovieIcon /> Movies
              </MenuItem>
            )}

            {pathname !== "/create" && (
              <>
                {pathname !== "/watched" && (
                  <MenuItem
                    onClick={() => {
                      navigate("/watched");
                      handleClose();
                    }}
                  >
                    <EyeIcon /> Watched
                  </MenuItem>
                )}

                <MenuDivider variant="middle" />

                {lists?.map((list) => (
                  <MenuItem
                    key={list.id}
                    onClick={() => {
                      setList(list);
                      handleClose();
                    }}
                  >
                    <ListIcon /> {list.label}
                  </MenuItem>
                ))}

                <MenuItem
                  sx={{ fontStyle: "italic" }}
                  onClick={() => {
                    navigate("/create");
                    handleClose();
                  }}
                >
                  <AddListIcon /> New List
                </MenuItem>
              </>
            )}
          </div>
        </ClickAwayListener>
      </Menu>
    </NavMenu>
  );
};

export default NavHamburger;
