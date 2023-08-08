import { convertOmdbRatings } from "../../../utils/convert-omdb-ratings.js";
import { shouldUpdateSource } from "./utils/should-update-source.js";
import { toSubscribedSources } from "../utils/to-subscribed-sources.js";

export const updateMovie = async (
  parent,
  { movieId, list },
  { db, dataSources }
) => {
  // Get the movie from my DB
  const movie = await db.collection(list).findOne({ id: movieId });

  let update = null;

  // If it has an imdbID, update it. If not, just pass back the input movie data
  if (movie.imdbID) {
    // fetch the latest ratings
    const { Response, Ratings } = await dataSources.OMDB.getMovie(movie.imdbID);
    const shouldUpdateRatings = Response === "True";

    // fetch the latest provider info
    const providerData = await dataSources.TMDB.getProvider(movie.imdbID);
    const updatedSource = shouldUpdateSource(
      movie.source,
      toSubscribedSources(providerData)
    );

    // If either should update, build an update object
    if (shouldUpdateRatings || updatedSource) {
      // Build an update for my DB with the latest ratings and an updated editedOn value
      update = {
        ...(shouldUpdateRatings && {
          ratings: {
            id: movie.id,
            ...(Ratings && convertOmdbRatings(Ratings)),
          },
        }),
        ...(updatedSource && { source: updatedSource }),
        editedOn: new Date().toISOString(),
      };
    }
  }

  if (update) {
    // Update my DB and get the updated document
    const { value, ok } = await db.collection(list).findOneAndUpdate(
      {
        id: movie.id,
      },
      {
        $set: update,
      },
      {
        returnDocument: "after",
      }
    );

    if (ok === 1) {
      return value;
    } else {
      throw new Error(`Error updating movie: ${movie.title}`);
    }
  } else {
    // If there was no update generated, just return back the original movie data with no change
    return movie;
  }
};
