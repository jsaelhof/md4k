import React, { PropsWithChildren, useCallback } from "react";
import { createContext, useState } from "react";
import { useGetLists, useGetMovies } from "../graphql/queries";
import { GetListsItem, GetMovieItem } from "../graphql/types";
import { Maybe } from "graphql/jsutils/Maybe";
import { ToastProps } from "../types";

export type AppContextType = {
  lists?: Maybe<GetListsItem[]>;
  list: GetListsItem | null;
  setList?: (list: GetListsItem) => void;
  movies: GetMovieItem[];
  moviesById: { [key: string]: GetMovieItem };
  pick: string | null;
  setPick?: (value: string | null) => void;
  clearPick?: () => void;
  toast: Maybe<ToastProps>;
  setToast: (toast: ToastProps) => void;
};

const AppContext = createContext<AppContextType>({
  list: null,
  movies: [],
  moviesById: {},
  toast: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToast: () => {},
  pick: null,
});

const AppProvider = ({ children }: PropsWithChildren) => {
  const [list, _setList] = useState<GetListsItem | null>(null);
  const { lists } = useGetLists({ onCompleted: _setList });

  // Initialize using the list but if it's undefined and "lists" has data (from the persisted cache) use that to avoid waiting for useGetLists to complete.
  // It complets after the network part of cache-and-network is done so its late if there is cached data available. We want to take advantage of that to load really fast.
  const { movies, moviesById } = useGetMovies(list ?? lists?.[0]);
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [pick, setPick] = useState<string | null>(null);

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

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useAppContext };
