import axios from "axios";
import lodash from "lodash";
import { api, sources } from "md4k-constants";

const { first, isNil } = lodash;

const fromTMDBProvider = {
  "Disney Plus": sources.DISNEY_PLUS,
  Netflix: sources.NETFLIX,
  "Amazon Prime Video": sources.PRIME_VIDEO,
  "Apple TV Plus": sources.APPLE_TV,
};

export const tmdbMovieProvider = async (parent) => {
  // Look up the TMDB data using the imdbID.
  // This depends on the parent having already provided this value.
  const { data: providerData } = await axios.get(
    `${api.TMDB}/movie/${parent.imdbID}/watch/providers?api_key=${process.env.TMDB_API_KEY}`
  );

  return first(
    (providerData?.results?.CA?.flatrate ?? [])
      .map(({ provider_name }) => fromTMDBProvider[provider_name])
      .filter((provider_name) => !isNil(provider_name))
  );
};
