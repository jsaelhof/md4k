import lodash from "lodash";
import { sources } from "md4k-constants";

const { first, isNil } = lodash;

const fromTMDBProvider = {
  "Disney Plus": sources.DISNEY_PLUS,
  Netflix: sources.NETFLIX,
  "Amazon Prime Video": sources.PRIME_VIDEO,
  "Apple TV Plus": sources.APPLE_TV,
};

export const thirdPartyProvider = async ({ imdbID }, _, { dataSources }) => {
  // Look up the TMDB data using the imdbID.
  // This depends on the parent having already provided this value.
  const providerData = await dataSources.TMDB.getProvider(imdbID);

  return first(
    (providerData?.results?.CA?.flatrate ?? [])
      .map(({ provider_name }) => fromTMDBProvider[provider_name])
      .filter((provider_name) => !isNil(provider_name))
  );
};
