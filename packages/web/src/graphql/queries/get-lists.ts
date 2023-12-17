import { gql, useQuery } from "@apollo/client";
import { GetListsQuery } from "../../__generated__/graphql";
import { GetListsItem } from "../types";

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

export const useGetLists = ({ onCompleted }: useGetListsArgs) => {
  const { data, ...rest } = useQuery<GetListsQuery>(GET_LISTS, {
    onCompleted: ({ lists }) => {
      onCompleted(lists?.[0]);
    },
    fetchPolicy: "cache-and-network",
  });

  return { ...data, ...rest };
};
