import { useAppContext } from "../../../../context/app-context";
import EmptyState from "../empty-state/empty-state";
import CreateListInput from "./components/create-list-input/create-list-input";
import CreateListError from "./components/create-list-error/create-list-error";
import { addListOptions, useAddList } from "../../../../graphql/mutations";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const { setList } = useAppContext();
  const navigate = useNavigate();
  const { addList, loading, error, reset } = useAddList({
    onCompleted: ({ addList }) => {
      setList(addList);
      navigate("/");
    },
  });

  return (
    <>
      <EmptyState
        imgSrc={"images/delorean.png"}
        quote="&quot;Roads? Where we're going, we don't need roads.&quot;"
        message={
          <>
            The future looks bright.
            <br />
            Let&apos;s get started by making a list.
          </>
        }
        content={
          error ? (
            <CreateListError reset={reset} />
          ) : (
            <CreateListInput
              onSubmit={(name) => {
                addList(addListOptions(name));
              }}
            />
          )
        }
        inProgress={loading}
      />
    </>
  );
};
