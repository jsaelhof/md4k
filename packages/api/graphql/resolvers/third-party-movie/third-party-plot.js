export const thirdPartyPlot = async ({ imdbID }, _, { dataSources }) => {
  // Find the data by imdbid. This includes the TMDB id so we can look up the actual data.
  const findResults = await dataSources.TMDB.find(imdbID);

  // In general there should be only match but it seems possible to get more than one thing back.
  // If there's zero, then we can't find the TMDB data from the imdb id.
  if (findResults.length < 1) {
    throw `No movies found with imdb id ${imdbID}`;
  }

  // Look up the TMDB data using the movie id from the first request.
  const { overview } = await dataSources.TMDB.getMovie(findResults[0].id);

  return overview;
};