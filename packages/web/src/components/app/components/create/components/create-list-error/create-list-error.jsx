import { Button } from "@mui/material";
import React from "react";
import { Container } from "./create-list-error.styles";
import createStrings from "../../i18n/i18n";
import {useI18n} from "../../../../../../hooks/use-i18n.js";

const CreateListError = ({ reset }) => {
  const {t} = useI18n(createStrings);
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
