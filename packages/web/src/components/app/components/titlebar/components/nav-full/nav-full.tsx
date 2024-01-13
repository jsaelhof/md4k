import { useLocation } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Refresh from "@mui/icons-material/Refresh";

import { Nav } from "./nav-full.styles";
import { useAppContext } from "../../../../../../context/app-context";
import DbSelect from "../db-select/db-select";
import NavButton from "../nav-button/nav-button";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const NavFull = (): ReactElement => {
  const { t } = useTranslation(["titlebar"]);
  const { pathname } = useLocation();
  const { list, clearPick } = useAppContext();

  const returnToMoviesNavButton = (
    <NavButton startIcon={<KeyboardArrowLeft />} href="/">
      {t("titlebar:nav.action_return_movies")}
    </NavButton>
  );

  return (
    <Nav>
      {pathname === "/pick" && (
        <>
          {returnToMoviesNavButton}

          <NavButton startIcon={<Refresh />} onClick={clearPick}>
            {t("titlebar:nav.action_pick_again")}
          </NavButton>
        </>
      )}

      {pathname === "/create" && list && returnToMoviesNavButton}

      {!["/pick", "/create"].includes(pathname) && (
        <>
          {pathname !== "/" &&
            !pathname.startsWith("/list") &&
            returnToMoviesNavButton}

          {!["/watched", "/add"].includes(pathname) &&
            !pathname.startsWith("/edit/") && (
              <NavButton href="/watched">
                {t("titlebar:nav.action_watched")}
              </NavButton>
            )}

          <DbSelect />
        </>
      )}
    </Nav>
  );
};

export default NavFull;
