import { useLocation } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Refresh from "@mui/icons-material/Refresh";

import { Nav } from "./nav-full.styles";
import { useAppContext } from "../../../../../../context/app-context";
import DbSelect from "../db-select/db-select";
import NavButton from "../nav-button/nav-button";

const NavFull = () => {
  const { pathname } = useLocation();
  const { list, clearPick } = useAppContext();

  const returnToMoviesNavButton = (
    <NavButton startIcon={<KeyboardArrowLeft />} href="/">
      Return to Movies
    </NavButton>
  );

  return (
    <Nav>
      {pathname === "/pick" && (
        <>
          {returnToMoviesNavButton}

          <NavButton startIcon={<Refresh />} onClick={clearPick}>
            Pick Again
          </NavButton>
        </>
      )}

      {pathname === "/create" && list && returnToMoviesNavButton}

      {!["/pick", "/create"].includes(pathname) && (
        <>
          {pathname !== "/" &&
            !pathname.startsWith("/list") &&
            returnToMoviesNavButton}

          {pathname !== "/watched" && (
            <NavButton href="/watched">Watched</NavButton>
          )}

          <DbSelect />
        </>
      )}
    </Nav>
  );
};

export default NavFull;
