import { type ReactElement, useRef, useState } from "react";
import { ClickAwayListener, Popover, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import {
  AppBarAvatar,
  AvatarButton,
  Profile,
  ProfileActions,
  ProfileAvatar,
  ProfileEmail,
  ProfileName,
  ProfilePaper,
} from "./profile-menu.styles";
import { useTranslation } from "react-i18next";

const ProfileMenu = (): ReactElement | null => {
  const { t } = useTranslation(["titlebar"]);
  const anchorRef = useRef(null);
  const { user, logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const onOpenMenu = (): void => setOpen(true);
  const onCloseMenu = (): void => setOpen(false);

  return user ? (
    <Profile>
      <AvatarButton
        ref={anchorRef}
        alt={user.name}
        src={user.picture}
        onClick={onOpenMenu}
      />
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: -8,
          horizontal: 0,
        }}
      >
        <ClickAwayListener onClickAway={onCloseMenu}>
          <ProfilePaper elevation={10}>
            <ProfileAvatar>
              <AppBarAvatar alt={user.name} src={user.picture} />
              <ProfileName>{user.name}</ProfileName>
              <ProfileEmail>{user.email}</ProfileEmail>
            </ProfileAvatar>

            <ProfileActions>
              <Button
                onClick={(): void => {
                  onCloseMenu();
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                }}
                variant="outlined"
              >
                {t("titlebar:profile.logout")}
              </Button>
            </ProfileActions>
          </ProfilePaper>
        </ClickAwayListener>
      </Popover>
    </Profile>
  ) : null;
};

export default ProfileMenu;
