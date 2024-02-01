import { QueryResolvers } from "../../../__generated__/graphql.js";
import { Movie } from "../../types/db.types.js";

export const movies: QueryResolvers["movies"] = async (
  parent,
  { list },
  { db }
) => {
  return await db
    .collection<Movie>(list)
    .find({ watchedOn: null })
    .project<Omit<Movie, "_id">>({ _id: 0 })
    .toArray();
};
