import { type QueryResolvers } from "../../../__generated__/graphql.js";
import { type Movie } from "../../types/db.types.js";

export const watchedMovies: QueryResolvers["watchedMovies"] = async (
  parent,
  { list },
  { db }
) => {
  return await db
    .collection<Movie>(list)
    .find({ watchedOn: { $ne: null } })
    .project<Omit<Movie, "_id">>({ _id: 0 })
    .toArray();
};
