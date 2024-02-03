import { Button } from "@mui/material";
import EmptyState from "../../../../../empty-state/empty-state";
import { useNavigate } from "react-router-dom";
import { type ReactElement } from "react";
import { useTranslation } from "react-i18next";

const EmptyList = (): ReactElement => {
  const { t } = useTranslation(["list_grid"]);
  const navigate = useNavigate();

  return (
    <EmptyState
      imgSrc="/images/stormtroopers.png"
      quote={t("list_grid:empty.quote")}
      message={
        <>
          {t("list_grid:empty.message_1")}
          <br />
          {t("list_grid:empty.message_2")}
        </>
      }
      content={
        <Button
          onClick={(): void => navigate("/add")}
          variant="outlined"
          color="primary"
        >
          {t("list_grid:empty.action")}
        </Button>
      }
    />
  );
};

export default EmptyList;
