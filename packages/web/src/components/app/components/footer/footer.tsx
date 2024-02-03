import { FooterLayout } from "./footer.styles";
import { Link } from "react-router-dom";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

const Footer = (): ReactElement => {
  const { t } = useTranslation(["footer"]);
  return (
    <FooterLayout>
      <Link to="/">{t("footer:movies")}</Link>
      <Link to="/watched">{t("footer:watched")}</Link>
    </FooterLayout>
  );
};

export default Footer;
