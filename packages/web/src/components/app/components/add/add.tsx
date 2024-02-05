import { type TabsOwnProps } from "@mui/material";
import { type ReactElement, useCallback, useState } from "react";
import { Layout, Tabs, Tab } from "./add.styles";
import { addMovieOptions, useAddMovie } from "../../../../graphql/mutations";
import { useAppContext } from "../../../../context/app-context";
import { useNavigate } from "react-router-dom";
import TabPanelSearch from "./components/tab-panel-search/tab-panel-search";
import TabPanelManual from "./components/tab-panel-manual/tab-panel-manual";
import ErrorDialog from "../error-dialog/error-dialog";
import { useTranslation } from "react-i18next";
import { type NewMovie } from "../../../../graphql/types";

export const Add = (): ReactElement => {
  const { t } = useTranslation(["add", "common"]);

  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = useCallback<NonNullable<TabsOwnProps["onChange"]>>(
    (event, index) => setActiveTab(index),
    []
  );

  const { list, setToast } = useAppContext();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  const [addMovieMutation] = useAddMovie({
    onCompleted: ({ addMovie: movie }) => {
      movie &&
        setToast({ message: t("add:confirm_added", { title: movie.title }) });
      navigate("/");
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  const onAddMovie = useCallback<(movie: NewMovie) => void>(
    (movie) =>
      list &&
      addMovieMutation(addMovieOptions({ ...movie, locked: false }, list)),
    [addMovieMutation, list]
  );

  return (
    <>
      <Layout>
        <Tabs
          value={activeTab}
          onChange={onTabChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab
            label={t("add:add_by_search")}
            id="tab-0"
            aria-controls="tabpanel-0"
          />
          <Tab
            label={t("add:add_manually")}
            id="tab-1"
            aria-controls="tabpanel-1"
          />
        </Tabs>

        <TabPanelSearch
          tabId="0"
          hidden={activeTab !== 0}
          onAddMovie={onAddMovie}
        />

        <TabPanelManual
          tabId="1"
          hidden={activeTab !== 1}
          onAddMovie={onAddMovie}
        />
      </Layout>

      {error && (
        <ErrorDialog
          open={!!error}
          content={t("add:error_adding")}
          debug={error}
          onConfirm={(): void => setError(null)}
        />
      )}
    </>
  );
};
