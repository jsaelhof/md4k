import { errorCodes } from "md4k-constants";

export const errorMessage = {
  [errorCodes.NO_TITLE]: "Title is required to add a movie",
  [errorCodes.NO_LIST_NAME]: "A name is required to add a list",
  UNKNOWN: `Unknown error code: %%`,
};
