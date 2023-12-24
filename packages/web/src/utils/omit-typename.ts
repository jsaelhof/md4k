import omitDeep from "omit-deep-lodash";

export const omitTypename = (o: Record<string, unknown>) =>
  omitDeep(o, "__typename");
