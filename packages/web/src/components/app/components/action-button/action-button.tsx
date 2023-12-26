import { Tooltip } from "@mui/material";

import {
  ButtonContainer,
  buttonContainerDisabled,
} from "./action-button.styles";
import { Movie } from "../../../../__generated__/graphql";
import { SvgIconComponent } from "@mui/icons-material";

export type ActionButtonProps = {
  Icon: SvgIconComponent;
  tooltip?: string;
  movie: Movie;
  fontSize: number;
  critical: boolean;
  disabled: boolean;
  onClick: (movie: Movie) => void;
};

const ActionButton = ({
  Icon,
  tooltip = "",
  movie,
  fontSize = 20,
  critical,
  disabled,
  onClick,
}: ActionButtonProps) => (
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
      onClick={(e) => {
        e.stopPropagation();
        !disabled && onClick(movie);
      }}
    >
      <Icon fontSize="inherit" />
    </ButtonContainer>
  </Tooltip>
);

export default ActionButton;
