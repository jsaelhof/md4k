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

const ActionBar = ({ disabled, onPick }) => {
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
                aria-label="Add Movie"
                variant="outlined"
                color="primary"
                onClick={() => navigate("/add")}
              >
                <AddToQueueIcon />
                {includeLabel && "Add Movie"}
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
