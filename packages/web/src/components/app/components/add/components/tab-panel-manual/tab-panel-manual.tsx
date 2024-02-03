import TabPanel from "../tab-panel/tab-panel";
import { ManualMovieForm } from "../../../manual-movie-form/manual-movie-form";
import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { useNavigate } from "react-router-dom";
import { ReactElement, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { NewMovieInput } from "../../../../../../graphql/types";

export type TabPanelManualProps = {
  tabId: string;
  hidden: boolean;
  onAddMovie: (movie: NewMovieInput) => void;
  initialState?: NewMovieInput;
};

const TabPanelManual = ({
  tabId,
  hidden,
  onAddMovie,
  initialState,
}: TabPanelManualProps): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation(["tab_panel_manual"]);

  const onCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <TabPanel tabId={tabId} hidden={hidden}>
      <ManualMovieForm
        actionLabel={t("tab_panel_manual:add_movie")}
        ActionIcon={LibraryAdd}
        onChange={onAddMovie}
        onCancel={onCancel}
        initialState={initialState}
      />
    </TabPanel>
  );
};

export default TabPanelManual;
