import { gql, useLazyQuery } from "@apollo/client";

export const SEARCH_BY_TITLE = gql`
  query SearchByTitle($title: String!, $year: String, $page: Int) {
    searchByTitle(title: $title, year: $year, page: $page) {
      title
      year
      imdbID
      poster
    }
  }
`;

export const useSearchByTitle = ({ onCompleted }) => {
  const [search] = useLazyQuery(SEARCH_BY_TITLE, {
    onCompleted: ({ searchByTitle }) => onCompleted(searchByTitle),
  });
  return (title, year, page) => search({ variables: { title, year, page } });
};
