import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";
import { Layout, tabStyles, tabsStyles } from "./add.styles";
import { addMovieOptions, useAddMovie } from "../../../../graphql/mutations";
import { useAppContext } from "../../../../context/app-context";
import { useNavigate } from "react-router-dom";
import TabPanelSearch from "./components/tab-panel-search/tab-panel-search";
import TabPanelManual from "./components/tab-panel-manual/tab-panel-manual";
import ErrorDialog from "../error-dialog/error-dialog";
import { useI18n } from "../../../../hooks/use-i18n";
import addStrings from "./i18n/i18n";

export const Add = () => {
  const { t } = useI18n(addStrings);

  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = useCallback((event, index) => setActiveTab(index), []);

  const { list, setToast } = useAppContext();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [addMovieMutation] = useAddMovie({
    onCompleted: ({ addMovie: movie }) => {
      setToast({ message: t("add:confirm_added", { title: movie.title }) });
      navigate("/");
    },
    onError: ({ message }) => {
      console.log(message);
      setError(message);
    },
  });

  const onAddMovie = useCallback(
    (movie) =>
      addMovieMutation(addMovieOptions({ ...movie, locked: false }, list)),
    [addMovieMutation, list]
  );

  return (
    <>
      <Layout>
        <Tabs
          value={activeTab}
          onChange={onTabChange}
          sx={tabsStyles}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab
            sx={tabStyles}
            label={t("add:add_by_search")}
            id="tab-0"
            aria-controls="tabpanel-0"
          />
          <Tab
            sx={tabStyles}
            label={t("add:add_manually")}
            id="tab-1"
            aria-controls="tabpanel-1"
          />
        </Tabs>

        <TabPanelSearch
          tabId={0}
          hidden={activeTab !== 0}
          onAddMovie={onAddMovie}
        />

        <TabPanelManual
          tabId={1}
          hidden={activeTab !== 1}
          onAddMovie={onAddMovie}
        />
      </Layout>

      {error && (
        <ErrorDialog
          open={!!error}
          content={t("add:error_adding")}
          debug={error}
          onConfirm={() => setError(null)}
        />
      )}
    </>
  );
};
