import lodash from "lodash";
import { type ThirdPartyMovieResolvers } from "../../../__generated__/graphql.js";

const { filter, find, first, isNil, pick, reject } = lodash;

export const thirdPartyTrailer: ThirdPartyMovieResolvers["trailer"] = async (
  { imdbID },
  _,
  { dataSources }
) => {
  // Find the data by imdbid. This includes the TMDB id so we can look up the actual data.
  const findResults = await dataSources.TMDB.find(imdbID);

  // In general there should be only match but it seems possible to get more than one thing back.
  // If there's zero, then we can't find the TMDB data from the imdb id.
  if (!findResults || findResults.length < 1) {
    throw `No movies found with imdb id ${imdbID}`;
  }

  // Look up the TMDB data using the movie id from the first request.
  // ADD "images" TO append_to_respond to get full list of backdrops and posters.
  const { videos } = await dataSources.TMDB.getMovie(
    findResults[0].id.toString()
  );

  const officialTrailer = find(
    filter(videos?.results, ["type", "Trailer"]),
    "official"
  );
  const anyTrailer = first(filter(videos?.results, ["type", "Trailer"]));
  const trailerData = first(reject([officialTrailer, anyTrailer], isNil));

  return trailerData ? pick(trailerData, ["site", "key"]) : null;
};
