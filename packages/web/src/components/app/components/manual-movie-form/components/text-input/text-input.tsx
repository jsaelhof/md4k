import { TextField } from "@mui/material";
import { Label } from "../../manual-movie-form.styles";
import { Controller, type UseControllerProps } from "react-hook-form";
import { type ReactElement } from "react";
import { type MovieFormFields } from "../../types";

export type TextInputProps = {
  controllerProps: UseControllerProps<MovieFormFields>;
  formattedLabel: string;
  autoFocus?: boolean;
  ariaLabel?: string;
  placeholder?: string;
  multiline?: boolean;
};

const TextInput = ({
  controllerProps,
  formattedLabel,
  autoFocus,
  ariaLabel,
  placeholder,
  multiline,
}: TextInputProps): ReactElement => (
  <div>
    <Label htmlFor={controllerProps.name}>{formattedLabel}</Label>
    <Controller
      name={controllerProps.name}
      control={controllerProps.control}
      rules={controllerProps.rules}
      render={({ field: { value, ...field }, fieldState }): ReactElement => (
        <TextField
          inputProps={{ "aria-label": ariaLabel ?? formattedLabel }}
          fullWidth
          size="small"
          variant="outlined"
          {...{
            placeholder: placeholder ?? formattedLabel,
            autoFocus,
          }}
          {...(multiline && {
            multiline: true,
            rows: 3,
          })}
          error={!!fieldState.error?.message}
          helperText={fieldState.error?.message}
          value={value ?? ""}
          {...field}
        />
      )}
    />
  </div>
);

export default TextInput;
