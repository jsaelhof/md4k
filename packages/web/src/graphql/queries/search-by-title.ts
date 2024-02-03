import { gql, useLazyQuery } from "@apollo/client";
import {
  type SearchByTitleQuery,
  type SearchByTitleQueryVariables,
} from "../../__generated__/graphql";
import { type Maybe } from "graphql/jsutils/Maybe";

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

export const useSearchByTitle = ({
  onCompleted,
}: {
  onCompleted: (search: Maybe<SearchByTitleQuery["searchByTitle"]>) => void;
}) => {
  const [search] = useLazyQuery<
    SearchByTitleQuery,
    SearchByTitleQueryVariables
  >(SEARCH_BY_TITLE, {
    onCompleted: ({ searchByTitle }) => onCompleted(searchByTitle),
    fetchPolicy: "cache-and-network",
  });
  return (title: string, year?: string, page?: number) =>
    search({ variables: { title, year, page } });
};
