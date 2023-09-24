import { FooterLayout } from "./footer.styles";
import { Link } from "react-router-dom";
import footerStrings from "./i18n/i18n";
import {useI18n} from "../../../../hooks/use-i18n";

const Footer = () => {
  const {t} = useI18n(footerStrings);
  return (
    <FooterLayout>
      <Link to="/">{t("footer:movies")}</Link>
      <Link to="/watched">{t("footer:watched")}</Link>
    </FooterLayout>
  );
};

export default Footer;
