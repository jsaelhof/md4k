import { ApolloError } from "apollo-server-errors";
import lodash from "lodash";
import { sources, errorCodes } from "md4k-constants";
import { toFiveStarRating } from "../../../utils/to-five-star-rating.js";

const { isNil } = lodash;

export const addMovie = async (parent, { movie, list }, { db }) => {
  if (!movie.title) throw new ApolloError(errorCodes.NO_TITLE);
  if (isNil(movie.source)) movie.source = sources.NONE;
  if (isNil(movie.locked)) movie.locked = false;

  try {
    const record = {
      ...movie,
      addedOn: new Date().toISOString(),
      editedOn: new Date().toISOString(),
    };

    await db.collection(list).insertOne(record);

    return {
      ...record,
      fiveStarRating: toFiveStarRating(movie.ratings),
    };
  } catch (ex) {
    // TODO: Log this exception to Datadog?
    throw new Error(`Error adding movie: ${movie.title}`);
  }
};
