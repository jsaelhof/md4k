import { Button, ClickAwayListener, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClockIcon from "@mitch528/mdi-material-ui/ClockOutline";
import ClockFastIcon from "@mitch528/mdi-material-ui/ClockFast";
import TimerSandIcon from "@mitch528/mdi-material-ui/TimerSand";
import CalendarWeek from "@mitch528/mdi-material-ui/CalendarWeek";
import CalendarText from "@mitch528/mdi-material-ui/CalendarText";
import CalendarMonth from "@mitch528/mdi-material-ui/CalendarMonth";
import CalendarClock from "@mitch528/mdi-material-ui/CalendarClock";

import {
  MainButton,
  MenuIcon,
  RandomIcon,
  SplitButtonContainer,
  SplitMenu,
} from "./split-button.styles";

const splitButtonItems = [
  {
    value: 0,
    label: "Pick a Short Movie",
    options: { maxRuntime: 6000 },
    Icon: ClockFastIcon,
  },
  {
    value: 1,
    label: "Pick a Regular Movie",
    options: { minRuntime: 6001, maxRuntime: 7800 },
    Icon: ClockIcon,
  },
  {
    value: 2,
    label: "Pick a Long Movie",
    options: { minRuntime: 7801 },
    Icon: TimerSandIcon,
  },
  {
    value: 3,
    label: "Added This Month",
    options: { maxAdded: 30 },
    Icon: CalendarWeek,
  },
  {
    value: 4,
    label: "Added Within 90 Days",
    options: { maxAdded: 90 },
    Icon: CalendarText,
  },
  {
    value: 5,
    label: "Added Within A Year",
    options: { maxAdded: 365 },
    Icon: CalendarMonth,
  },
  {
    value: 6,
    label: "Added Long Ago",
    options: { minAdded: 365 },
    Icon: CalendarClock,
  },
];

const SplitButton = ({ onPick }) => {
  const [openSplitButton, setOpenSplitButton] = useState(false);

  return (
    <SplitButtonContainer aria-label="Pick A Movie">
      <MainButton variant="contained" onClick={() => onPick()}>
        <RandomIcon src="/images/random.png" />
        Pick A Movie
      </MainButton>
      <Button
        aria-label="Pick Menu"
        variant="contained"
        size="small"
        onClick={() => setOpenSplitButton(true)}
      >
        <ArrowDropDownIcon />
      </Button>

      {openSplitButton && (
        <SplitMenu>
          <ClickAwayListener onClickAway={() => setOpenSplitButton(false)}>
            <MenuList id="split-button-menu">
              {splitButtonItems.map(({ value, label, Icon, options }) => (
                <MenuItem key={value} onClick={() => onPick(options)}>
                  {<MenuIcon as={Icon} />}
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </SplitMenu>
      )}
    </SplitButtonContainer>
  );
};

export default SplitButton;
