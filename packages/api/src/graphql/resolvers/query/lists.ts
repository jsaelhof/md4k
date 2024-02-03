import { type QueryResolvers } from "../../../__generated__/graphql.js";
import { type List } from "../../types/db.types.js";

export const lists: QueryResolvers["lists"] = async (
  parent,
  args,
  { db, userId }
) =>
  await db
    .collection<List>("lists")
    .find({ userId })
    .project<Omit<List, "_id">>({ _id: 0 })
    .toArray();
