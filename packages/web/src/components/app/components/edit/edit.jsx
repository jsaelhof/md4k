import { useCallback, useEffect, useState } from "react";
import { useAppContext } from "../../../../context/app-context";
import { useNavigate, useParams } from "react-router-dom";
import ErrorDialog from "../error-dialog/error-dialog";
import { formatRuntime } from "../../../../utils/format-runtime";
import { ManualMovieForm } from "../manual-movie-form/manual-movie-form";
import Check from "@mui/icons-material/Check";
import { editMovieOptions, useEditMovie } from "../../../../graphql/mutations";
import { Layout, NotFoundLayout, tabStyles, tabsStyles } from "./edit.styles";
import { Tab, Tabs } from "@mui/material";

export const Edit = () => {
  const params = useParams();
  const { movies, list, setToast } = useAppContext();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movies) {
      const movieToEdit = movies.find(({ id }) => id === params.movieId);

      if (movieToEdit) {
        setMovie({
          ...movieToEdit,
          runtime: formatRuntime(movieToEdit.runtime, true),
        });
      } else {
        setMovie(null);
      }
    }
  }, [movies, params.movieId]);

  const [editMovieMutation] = useEditMovie({
    onCompleted: ({ editMovie: movie }) => {
      setToast({ message: `Updated '${movie.title}'` });
      navigate("/");
    },
    onError: ({ message }) => {
      setError(message);
    },
  });

  const onEditMovie = useCallback(
    (movieData) =>
      editMovieMutation(editMovieOptions({ ...movie, ...movieData }, list)),
    [editMovieMutation, list, movie]
  );

  const onCancel = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (movie === undefined) return null;

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
            actionLabel="Save"
            ActionIcon={Check}
            initialState={movie}
            onChange={onEditMovie}
            onCancel={onCancel}
          />
        ) : (
          <NotFoundLayout>
            Unable to find a movie with id {params.movieId}
          </NotFoundLayout>
        )}
      </Layout>

      {error && (
        <ErrorDialog
          open={!!error}
          content="We were not able to add the movie to the list."
          onConfirm={() => setError(null)}
        />
      )}
    </>
  );
};
