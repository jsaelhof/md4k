export const searchByTitle = async (
  parent,
  { title, year },
  { dataSources }
) => {
  const { Search, Response } = await dataSources.OMDB.searchByTitle(
    title,
    year
  );

  return Response === "True"
    ? Search.map(({ Title, Year, imdbID, Poster }) => ({
        title: Title,
        year: Year,
        imdbID,
        poster: Poster && Poster !== "N/A" ? Poster : null,
      }))
    : [];
};
