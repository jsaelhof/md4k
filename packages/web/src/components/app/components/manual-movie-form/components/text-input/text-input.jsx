import {TextField} from "@mui/material";
import {
  Label,
} from "../../manual-movie-form.styles";
import { Controller } from "react-hook-form";

const TextInput = ({
  label,
  formattedLabel,
  control,
  autoFocus,
  ariaLabel,
  placeholder,
  rules,
  multiline,
}) => (
  <div>
    <Label htmlFor={label}>{formattedLabel}</Label>
    <Controller
      name={label}
      control={control}
      rules={rules}
      render={({ field: { value, ...field }, fieldState }) => (
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
