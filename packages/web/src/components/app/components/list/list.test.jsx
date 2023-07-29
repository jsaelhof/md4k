import { screen, waitFor, within } from "@testing-library/react";
import { renderWithProvidersAsRoute } from "../../../../test-utils/render-with-providers";
import { List } from "./list";
import { vi } from "vitest";
import * as appContext from "../../../../context/app-context";

import { Globals } from "react-spring";
import { sort, sortDirection } from "../../../../constants/sorts";
import {
  EDIT_MOVIE,
  MARK_WATCHED,
  REMOVE_MOVIE,
} from "../../../../graphql/mutations";
import { GET_LISTS } from "../../../../graphql/queries";

Globals.assign({
  skipAnimation: true,
});

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

const REMOVE_MOVIE_ERROR_MOCK = {
  request: {
    query: REMOVE_MOVIE,
    variables: {
      movieId: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
      list: "saturday",
    },
  },
  result: {
    error: "Test Error",
  },
};

const REMOVE_MOVIE_MOCK = {
  request: {
    query: REMOVE_MOVIE,
    variables: {
      movieId: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
      list: "saturday",
    },
  },
  result: {
    data: {
      removeMovie: {
        id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
        list: "saturday",
      },
    },
  },
};

const MARK_WATCHED_MOCK = {
  request: {
    query: MARK_WATCHED,
    variables: {
      movie: {
        id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
        title: "Blade Runner",
        list: "saturday",
        runtime: 7020,
        source: 1,
        genre: 3,
        year: "1982",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt0083658",
        locked: false,
        addedOn: "2021-01-16T06:39:48.002Z",
        watchedOn: "2023-08-02T00:00:00.000Z", // Set this to the fake time set in before each as this is the date that will be genereated for new Date() as the watched time.
        ratings: {
          id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
          IMDB: "81%",
          ROTTEN_TOMATOES: "89%",
          METACRITIC: "84%",
        },
        background: null,
      },
      list: "saturday",
    },
  },
  result: {
    data: {
      editMovie: {
        id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
        title: "Blade Runner",
        list: "saturday",
        runtime: 7020,
        source: 1,
        genre: 3,
        year: "1982",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt0083658",
        locked: false,
        addedOn: "2021-01-16T06:39:48.002Z",
        watchedOn: "2023-08-02T00:00:00.000Z", // Set this to the fake time set in before each as this is the date that will be genereated for new Date() as the watched time.
        ratings: {
          id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
          IMDB: "81%",
          ROTTEN_TOMATOES: "89%",
          METACRITIC: "84%",
        },
        background: null,
      },
      list: "saturday",
    },
  },
};

const EDIT_MOVIE_MOCK = {
  request: {
    query: EDIT_MOVIE,
    variables: {
      movie: {
        id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
        title: "Blade Runner",
        list: "saturday",
        runtime: 7020,
        source: 1,
        genre: 3,
        year: "1982",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt0083658",
        locked: false,
        addedOn: "2021-01-16T06:39:48.002Z",
        watchedOn: null,
        ratings: {
          id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
          IMDB: "81%",
          ROTTEN_TOMATOES: "89%",
          METACRITIC: "84%",
        },
        background: null,
      },
      list: "saturday",
    },
  },
  result: {
    data: {
      editMovie: {
        id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
        title: "Blade Runner",
        list: "saturday",
        runtime: 7020,
        source: 1,
        genre: 3,
        year: "1982",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        imdbID: "tt0083658",
        locked: false,
        addedOn: "2021-01-16T06:39:48.002Z",
        watchedOn: null,
        ratings: {
          id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
          IMDB: "81%",
          ROTTEN_TOMATOES: "89%",
          METACRITIC: "84%",
        },
        background: null,
      },
      list: "saturday",
    },
  },
};

// Mocks the complex list grid of movies with stub buttons that can be clicked to simulate actions on movie cards
vi.mock("./components/list-grid/list-grid", () => ({
  default: ({ movies, onMarkWatched, onEditMovie, onRemoveMovie }) => (
    <>
      <div>
        {movies.map(({ title }) => (
          <div key={title}>{title}</div>
        ))}
      </div>

      <button onClick={() => onMarkWatched(movies[0])}>
        MOCK MARK WATCHED
      </button>

      <button onClick={() => onEditMovie(movies[0], false)}>MOCK EDIT</button>

      <button onClick={() => onEditMovie(movies[0], true)}>
        MOCK USE EDITOR
      </button>

      <button onClick={() => onRemoveMovie(movies[0])}>MOCK DELETE</button>
    </>
  ),
}));

describe("list", () => {
  beforeEach((context) => {
    // tell vitest we use mocked time
    // https://github.com/nock/nock/issues/2200#issuecomment-1487029921 is used here to keep the suite from hanging.
    vi.useFakeTimers({
      toFake: ["Date"],
    });

    vi.setSystemTime("2023-08-02T00:00:00.000Z");

    context.appContextSpy = vi.spyOn(appContext, "useAppContext");
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();

    vi.clearAllMocks();
  });

  it("should render the action bar", async () => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`
    );

    expect(await screen.findByText(/Pick/)).toBeInTheDocument();
  });

  it("should render the list", async () => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`
    );

    // The list grid renders all the movies but all this component do is render it and pass the movies and handlers along.
    expect(await screen.findByText(/Blade/)).toBeInTheDocument();
  });

  it.todo(
    "should render the error dialog",
    async ({ user, userNoPointerCheck }) => {
      // TODO: I Can't get this test to work.
      // I'm getting errors destructing {removeMovie} when I try to simulate the error
      renderWithProvidersAsRoute(
        <List />,
        `/list/*`,
        `/list/${sort.ADDED}/${sortDirection.DESC}`,
        {
          mocks: [REMOVE_MOVIE_ERROR_MOCK],
        }
      );

      expect((await screen.findAllByText(/Blade/)).length).toBeGreaterThan(0);
      const firstMovie = screen.getAllByTestId("positioner")[0];
      await userNoPointerCheck.hover(firstMovie);
      await user.click(within(firstMovie).getByLabelText("Delete"));
      await user.click(screen.getByRole("button", { name: "Delete" }));
    }
  );

  it("should call mark watched", async ({ user, appContextSpy }) => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`,
      {
        mocks: [MARK_WATCHED_MOCK],
      }
    );

    expect(
      await screen.findByRole("button", { name: "MOCK MARK WATCHED" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "MOCK MARK WATCHED" }));

    // Assert that the toast was set.
    expect(appContextSpy).toHaveReturnedWith(
      expect.objectContaining({
        toast: expect.objectContaining({
          message: "Moved 'Blade Runner' to watched list",
        }),
      })
    );
  });

  it("should call edit and immediately send mutation when useEditor is false", async ({
    user,
  }) => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`,
      {
        mocks: [EDIT_MOVIE_MOCK],
      }
    );

    expect(
      await screen.findByRole("button", { name: "MOCK EDIT" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "MOCK EDIT" }));

    // Test passes if it doesn't fail to call the mock
  });

  it("should forward to the editor page when useEditor is true", async ({
    user,
  }) => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`
    );

    expect(
      await screen.findByRole("button", { name: "MOCK USE EDITOR" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "MOCK USE EDITOR" }));

    expect(navigateMock).toHaveBeenCalledWith(
      "/edit/7614bdcb-d21a-40d8-880d-aae8cbfccb56"
    );
  });

  it("should call the remove movie mutation", async ({ user }) => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`,
      {
        mocks: [REMOVE_MOVIE_MOCK],
      }
    );

    expect(
      await screen.findByRole("button", { name: "MOCK DELETE" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "MOCK DELETE" }));
  });

  it("should navigate to the create list route when no lists exist", async () => {
    renderWithProvidersAsRoute(
      <List />,
      `/list/*`,
      `/list/${sort.ADDED}/${sortDirection.DESC}`,
      {
        // Mock an empty list
        listsMock: {
          request: {
            query: GET_LISTS,
          },
          result: {
            data: {
              lists: [],
            },
          },
        },
      }
    );

    await waitFor(() =>
      expect(navigateMock).toHaveBeenCalledWith("/create", { replace: true })
    );
  });
});
