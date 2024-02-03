import { type QueryResult, gql, useQuery } from "@apollo/client";
import { type GetListsQuery } from "../../__generated__/graphql";
import { type GetListsItem } from "../types";
import { notEmpty } from "../../utils/not-empty";

export const GET_LISTS = gql`
  query GetLists {
    lists {
      id
      label
    }
  }
`;

export type useGetListsArgs = {
  onCompleted: (list: GetListsItem | null) => void;
};

export const useGetLists = ({
  onCompleted,
}: useGetListsArgs): { lists: GetListsItem[] } & Omit<
  QueryResult<GetListsQuery>,
  "data"
> => {
  const { data, loading, ...rest } = useQuery<GetListsQuery>(GET_LISTS, {
    onCompleted: ({ lists }) => {
      lists && onCompleted(lists?.[0]);
    },
    fetchPolicy: "cache-and-network",
  });

  return {
    lists: data?.lists?.filter(notEmpty) ?? [],
    ...rest,
    loading: loading && !data,
  };
};
