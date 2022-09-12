import { FooterLayout } from "./footer.styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterLayout>
      <Link to="/">Movies</Link>
      <Link to="/watched">Watched</Link>
    </FooterLayout>
  );
};

export default Footer;
