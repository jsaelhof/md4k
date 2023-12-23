import { RenderOptions, render, renderHook } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { AppProvider } from "../context/app-context";
import { GET_LISTS, GET_MOVIES } from "../graphql/queries";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { buildMovieMock } from "./build-movie-mock";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { ReactElement } from "react";
import {
  GetListsQuery,
  GetListsQueryVariables,
  GetMoviesQuery,
  GetMoviesQueryVariables,
} from "../__generated__/graphql";

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    user: {
      email: "test@gmail.com",
      email_verified: true,
      name: "Test User",
      nickname: "test",
      picture:
        "https://s.gravatar.com/avatar/4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjs.png",
      sub: "auth0|611762",
      updated_at: "2022-07-30T02:07:18.011Z",
    },
    logout: vi.fn(),
  }),
}));

export const renderWithProviders = (
  children: ReactElement,
  options: RenderOptions & {
    mocks: MockedResponse[];
    listsMock: MockedResponse | null;
    moviesMock: MockedResponse | null;
    route: string;
  }
) => {
  options = {
    ...{
      mocks: [],
      listsMock: null,
      moviesMock: null,
      route: "/",
    },
    ...options,
  };

  const RenderWrapper = ({ children }: { children: ReactElement }) => (
    <MockedProvider
      mocks={[
        options.listsMock || GET_LISTS_MOCK,
        options.moviesMock || GET_MOVIES_MOCK,
        ...options.mocks,
      ]}
      addTypename={false}
    >
      <MemoryRouter initialEntries={[options.route]}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <AppProvider>{children}</AppProvider>
          </I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </MockedProvider>
  );

  const utils = render(children, { wrapper: RenderWrapper, ...options });

  return utils;
};

export const renderHookWithProviders = (
  hookWrapper: Parameters<typeof renderHook>[0],
  options: Parameters<typeof renderHook>[1] & {
    mocks: MockedResponse[];
    moviesMock: MockedResponse;
    route: string;
  }
) => {
  options = {
    ...{
      mocks: [],
      moviesMock: null,
      route: "/",
    },
    ...options,
  };

  const RenderWrapper = ({ children }: { children: ReactElement }) => (
    <MockedProvider
      mocks={[
        GET_LISTS_MOCK,
        options.moviesMock || GET_MOVIES_MOCK,
        ...options.mocks,
      ]}
      addTypename={false}
    >
      <MemoryRouter initialEntries={[options.route]}>
        <ThemeProvider theme={theme}>
          <AppProvider>{children}</AppProvider>
        </ThemeProvider>
      </MemoryRouter>
    </MockedProvider>
  );

  const utils = renderHook(hookWrapper, {
    wrapper: RenderWrapper,
    ...options,
  });

  return utils;
};

/**
 * Renders the children as the element of a route within a React Router <Routes> tag.
 * @param children The child to render as the element of the route
 * @param routePath The path to match. For example, if the real route would be "list/:id", this string needs to be passed so that "id" gets picked up by react router and made available through useParams.
 * @param route The full URL path to be matched against "routePath". For example, "list/1234" would match the routePath so that useParams will return id=1234.
 * @param options Options for renderWIthProviders. Note that if "route" is included it will be overriden by the route argument.
 */
export const renderWithProvidersAsRoute = (
  children: ReactElement,
  routePath: string,
  route: string,
  options: Parameters<typeof renderWithProviders>[1]
) =>
  renderWithProviders(
    <Routes>
      <Route path={routePath} element={children} />
    </Routes>,
    {
      ...options,
      route,
    }
  );

const GET_LISTS_MOCK: MockedResponse<GetListsQuery, GetListsQueryVariables> = {
  request: {
    query: GET_LISTS,
  },
  result: {
    data: {
      lists: [
        {
          id: "saturday",
          label: "Saturday Night",
        },
        {
          id: "family",
          label: "Family Movie Night",
        },
      ],
    },
  },
};

const GET_MOVIES_MOCK: MockedResponse<GetMoviesQuery, GetMoviesQueryVariables> =
  {
    request: {
      query: GET_MOVIES,
      variables: {
        list: "saturday",
      },
    },
    result: {
      data: {
        movies: [
          buildMovieMock({
            id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
            title: "Blade Runner",
            runtime: 7020,
            source: 1,
            genre: 3,
            year: "1982",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0083658",
            addedOn: "2021-01-16T06:39:48.002Z",
            ratings: {
              id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
              IMDB: "81%",
              ROTTEN_TOMATOES: "89%",
              METACRITIC: "84%",
              __typename: "Ratings",
            },
          }),
          buildMovieMock({
            id: "f8b5063e-8904-49f1-a5c3-5b12e7c57699",
            title: "Glory",
            runtime: 7320,
            source: 1,
            genre: 2,
            year: "1989",
            poster:
              "https://m.media-amazon.com/images/M/MV5BODhlNjA5MDEtZDVhNS00ZmM3LTg1YzAtZGRjNjhjNTAzNzVkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
            imdbID: "tt0097441",
            addedOn: "2021-01-15T00:00:25.000Z",
            ratings: {
              id: "f8b5063e-8904-49f1-a5c3-5b12e7c57699",
              IMDB: "78%",
              ROTTEN_TOMATOES: "93%",
              METACRITIC: "78%",
              __typename: "Ratings",
            },
          }),
          buildMovieMock({
            id: "ea8d443b-a4a2-4e0d-9417-e54be3907354",
            title: "Roman J. Israel, Esq.",
            runtime: 7320,
            source: 0,
            genre: 2,
            year: "2017",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjMyNjkxMTg2NV5BMl5BanBnXkFtZTgwNjkyNTk0MzI@._V1_SX300.jpg",
            imdbID: "tt6000478",
            addedOn: "2021-01-15T00:00:25.000Z",
            ratings: {
              id: "ea8d443b-a4a2-4e0d-9417-e54be3907354",
              IMDB: "65%",
              ROTTEN_TOMATOES: "54%",
              METACRITIC: "58%",
              __typename: "Ratings",
            },
          }),
        ],
      },
    },
  };

export const GET_MOVIES_MOCK_FAMILY: MockedResponse<
  GetMoviesQuery,
  GetMoviesQueryVariables
> = {
  request: {
    query: GET_MOVIES,
    variables: {
      list: "family",
    },
  },
  result: {
    data: {
      movies: [
        buildMovieMock({
          id: "20574a48-f129-4714-9cf3-08c31ec0c382",
          addedOn: "2021-02-21T05:23:08.484Z",
          title: "Indiana Jones and the Last Crusade",
          genre: 3,
          source: 1,
          runtime: 7620,
          imdbID: "tt0097576",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
          ratings: {
            IMDB: "82%",
            ROTTEN_TOMATOES: "88%",
            METACRITIC: "65%",
            id: "20574a48-f129-4714-9cf3-08c31ec0c382",
          },
          year: "1989",
          list: "family",
        }),
      ],
    },
  },
};
