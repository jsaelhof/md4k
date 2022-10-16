import { AppBar, Button } from "@mui/material";

import { useResponsive } from "../../../../../../hooks/use-responsive";
import SortNav from "./components/sort-nav/sort-nav";
import SplitButton from "./components/split-button/split-button";
import {
  ActionBarContainer,
  ActionToolbar,
  AddToQueueIcon,
  SecondaryActions,
} from "./action-bar.styles";

const ActionBar = ({ disabled, onAdd, onPick }) => {
  const { small } = useResponsive();

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
                onClick={onAdd}
              >
                <AddToQueueIcon />
                {!small && "Add Movie"}
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
