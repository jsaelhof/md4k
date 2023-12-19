import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_LISTS } from "../queries";
import {
  AddListMutation,
  AddListMutationVariables,
} from "../../__generated__/graphql";

const ADD_LIST = gql`
  mutation AddList($name: String!) {
    addList(name: $name) {
      id
      label
    }
  }
`;

export const addListOptions = (name: string) => ({
  variables: { name },
});

export const useAddList = ({
  onCompleted,
}: {
  onComplete: (data: AddListMutation) => void;
}) => {
  const [addList, { loading, error, reset }] = useMutation<
    AddListMutation,
    AddListMutationVariables
  >(ADD_LIST, {
    onCompleted,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onError: () => {}, // Required to prevent throwing an uncaught exception.
    update(cache, { data }) {
      data?.addList &&
        cache.updateQuery(
          {
            query: GET_LISTS,
            variables: { name: data.addList.label },
          },
          ({ lists }) => ({
            lists: [...lists, addList],
          })
        );
    },
  });

  return { addList, loading, error, reset };
};
