import { MouseEventHandler, ReactElement, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ClickAwayListener,
  ClickAwayListenerProps,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
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
import { useI18n } from "../../../../../../hooks/use-i18n";
import titlebarStrings from "../../i18n/i18n";

// The MUI Clickaway Listener component passes props like autoFocus and tabIndex through which causes
// console log errors and excess output in unit test logs. I couldn't find a workaround even though it has
// been reported and discussed by others. The suggestion I found which works is to use a wrapper that
// filters out any props that shouldn't passed through (such as autoFocus and tabIndex).
// This is because I'm using a div as the child and I haven't been able to find an MUI component or another
// alternative that will work.
export const MuiClickAwayListenerWrapper = ({
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  autoFocus,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  tabIndex,
  children,
  ...props
}: ClickAwayListenerProps & {
  autoFocus?: boolean;
  tabIndex?: number;
}): ReactElement | null => (
  <ClickAwayListener {...props}>{children}</ClickAwayListener>
);

const NavHamburger = (): ReactElement | null => {
  const { t } = useI18n(titlebarStrings);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lists, setList, clearPick, list } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  if (pathname === "/create" && !list) return null;

  return (
    <NavMenu>
      <IconButton onClick={handleClick} color="secondary" size="large">
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open}>
        <MuiClickAwayListenerWrapper onClickAway={handleClose}>
          <div>
            {pathname === "/pick" && (
              <>
                <MenuItem
                  onClick={(): void => {
                    clearPick();
                    handleClose();
                  }}
                >
                  <RefreshIcon /> {t("titlebar:nav.action_pick_again")}
                </MenuItem>

                <MenuDivider variant="middle" />
              </>
            )}

            {pathname !== "/" && (
              <MenuItem
                onClick={(): void => {
                  navigate("/");
                  handleClose();
                }}
              >
                <MovieIcon /> {t("titlebar:nav.action_movies")}
              </MenuItem>
            )}

            {pathname !== "/create" && (
              <>
                {!["/watched", "/add"].includes(pathname) &&
                  !pathname.startsWith("/edit/") && (
                    <MenuItem
                      onClick={(): void => {
                        navigate("/watched");
                        handleClose();
                      }}
                    >
                      <EyeIcon /> {t("titlebar:nav.action_watched")}
                    </MenuItem>
                  )}

                <MenuDivider variant="middle" />

                {lists?.map((list) => (
                  <MenuItem
                    key={list.id}
                    onClick={(): void => {
                      setList(list);
                      handleClose();
                    }}
                  >
                    <ListIcon /> {list.label}
                  </MenuItem>
                ))}

                <MenuItem
                  sx={{ fontStyle: "italic" }}
                  onClick={(): void => {
                    navigate("/create");
                    handleClose();
                  }}
                >
                  <AddListIcon /> {t("titlebar:nav.action_new_list")}
                </MenuItem>
              </>
            )}
          </div>
        </MuiClickAwayListenerWrapper>
      </Menu>
    </NavMenu>
  );
};

export default NavHamburger;
