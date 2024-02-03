import { Button, ClickAwayListener, MenuItem, MenuList } from "@mui/material";
import { type ReactElement, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClockIcon from "mdi-material-ui/ClockOutline";
import ClockFastIcon from "mdi-material-ui/ClockFast";
import TimerSandIcon from "mdi-material-ui/TimerSand";
import CalendarWeek from "mdi-material-ui/CalendarWeek";
import CalendarText from "mdi-material-ui/CalendarText";
import CalendarMonth from "mdi-material-ui/CalendarMonth";
import CalendarClock from "mdi-material-ui/CalendarClock";

import {
  MainButton,
  MenuIcon,
  RandomIcon,
  SplitButtonContainer,
  SplitMenu,
} from "./split-button.styles";
import { filterMovies } from "../../../../../../../../utils/filter-movies";
import { useAppContext } from "../../../../../../../../context/app-context";
import { type PickOption } from "../../../../../../../../types";
import { type SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import type resources from "../../../../../../../../__generated__/resources";

const splitButtonItems: {
  value: string;
  options: PickOption;
  Icon: SvgIconComponent;
}[] = [
  {
    value: "short",
    options: { maxRuntime: 6000 },
    Icon: ClockFastIcon,
  },
  {
    value: "regular",
    options: { minRuntime: 6001, maxRuntime: 7800 },
    Icon: ClockIcon,
  },
  {
    value: "long",
    options: { minRuntime: 7801 },
    Icon: TimerSandIcon,
  },
  {
    value: "month",
    options: { maxAdded: 30 },
    Icon: CalendarWeek,
  },
  {
    value: "three_month",
    options: { maxAdded: 90 },
    Icon: CalendarText,
  },
  {
    value: "year",
    options: { maxAdded: 365 },
    Icon: CalendarMonth,
  },
  {
    value: "long_ago",
    options: { minAdded: 365 },
    Icon: CalendarClock,
  },
];

export type SplitButtonProps = {
  onPick: (options?: PickOption) => void;
};

const SplitButton = ({ onPick }: SplitButtonProps): ReactElement => {
  const { t } = useTranslation(["list"]);
  const { movies } = useAppContext();
  const [openSplitButton, setOpenSplitButton] = useState(false);

  return (
    <SplitButtonContainer aria-label={t("list:pick.title")}>
      <MainButton variant="contained" onClick={(): void => onPick()}>
        <RandomIcon src="/images/random.png" width="20px" height="18px" />
        {t("list:pick.title")}
      </MainButton>
      <Button
        aria-label={t("list:pick.label")}
        variant="contained"
        size="small"
        onClick={(): void => setOpenSplitButton(true)}
      >
        <ArrowDropDownIcon />
      </Button>

      {openSplitButton && (
        <SplitMenu>
          <ClickAwayListener
            onClickAway={(): void => setOpenSplitButton(false)}
          >
            <MenuList id="split-button-menu">
              {splitButtonItems.map(({ value, Icon, options }) => (
                <MenuItem
                  key={value}
                  onClick={(): void => onPick(options)}
                  disabled={filterMovies(movies, options).length === 0}
                >
                  {<MenuIcon as={Icon} />}
                  {t(`list:pick.${value as keyof typeof resources.list.pick}`)}
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
