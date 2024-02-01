import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

export type NavButtonProps = {
  href?: string;
  onClick?: () => void;
  startIcon?: ReactNode;
};

const NavButton = ({
  children,
  href,
  onClick,
  startIcon,
}: PropsWithChildren<NavButtonProps>): ReactElement => {
  const navigate = useNavigate();

  return (
    <Button
      variant="nav"
      startIcon={startIcon}
      onClick={(): void => {
        onClick ? onClick() : href && navigate(href);
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
