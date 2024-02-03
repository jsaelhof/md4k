import { Button } from "@mui/material";
import React, { type ReactElement } from "react";
import { Container } from "./create-list-error.styles";
import { useTranslation } from "react-i18next";

export type CreateListErrorProps = {
  reset: () => void;
};

const CreateListError = ({ reset }: CreateListErrorProps): ReactElement => {
  const { t } = useTranslation(["create"]);
  return (
    <Container>
      <div>{t("create:error.message")}</div>
      <div>
        <Button onClick={reset} variant="outlined" color="primary">
          {t("create:error.action")}
        </Button>
      </div>
    </Container>
  );
};

export default CreateListError;
