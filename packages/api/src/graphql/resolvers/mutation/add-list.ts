import { ApolloError } from "apollo-server-errors";
import { errorCodes } from "md4k-constants";
import { v4 as uuidv4 } from "uuid";
import { type MutationResolvers } from "../../../__generated__/graphql.js";

export const addList: MutationResolvers["addList"] = async (
  parent,
  { name },
  { db, userId }
) => {
  if (!name || name.length === 0)
    throw new ApolloError(errorCodes.NO_LIST_NAME);

  if (!userId) throw new ApolloError(errorCodes.NO_USER_ID);

  try {
    const record = {
      id: uuidv4(),
      label: name,
      userId,
    };

    await db.collection("lists").insertOne(record);

    return record;
  } catch (ex) {
    // TODO: Log this error to Datadog?
    throw new Error(`Error inserting new collection: ${name}`);
  }
};
