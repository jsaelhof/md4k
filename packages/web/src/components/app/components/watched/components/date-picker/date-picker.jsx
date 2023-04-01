import "react-day-picker/style.css";

import { useState } from "react";
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

const preventBubbling = (e) => e.stopPropagation();

const DatePicker = ({
  useDrawer = false,
  right = false,
  title,
  defaultDate,
  onChange,
  onCancel,
  onSave,
  onDelete,
  spring,
}) => {
  const actionSize = useDrawer ? 28 : 24;
  const [day, setDay] = useState(defaultDate);
  const picker = (
    <Picker
      sx={[useDrawer && DrawerPicker, right && RightAlignedPicker]}
      style={!useDrawer ? spring : undefined}
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
        defaultSelected={defaultDate}
        disabled={{
          after: new Date(),
        }}
        mode="single"
        onSelect={(day) => {
          setDay(day);
          onChange && onChange(day);
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
          onClick={() => onSave(day)}
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
    >
      <Title>{title}</Title>
      {picker}
    </Drawer>
  ) : (
    <>{picker}</>
  );
};

export default DatePicker;
