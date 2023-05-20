import { gql, useLazyQuery } from "@apollo/client";

export const SEARCH_BY_TITLE = gql`
  query SearchByTitle($title: String!, $year: String) {
    searchByTitle(title: $title, year: $year) {
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
  return (title, year) => search({ variables: { title, year } });
};
