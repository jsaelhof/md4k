import TabPanel from "../tab-panel/tab-panel";
import { ManualMovieForm } from "../../../manual-movie-form/manual-movie-form";
import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { useNavigate } from "react-router-dom";
import { ReactElement, useCallback } from "react";
import { useI18n } from "../../../../../../hooks/use-i18n.js";
import tabPanelManualStrings from "./i18n/i18n";
import { Movie } from "../../../../../../__generated__/graphql";

export type TabPanelManualProps = {
  tabId: string;
  hidden: boolean;
  onAddMovie: (movie: Omit<Movie, "id">) => void;
  initialState?: Omit<Movie, "id">;
};

const TabPanelManual = ({
  tabId,
  hidden,
  onAddMovie,
  initialState,
}: TabPanelManualProps): ReactElement => {
  const navigate = useNavigate();
  const { t } = useI18n(tabPanelManualStrings);

  const onCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <TabPanel tabId={tabId} hidden={hidden}>
      <ManualMovieForm
        actionLabel={t("tabPanelManual:add_movie")}
        ActionIcon={LibraryAdd}
        onChange={onAddMovie}
        onCancel={onCancel}
        initialState={initialState}
      />
    </TabPanel>
  );
};

export default TabPanelManual;
