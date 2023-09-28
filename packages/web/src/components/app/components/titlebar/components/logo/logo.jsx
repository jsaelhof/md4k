import { useNavigate } from "react-router-dom";

import { LogoContainer } from "./logo.styles";
import { useI18n } from "../../../../../../hooks/use-i18n";
import titlebarStrings from "../../i18n/i18n";

const Logo = () => {
  const { t } = useI18n(titlebarStrings);
  const navigate = useNavigate();

  return (
    <LogoContainer
      onClick={() => {
        navigate("/");
      }}
      aria-label={t("titlebar:logo.label")}
    >
      <img width="82px" height="20px" src={"/images/logo.png"} />
    </LogoContainer>
  );
};

export default Logo;
