import { ThirdPartyMovieResolvers } from "../../../__generated__/graphql.js";
import { toTMDBImageUrl } from "./utils/to-tmdb-image-url.js";

export const thirdPartyBackdrops: ThirdPartyMovieResolvers["backdrops"] =
  async ({ imdbID }, _, { dataSources }) => {
    // Find the data by imdbid. This includes the TMDB id so we can look up the actual data.
    const findResults = await dataSources.TMDB.find(imdbID);

    // In general there should be only match but it seems possible to get more than one thing back.
    // If there's zero, then we can't find the TMDB data from the imdb id.
    if (!findResults || findResults.length < 1) {
      throw `No movies found with imdb id ${imdbID}`;
    }

    // Look up the TMDB data using the movie id from the first request.
    const { images } = await dataSources.TMDB.getMovie(
      findResults[0].id.toString()
    );

    return images
      ? images.backdrops.map(({ file_path }) => toTMDBImageUrl(file_path))
      : null;
  };
