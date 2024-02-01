import { ReactElement, useCallback, useMemo, useState } from "react";
import { useAppContext } from "../../../../context/app-context";
import { useNavigate, useParams } from "react-router-dom";
import ErrorDialog from "../error-dialog/error-dialog";
import { ManualMovieForm } from "../manual-movie-form/manual-movie-form";
import Check from "@mui/icons-material/Check";
import { editMovieOptions, useEditMovie } from "../../../../graphql/mutations";
import { Layout, NotFoundLayout, tabStyles, tabsStyles } from "./edit.styles";
import { Tab, Tabs } from "@mui/material";
import { Movie } from "../../../../__generated__/graphql";
import { useTranslation } from "react-i18next";

export const Edit = (): ReactElement => {
  const params = useParams();
  const { movies, list, setToast } = useAppContext();
  const movie = useMemo(
    () => movies.find(({ id }) => id === params.movieId) ?? null,
    [movies, params.movieId]
  );
  const navigate = useNavigate();
  const [error, setError] = useState<null | string>(null);
  const { t } = useTranslation(["edit"]);

  const [editMovieMutation] = useEditMovie({
    onCompleted: ({ editMovie: movie }) => {
      movie &&
        setToast({ message: t("edit:confirm_edit", { title: movie.title }) });
      navigate("/");
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  const onEditMovie = useCallback(
    (movieData: Omit<Movie, "id">) =>
      list &&
      editMovieMutation(
        editMovieOptions({ ...movie, ...movieData } as Movie, list)
      ),
    [editMovieMutation, list, movie]
  );

  const onCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Layout>
        <Tabs
          sx={tabsStyles}
          value={0}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab
            sx={tabStyles}
            label="Update Movie"
            id="tab-0"
            aria-controls="tabpanel-0"
          />
        </Tabs>

        {movie ? (
          <ManualMovieForm
            actionLabel={t("edit:action_save")}
            ActionIcon={Check}
            initialState={movie}
            onChange={onEditMovie}
            onCancel={onCancel}
          />
        ) : (
          <NotFoundLayout>
            {t("edit:missing_id", { movieId: params.movieId })}
          </NotFoundLayout>
        )}
      </Layout>

      {error && (
        <ErrorDialog
          open={!!error}
          content={t("edit:error_adding")}
          debug={error}
          onConfirm={(): void => setError(null)}
        />
      )}
    </>
  );
};
