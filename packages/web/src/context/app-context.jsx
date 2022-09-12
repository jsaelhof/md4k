import React, { useCallback } from "react";
import { createContext, useState } from "react";
import { useGetLists, useGetMovies } from "../graphql/queries";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [list, _setList] = useState();
  const { lists } = useGetLists({ onCompleted: _setList });
  const {
    movies,
    moviesById,
    watchedMovies,
    loading: loadingMovies,
  } = useGetMovies(list);
  const [order, setOrder] = useState(["addedOn", "desc"]);
  const [pick, setPick] = useState(null);

  // Expose a list change function so that we can clear any state from the old list while changing to a new one
  const setList = useCallback((val) => {
    setPick(null);
    _setList(val);
  }, []);

  const clearPick = useCallback(() => {
    setPick(null);
  }, []);

  /**
   * {
    "lists": [
        {
            "__typename": "List",
            "id": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
            "label": "Staging"
        }
    ],
    "list": {
        "__typename": "List",
        "id": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
        "label": "Staging"
    },
    "movies": [
        {
            "__typename": "Movie",
            "id": "0b3c9190-f6d9-404b-904f-654a127a4ae7",
            "title": "Star Wars: Episode IV - A New Hope",
            "list": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
            "runtime": 7260,
            "source": 6,
            "genre": 3,
            "year": "1977",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "imdbID": "tt0076759",
            "locked": false,
            "addedOn": "2021-12-29T19:55:11.013Z",
            "watchedOn": null,
            "ratings": {
                "__typename": "Ratings",
                "id": "0b3c9190-f6d9-404b-904f-654a127a4ae7",
                "IMDB": "86%",
                "ROTTEN_TOMATOES": "92%",
                "METACRITIC": "90%"
            },
            "background": null
        },
        {
            "__typename": "Movie",
            "id": "66974fab-db07-41d9-8ecc-f4ceabd891f9",
            "title": "The Goonies",
            "list": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
            "runtime": 6840,
            "source": 0,
            "genre": 1,
            "year": "1985",
            "poster": "https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "imdbID": "tt0089218",
            "locked": false,
            "addedOn": "2021-12-29T19:55:45.247Z",
            "watchedOn": null,
            "ratings": {
                "__typename": "Ratings",
                "id": "66974fab-db07-41d9-8ecc-f4ceabd891f9",
                "IMDB": "78%",
                "ROTTEN_TOMATOES": "77%",
                "METACRITIC": "62%"
            },
            "background": null
        }
    ],
    "moviesById": {
        "0b3c9190-f6d9-404b-904f-654a127a4ae7": {
            "__typename": "Movie",
            "id": "0b3c9190-f6d9-404b-904f-654a127a4ae7",
            "title": "Star Wars: Episode IV - A New Hope",
            "list": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
            "runtime": 7260,
            "source": 6,
            "genre": 3,
            "year": "1977",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            "imdbID": "tt0076759",
            "locked": false,
            "addedOn": "2021-12-29T19:55:11.013Z",
            "watchedOn": null,
            "ratings": {
                "__typename": "Ratings",
                "id": "0b3c9190-f6d9-404b-904f-654a127a4ae7",
                "IMDB": "86%",
                "ROTTEN_TOMATOES": "92%",
                "METACRITIC": "90%"
            },
            "background": null
        },
        "66974fab-db07-41d9-8ecc-f4ceabd891f9": {
            "__typename": "Movie",
            "id": "66974fab-db07-41d9-8ecc-f4ceabd891f9",
            "title": "The Goonies",
            "list": "5ea3b2ee-761b-47c8-abb9-9377f3826931",
            "runtime": 6840,
            "source": 0,
            "genre": 1,
            "year": "1985",
            "poster": "https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "imdbID": "tt0089218",
            "locked": false,
            "addedOn": "2021-12-29T19:55:45.247Z",
            "watchedOn": null,
            "ratings": {
                "__typename": "Ratings",
                "id": "66974fab-db07-41d9-8ecc-f4ceabd891f9",
                "IMDB": "78%",
                "ROTTEN_TOMATOES": "77%",
                "METACRITIC": "62%"
            },
            "background": null
        }
    },
    "watchedMovies": null,
    "loadingMovies": false,
    "order": [
        "addedOn",
        "desc"
    ],
    "pick": null
}
   */
  const context = {
    lists,
    list,
    setList,
    movies,
    moviesById,
    watchedMovies,
    loadingMovies,
    order,
    setOrder,
    pick,
    setPick,
    clearPick,
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
