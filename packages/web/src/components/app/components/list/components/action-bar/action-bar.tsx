import { AppBar, Button, useMediaQuery } from "@mui/material";

import SortNav from "./components/sort-nav/sort-nav";
import SplitButton from "./components/split-button/split-button";
import {
  ActionBarContainer,
  ActionToolbar,
  AddToQueueIcon,
  SecondaryActions,
} from "./action-bar.styles";
import { useNavigate } from "react-router-dom";
import { type ReactElement } from "react";
import { type PickOption } from "../../../../../../types";
import { useTranslation } from "react-i18next";

export type ActionBarProps = {
  disabled: boolean;
  onPick: (options?: PickOption) => void;
};

const ActionBar = ({ disabled, onPick }: ActionBarProps): ReactElement => {
  const { t } = useTranslation(["list"]);
  const includeLabel = useMediaQuery("(min-width: 790px)");

  const navigate = useNavigate();

  return (
    <ActionBarContainer>
      <AppBar position="static" color="transparent" elevation={0}>
        {!disabled && (
          <ActionToolbar data-testid="ActionToolbar">
            <SortNav />

            <SecondaryActions>
              <Button
                aria-label={t("list:action_bar.add_movie")}
                variant="outlined"
                color="primary"
                onClick={(): void => navigate("/add")}
              >
                <AddToQueueIcon />
                {includeLabel && t("list:action_bar.add_movie")}
              </Button>
              <SplitButton onPick={onPick} />
            </SecondaryActions>
          </ActionToolbar>
        )}
      </AppBar>
    </ActionBarContainer>
  );
};

export default ActionBar;
