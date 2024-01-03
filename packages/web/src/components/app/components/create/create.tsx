import { useAppContext } from "../../../../context/app-context";
import EmptyState from "../empty-state/empty-state";
import CreateListInput from "./components/create-list-input/create-list-input";
import CreateListError from "./components/create-list-error/create-list-error";
import { addListOptions, useAddList } from "../../../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { useI18n } from "../../../../hooks/use-i18n";
import createStrings from "./i18n/i18n";
import { ReactElement } from "react";

export const Create = (): ReactElement => {
  const { t } = useI18n(createStrings);
  const { setList } = useAppContext();
  const navigate = useNavigate();
  const { addList, loading, error, reset } = useAddList({
    onCompleted: ({ addList }) => {
      addList && setList(addList);
      navigate("/");
    },
  });

  return (
    <EmptyState
      imgSrc={"images/delorean.png"}
      quote={t("create:quote")}
      message={
        <>
          {t("create:message_1")}
          <br />
          {t("create:message_2")}
        </>
      }
      content={
        error ? (
          <CreateListError reset={reset} />
        ) : (
          <CreateListInput
            onSubmit={(name: string): void => {
              addList(addListOptions(name));
            }}
          />
        )
      }
      inProgress={loading}
    />
  );
};