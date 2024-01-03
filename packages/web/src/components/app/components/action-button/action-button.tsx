import { Tooltip } from "@mui/material";

import { ButtonContainer } from "./action-button.styles";
import { SvgIconComponent } from "@mui/icons-material";
import { ReactElement } from "react";

export type ActionButtonProps = {
  Icon: SvgIconComponent;
  tooltip?: string;
  fontSize?: number;
  critical?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const ActionButton = ({
  Icon,
  tooltip = "",
  fontSize = 20,
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
      $critical={critical}
      sx={[{ fontSize }]}
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
