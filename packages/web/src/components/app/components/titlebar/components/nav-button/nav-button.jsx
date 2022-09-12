import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NavButton = ({ children, href, onClick, ...props }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="nav"
      {...props}
      onClick={() => {
        onClick ? onClick() : navigate(href);
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
