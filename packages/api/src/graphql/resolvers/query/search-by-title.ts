import { QueryResolvers } from "../../../__generated__/graphql.js";

export const searchByTitle: QueryResolvers["searchByTitle"] = async (
  parent,
  { title, year, page },
  { dataSources }
) => {
  const { Search, Response, totalResults } =
    await dataSources.OMDB.searchByTitle(title, year, page);

  const results =
    Response === "True"
      ? Search.map(({ Title, Year, imdbID, Poster }) => ({
          title: Title,
          year: Year,
          imdbID,
          poster: Poster && Poster !== "N/A" ? Poster : null,
        }))
      : [];

  return {
    results,
    pageInfo: {
      pages: totalResults ? Math.ceil(totalResults / 10) : 1,
      page,
    },
  };
};
