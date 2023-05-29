export const searchByTitle = async (
  parent,
  { title, year, page },
  { dataSources }
) => {
  const { Search, Response } = await dataSources.OMDB.searchByTitle(
    title,
    year,
    page
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
