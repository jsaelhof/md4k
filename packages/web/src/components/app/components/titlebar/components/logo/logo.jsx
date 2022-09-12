import { useNavigate } from "react-router-dom";

import { LogoContainer } from "./logo.styles";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer
      onClick={() => {
        navigate("/");
      }}
      aria-label="Movie Decider 4000"
    >
      <img style={{ height: 20 }} src={"/images/logo.png"} />
    </LogoContainer>
  );
};

export default Logo;
