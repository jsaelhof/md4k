import { type MutationResolvers } from "../../../__generated__/graphql.js";
import { type Movie } from "../../types/db.types.js";

export const editMovie: MutationResolvers["editMovie"] = async (
  parent,
  { movie, list, removeKeys },
  { db }
) => {
  const { value, ok } = await db.collection<Movie>(list).findOneAndUpdate(
    {
      id: movie.id,
    },
    {
      $set: {
        ...Object.entries(movie as Movie).reduce<{
          [key: string]: Movie[keyof Movie]; // Created a union of all possible types of all Movie values: https://stackoverflow.com/questions/50044023/get-union-type-from-indexed-object-values
        }>((filteredMovie, [key, value]) => {
          if (value != null) filteredMovie[key] = value;
          return filteredMovie;
        }, {}),
        editedOn: new Date().toISOString(),
      },
      ...(removeKeys && {
        $unset: {
          ...removeKeys.reduce<{ [key: string]: "" }>((acc, keyToRemove) => {
            if (keyToRemove) acc[keyToRemove] = "";
            return acc;
          }, {}),
        },
      }),
    },
    {
      returnDocument: "after",
    }
  );

  if (ok === 1 && value !== null) {
    return value;
  } else {
    throw new Error(`Error editing movie: ${movie.title}`);
  }
};
