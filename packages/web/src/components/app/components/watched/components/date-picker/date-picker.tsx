import "react-day-picker/dist/style.css";

import { type MouseEventHandler, type ReactElement, useState } from "react";
import { Drawer } from "@mui/material";
import Close from "@mui/icons-material/Close";
import Delete from "@mui/icons-material/Delete";
import CalendarCheck from "mdi-material-ui/CalendarCheck";
import { DayPicker } from "react-day-picker";

import {
  ButtonGroup,
  DrawerPicker,
  DrawerPaper,
  Picker,
  RightAlignedPicker,
  Title,
  dayPickerStyles,
  dayPickerSmallStyles,
} from "./date-picker.styles";
import ActionButton from "../../../action-button/action-button";
import { type SpringValues } from "react-spring";

const preventBubbling: MouseEventHandler = (e) => e.stopPropagation();

export type DatePickerProps = {
  useDrawer?: boolean;
  right?: boolean;
  title: string;
  defaultDate: Date;
  onCancel: () => void;
  onSave: (date: Date) => void;
  onDelete: () => void;
  spring: SpringValues<{ mounted: number }>;
};

const DatePicker = ({
  useDrawer = false,
  right = false,
  title,
  defaultDate,
  onCancel,
  onSave,
  onDelete,
  spring,
}: DatePickerProps): ReactElement => {
  const actionSize = useDrawer ? 28 : 24;
  const [day, setDay] = useState<Date>(defaultDate);
  const picker = (
    <Picker
      sx={[useDrawer && DrawerPicker, right && RightAlignedPicker]}
      style={!useDrawer ? (spring as SpringValues) : undefined}
      onClick={preventBubbling}
      data-testid="datePicker"
    >
      <DayPicker
        styles={{
          root: {
            ...dayPickerStyles,
            ...(!useDrawer && dayPickerSmallStyles),
          },
        }}
        defaultMonth={defaultDate}
        selected={day}
        disabled={{
          after: new Date(),
        }}
        mode="single"
        onSelect={(day): void => {
          if (day) {
            setDay(day);
          }
        }}
      />
      <ButtonGroup>
        <ActionButton
          Icon={Delete}
          onClick={onDelete}
          critical={true}
          fontSize={actionSize}
        />
        <span />
        <ActionButton Icon={Close} onClick={onCancel} fontSize={actionSize} />
        <ActionButton
          Icon={CalendarCheck}
          onClick={(): void => onSave(day)}
          fontSize={actionSize}
        />
      </ButtonGroup>
    </Picker>
  );

  return useDrawer ? (
    <Drawer
      anchor="bottom"
      open={true}
      ModalProps={{ hideBackdrop: true }}
      PaperProps={{ sx: [DrawerPaper] }}
      data-testid="datePickerDrawer"
    >
      <Title>{title}</Title>
      {picker}
    </Drawer>
  ) : (
    <>{picker}</>
  );
};

export default DatePicker;
