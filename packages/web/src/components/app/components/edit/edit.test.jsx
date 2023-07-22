import { screen } from "@testing-library/react";
import { renderWithProvidersAsRoute } from "../../../../utils/render-with-providers";
import { vi } from "vitest";
import { Edit } from "./edit";
import { EDIT_MOVIE } from "../../../../graphql/mutations";
import { GraphQLError } from "graphql";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

const movieData = {
  id: "7614bdcb-d21a-40d8-880d-aae8cbfccb56",
  title: "Blade Runner 2049",
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
};

const MOCK_EDIT_MOVIE_MUTATION = {
  request: {
    query: EDIT_MOVIE,
    variables: {
      movie: movieData,
      list: "saturday",
    },
  },
  result: {
    data: {
      editMovie: movieData,
    },
  },
};

describe("edit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the edit screen with fields populated", async () => {
    renderWithProvidersAsRoute(
      <Edit />,
      "/edit/:movieId",
      "/edit/7614bdcb-d21a-40d8-880d-aae8cbfccb56"
    );

    expect(await screen.findByText("Update Movie")).toBeInTheDocument();

    // This isn't going to test all fields... the form component has full tests.
    // This is just a smoke test to be sure that the the right movie is being passed to it.
    expect(screen.getByDisplayValue("Blade Runner")).toBeInTheDocument();
  });

  it("should call the edit mutation with new data", async ({ user }) => {
    renderWithProvidersAsRoute(
      <Edit />,
      "/edit/:movieId",
      "/edit/7614bdcb-d21a-40d8-880d-aae8cbfccb56",
      {
        mocks: [MOCK_EDIT_MOVIE_MUTATION],
      }
    );

    expect(await screen.findByText("Update Movie")).toBeInTheDocument();

    await user.type(screen.getByDisplayValue("Blade Runner"), " 2049");
    expect(screen.getByDisplayValue("Blade Runner 2049")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Save" }));

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("should show the error dialog when an error occurs in the mmutation", async ({
    user,
  }) => {
    renderWithProvidersAsRoute(
      <Edit />,
      "/edit/:movieId",
      "/edit/7614bdcb-d21a-40d8-880d-aae8cbfccb56",
      {
        mocks: [
          {
            ...MOCK_EDIT_MOVIE_MUTATION,
            result: {
              errors: [new GraphQLError("Error!")],
            },
          },
        ],
      }
    );

    expect(await screen.findByText("Update Movie")).toBeInTheDocument();
    await user.type(screen.getByDisplayValue("Blade Runner"), " 2049");
    expect(screen.getByDisplayValue("Blade Runner 2049")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Save" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Houston/)).toBeInTheDocument();
  });

  it("should display the error when a movie id can't be found", async () => {
    renderWithProvidersAsRoute(<Edit />, "/edit/:movieId", "/edit/999");
    expect(await screen.findByText(/Unable.*999/)).toBeInTheDocument();
  });
});
