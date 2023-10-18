import { gql, useLazyQuery } from "@apollo/client";

export const SEARCH_BY_TITLE = gql`
  query SearchByTitle($title: String!, $year: String, $page: Int) {
    searchByTitle(title: $title, year: $year, page: $page) {
      results {
        title
        year
        imdbID
        poster
      }
      pageInfo {
        pages
        page
      }
    }
  }
`;

export const useSearchByTitle = ({ onCompleted }) => {
  const [search] = useLazyQuery(SEARCH_BY_TITLE, {
    onCompleted: ({ searchByTitle }) => onCompleted(searchByTitle),
    fetchPolicy: "cache-and-network",
  });
  return (title, year, page) => search({ variables: { title, year, page } });
};
