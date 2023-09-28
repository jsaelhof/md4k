import { Button } from "@mui/material";
import EmptyState from "../../../../../empty-state/empty-state";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../../../../../../../../hooks/use-i18n";
import listGridStrings from "../../i18n/i18n";

const EmptyList = () => {
  const { t } = useI18n(listGridStrings);
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
          onClick={() => navigate("/add")}
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
