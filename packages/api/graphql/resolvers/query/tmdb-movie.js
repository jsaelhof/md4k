import lodash from "lodash";

const { filter, find, first, isNil, pick, reject } = lodash;

const TMDB_IMAGE_URL = "http://image.tmdb.org/t/p/%size%%path%";

const toTMDBImageUrl = (path, size = "original") =>
  TMDB_IMAGE_URL.replace("%size%", size).replace("%path%", path);

export const tmdbMovie = async (parent, { imdbID }, { dataSources }) => {
  // Find the data by imdbid. This includes the TMDB id so we can look up the actual data.
  const findResults = await dataSources.TMDB.find(imdbID);

  // In general there should be only match but it seems possible to get more than one thing back.
  // If there's zero, then we can't find the TMDB data from the imdb id.
  if (findResults.length < 1) {
    throw `No movies found with imdb id ${imdbID}`;
  }

  // Look up the TMDB data using the movie id from the first request.
  // ADD "images" TO append_to_respond to get full list of backdrops and posters.
  const { backdrop_path, videos, overview, images } =
    await dataSources.TMDB.getMovie(findResults[0].id);

  const officialTrailer = find(
    filter(videos?.results, ["type", "Trailer"]),
    "official"
  );
  const anyTrailer = first(filter(videos?.results, ["type", "Trailer"]));
  const trailerData = first(reject([officialTrailer, anyTrailer], isNil));

  return {
    imdbID,
    backdrop: toTMDBImageUrl(backdrop_path),
    backdrops: images?.backdrops.map(({ file_path }) =>
      toTMDBImageUrl(file_path)
    ),
    trailer: trailerData ? pick(trailerData, ["site", "key"]) : null,
    plot: overview,
  };
};
