export const searchByTitle = async (parent, { title }, { dataSources }) => {
  const { Search, Response } = await dataSources.OMDB.searchByTitle(title);

  return Response === "True"
    ? Search.map(({ Title, Year, imdbID, Poster }) => ({
        title: Title,
        year: Year,
        imdbID,
        poster: Poster && Poster !== "N/A" ? Poster : null,
      }))
    : [];
};
