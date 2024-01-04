import { Button, FormHelperText } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useAppContext } from "../../../../../../context/app-context";
import { Container, ListInput } from "./create-list-input.styles";
import createStrings from "../../i18n/i18n";
import { useI18n } from "../../../../../../hooks/use-i18n";
import { notEmpty } from "../../../../../../utils/not-empty";

export type CreateListInputProps = {
  onSubmit: (input: string) => void;
};

const CreateListInput = ({ onSubmit }: CreateListInputProps): ReactElement => {
  const { t } = useI18n(createStrings);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { lists } = useAppContext();

  return (
    <Container>
      <ListInput
        autoFocus
        label={t("create:input.label")}
        variant="standard"
        onChange={({ target }): void => {
          setError(null);
          setInput(target.value);
        }}
        error={!!error}
      />
      <FormHelperText>{error ?? " "}</FormHelperText>
      <div>
        <Button
          onClick={(): void => {
            if (input?.length === 0) {
              setError(t("create:input.no_list_name"));
            } else if (lists.map(({ label }) => label).includes(input)) {
              setError(t("create:input.duplicate_list_name"));
            } else {
              setError(null);
              setInput("");
              onSubmit(input);
            }
          }}
          variant="outlined"
          color="primary"
        >
          {t("create:input.action")}
        </Button>
      </div>
    </Container>
  );
};

export default CreateListInput;
