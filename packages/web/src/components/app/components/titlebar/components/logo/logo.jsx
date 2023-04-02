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
      <img width="82px" height="20px" src={"/images/logo.png"} />
    </LogoContainer>
  );
};

export default Logo;
