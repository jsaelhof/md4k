import React, {
  type PropsWithChildren,
  type ReactElement,
  useCallback,
} from "react";
import { createContext, useState } from "react";
import { useGetLists, useGetMovies } from "../graphql/queries";
import { type GetListsItem, type GetMovieItem } from "../graphql/types";
import { type Maybe } from "graphql/jsutils/Maybe";
import { type ToastProps } from "../types";

export type AppContextType = {
  lists: GetListsItem[];
  list: GetListsItem | null;
  setList: (list: GetListsItem) => void;
  loading: boolean;
  movies: GetMovieItem[];
  moviesById: { [key: string]: GetMovieItem };
  pick: string | null;
  setPick: (value: string | null) => void;
  clearPick: () => void;
  toast: Maybe<ToastProps>;
  setToast: (toast: ToastProps | null) => void;
};

const AppContext = createContext<AppContextType>({
  lists: [],
  list: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setList: () => {},
  loading: true,
  movies: [],
  moviesById: {},
  toast: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToast: () => {},
  pick: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPick: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearPick: () => {},
});

const AppProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [list, _setList] = useState<GetListsItem | null>(null);
  const {
    lists,
    loading: listsLoading,
    error: listsError,
  } = useGetLists({
    onCompleted: _setList,
  });

  // Initialize using the list but if it's undefined and "lists" has data (from the persisted cache) use that to avoid waiting for useGetLists to complete.
  // It completes after the network part of cache-and-network is done so its late if there is cached data available. We want to take advantage of that to load really fast.
  const {
    movies,
    moviesById,
    loading: moviesLoading,
    error: moviesError,
  } = useGetMovies(list ?? lists?.[0]);
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [pick, setPick] = useState<string | null>(null);

  // If we can't get the lists or movies, throw an error. The whole app isn't going to work.
  // This is almost always an error due to expired auth which is handled in the Apollo client.
  // But if something else goes wrong, this will show the error screen.
  if (listsError || moviesError) throw new Error("GraphQL Error at AppContext");

  // Expose a list change function so that we can clear any state from the old list while changing to a new one
  const setList = useCallback((list: GetListsItem) => {
    setPick(null);
    _setList(list);
  }, []);

  const clearPick = useCallback(() => {
    setPick(null);
  }, []);

  const context = {
    lists,
    list,
    setList,
    loading: listsLoading || moviesLoading,
    movies,
    moviesById,
    pick,
    setPick,
    clearPick,
    toast,
    setToast,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppContextType => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useAppContext };
