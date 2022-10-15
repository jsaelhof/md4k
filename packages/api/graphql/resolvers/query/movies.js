import { toFiveStarRating } from "../../../utils/to-five-star-rating.js";

export const movies = async (parent, { list }, { db }) => {
  const result = await db
    .collection(list)
    .find({ watchedOn: null })
    .project({ _id: 0 })
    .toArray();

  return result.map((movie) => ({
    ...movie,
    fiveStarRating: toFiveStarRating(movie.ratings),
  }));
};
