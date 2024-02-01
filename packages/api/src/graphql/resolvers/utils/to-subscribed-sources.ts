import lodash from "lodash";
import { Source } from "md4k-constants";
import { TMDBProviderResults } from "../../types/tmdb.types.js";

const { isNil } = lodash;

// TODO: Need to change this to an enum
export const fromTMDBProvider: {
  [key: string]:
    | Source.DISNEY_PLUS
    | Source.NETFLIX
    | Source.PRIME_VIDEO
    | Source.APPLE_TV
    | Source.TUBI_TV
    | undefined;
} = {
  "Disney Plus": Source.DISNEY_PLUS,
  Netflix: Source.NETFLIX,
  "Amazon Prime Video": Source.PRIME_VIDEO,
  "Apple TV Plus": Source.APPLE_TV,
  "Tubi TV": Source.TUBI_TV,
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
