import { gql, useFragment } from "@apollo/client";
import { type InitialListItem } from "../types";
import { type ListsFragment } from "../../__generated__/graphql";

export const CACHED_LISTS = gql`
  fragment Lists on Query {
    lists {
      id
      label
    }
  }
`;

export const useGetInitialList = (): InitialListItem | null => {
  const { data } = useFragment<ListsFragment>({
    fragment: CACHED_LISTS,
    from: {
      __typename: "Query",
    },
  });

  return (data.lists?.[0] as InitialListItem) ?? null;
};
