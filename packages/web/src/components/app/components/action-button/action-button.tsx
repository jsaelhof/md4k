import { Tooltip } from "@mui/material";

import { ButtonContainer } from "./action-button.styles";
import { type SvgIconComponent } from "@mui/icons-material";
import { type ReactElement } from "react";

export type ActionButtonProps = {
  Icon: SvgIconComponent;
  tooltip?: string;
  size?: "sm" | "md" | "lg";
  critical?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const ActionButton = ({
  Icon,
  tooltip = "",
  size = "sm",
  critical = false,
  disabled = false,
  onClick,
}: ActionButtonProps): ReactElement => (
  <Tooltip
    title={tooltip}
    disableHoverListener={disabled}
    placement="top"
    enterDelay={1000}
    enterNextDelay={1000}
  >
    <ButtonContainer
      $size={size}
      $critical={critical}
      onClick={(e): void => {
        e.stopPropagation();
        !disabled && onClick();
      }}
    >
      <Icon fontSize="inherit" />
    </ButtonContainer>
  </Tooltip>
);

export default ActionButton;
