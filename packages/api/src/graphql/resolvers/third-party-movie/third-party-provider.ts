import lodash from "lodash";
import { toSubscribedSources } from "../utils/to-subscribed-sources.js";
import { ThirdPartyMovieResolvers } from "../../../__generated__/graphql.js";

const { first } = lodash;

export const thirdPartyProvider: ThirdPartyMovieResolvers["source"] = async (
  { imdbID },
  _,
  { dataSources }
) => {
  // Look up the TMDB data using the imdbID.
  // This depends on the parent having already provided this value.
  const providerData = await dataSources.TMDB.getProvider(imdbID);

  return first(toSubscribedSources(providerData)) ?? null;
};
