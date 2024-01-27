import lodash from "lodash";
import { sources } from "md4k-constants";
import { TMDBProviderResults } from "../../types/tmdb.types.js";

const { isNil } = lodash;

// TODO: Need to change this to an enum
type Source = typeof sources;

// TODO: Need to change this to an enum
export const fromTMDBProvider: {
  [key: string]:
    | Source["DISNEY_PLUS"]
    | Source["NETFLIX"]
    | Source["PRIME_VIDEO"]
    | Source["APPLE_TV"]
    | Source["TUBI_TV"]
    | undefined;
} = {
  "Disney Plus": sources.DISNEY_PLUS,
  Netflix: sources.NETFLIX,
  "Amazon Prime Video": sources.PRIME_VIDEO,
  "Apple TV Plus": sources.APPLE_TV,
  "Tubi TV": sources.TUBI_TV,
};

export const toSubscribedSources = (providerData: TMDBProviderResults | null) =>
  [
    // Prioritize flatrate services over ad supported.
    ...(providerData?.results?.CA?.flatrate ?? []),
    ...(providerData?.results?.CA?.ads ?? []),
  ]
    .map(
      ({ provider_name }) =>
        fromTMDBProvider[provider_name as keyof typeof fromTMDBProvider]
    )
    .filter((provider_name) => !isNil(provider_name));
