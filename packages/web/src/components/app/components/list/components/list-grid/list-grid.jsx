import { useState } from "react";
import isNil from "lodash/isNil";

import DeleteDialog from "../../../delete-dialog/delete-dialog";
import EmptyList from "./components/empty-list/empty-list";
import { Route, Routes } from "react-router-dom";
import SortedRuntime from "./components/sorted-runtime/sorted-runtime";
import SortedTitle from "./components/sorted-title/sorted-title";
import SortedAdded from "./components/sorted-added/sorted-added";
import SortedGenre from "./components/sorted-genre/sorted-genre";
import { sort } from "../../../../../../constants/sorts";
import SortedRating from "./components/sorted-rating/sorted-rating";
import SortedSource from "./components/sorted-source/sorted-source";

const ListGrid = ({ movies, onRemoveMovie, onMarkWatched, onEditMovie }) => {
  const [deleteMovie, setDeleteMovie] = useState(null);

  if (!movies) return null;

  return (
    <>
      {movies.length > 0 ? (
        <>
          <Routes>
            <Route
              path={`${sort.ADDED}/:direction`}
              element={
                <SortedAdded
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />

            <Route
              path={`${sort.TITLE}/:direction`}
              element={
                <SortedTitle
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />

            <Route
              path={`${sort.RUNTIME}/:direction`}
              element={
                <SortedRuntime
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />

            <Route
              path={`${sort.GENRE}/:direction`}
              element={
                <SortedGenre
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />

            <Route
              path={`${sort.RATING}/:direction`}
              element={
                <SortedRating
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />

            <Route
              path={`${sort.SOURCE}/:direction`}
              element={
                <SortedSource
                  movies={movies}
                  onEditMovie={onEditMovie}
                  onMarkWatched={onMarkWatched}
                  onDeleteMovie={setDeleteMovie}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <EmptyList />
      )}

      <DeleteDialog
        open={!isNil(deleteMovie)}
        content={`'${deleteMovie?.title}' will be removed`}
        onCancel={() => setDeleteMovie(null)}
        onConfirm={() => {
          onRemoveMovie(deleteMovie);
          setDeleteMovie(null);
        }}
      />
    </>
  );
};

export default ListGrid;
