import { useNavigate } from "react-router-dom";

import { LogoContainer } from "./logo.styles";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

const Logo = (): ReactElement => {
  const { t } = useTranslation(["titlebar"]);
  const navigate = useNavigate();

  return (
    <LogoContainer
      onClick={(): void => {
        navigate("/");
      }}
      aria-label={t("titlebar:logo.label")}
    >
      <img
        width="82px"
        height="20px"
        src={"/images/logo.png"}
        alt="The Movie Decider 4000"
      />
    </LogoContainer>
  );
};

export default Logo;
