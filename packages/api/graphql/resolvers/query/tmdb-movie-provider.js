import axios from "axios";
import { fromTMDBProvider } from "../../../constants/sources.js";
import { api } from "../../../constants/api.js";
import lodash from "lodash";

const { first, isNil } = lodash;

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
