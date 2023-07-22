import TabPanel from "../tab-panel/tab-panel";
import { ManualMovieForm } from "../../../manual-movie-form/manual-movie-form";
import LibraryAdd from "@mui/icons-material/LibraryAdd";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const TabPanelManual = ({ tabId, hidden, onAddMovie, initialState }) => {
  const navigate = useNavigate();

  const onCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <TabPanel tabId={tabId} hidden={hidden}>
      <ManualMovieForm
        actionLabel="Add Movie"
        ActionIcon={LibraryAdd}
        onChange={onAddMovie}
        onCancel={onCancel}
        initialState={initialState}
      />
    </TabPanel>
  );
};

export default TabPanelManual;
