import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";

import Refresh from "@mui/icons-material/Refresh";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../../../context/app-context";
import ProfileMenu from "./components/profile-menu/profile-menu";
import NavFull from "./components/nav-full/nav-full";
import Logo from "./components/logo/logo";
import NavHamburger from "./components/nav-hamburger/nav-hamburger";
import {
  appBarContainerStyles,
  PickAgainButton,
  pickScreenToolbarStyles,
  toolbarStyles,
} from "./titlebar.styles";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const TitleBar = (): ReactElement => {
  const { t } = useTranslation(["titlebar"]);
  const { movies, clearPick } = useAppContext();
  const mobileNav = useMediaQuery("(max-width: 580px)");
  const { pathname } = useLocation();

  const isPickScreen = pathname === "/pick";

  return (
    <Box sx={appBarContainerStyles}>
      <AppBar position="static" color="transparent" elevation={2}>
        <Toolbar sx={[toolbarStyles, isPickScreen && pickScreenToolbarStyles]}>
          <Logo />
          {movies && (mobileNav ? <NavHamburger /> : <NavFull />)}

          {/* In the small view, keep a pick again button in the main nav area. It's also in the hamburger menu */}
          {movies && mobileNav && isPickScreen && (
            <PickAgainButton startIcon={<Refresh />} onClick={clearPick}>
              {t("titlebar:pick_again")}
            </PickAgainButton>
          )}
          <ProfileMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TitleBar;
