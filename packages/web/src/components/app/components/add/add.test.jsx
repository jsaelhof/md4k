import { screen } from "@testing-library/react";
import { Add } from "./add";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import { vi } from "vitest";
import TabPanel from "./components/tab-panel/tab-panel";
import { ADD_MOVIE, addMovieOptions } from "../../../../graphql/mutations";
import { GraphQLError } from "graphql";

const movieData = {
  id: "111-222-333",
  imdbID: "tt1234567",
  list: "saturday",
  title: "Test Movie",
  year: "2000",
  runtime: "7200",
  source: 1,
  genre: 2,
  poster: "https://test.com/poster.png",
  locked: false,
  ratings: {
    id: "111-222-333",
    IMDB: "20%",
    ROTTEN_TOMATOES: "80%",
    METACRITIC: "60%",
  },
};

const MOCK_ADD_MOVIE = {
  request: {
    query: ADD_MOVIE,
    variables: {
      movie: movieData,
      list: "saturday",
    },
  },
  result: {
    // addMovieOptions builds the expected response data which adds additional fields to the movieData.
    data: addMovieOptions(movieData, { id: "saturday" }).optimisticResponse,
  },
};

// UUID is used inside the mutation to generate id's for the movie and ratings objects.
// Mock the return value here so that we can match the MOCK_ADD_MOVIE mutation.
vi.mock("uuid", () => ({
  v4: () => "111-222-333",
}));

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

vi.mock("./components/tab-panel-search/tab-panel-search", () => ({
  default: ({ tabId, hidden, onAddMovie }) => (
    <TabPanel tabId={tabId} hidden={hidden}>
      <button
        // Simulate the info collected about the movie and returned to the Add component
        onClick={() =>
          onAddMovie({
            imdbID: "tt1234567",
            title: "Test Movie",
            year: "2000",
            runtime: "7200",
            source: 1,
            genre: 2,
            poster: "https://test.com/poster.png",
            ratings: {
              IMDB: "20%",
              ROTTEN_TOMATOES: "80%",
              METACRITIC: "60%",
            },
          })
        }
      >
        Add
      </button>
    </TabPanel>
  ),
}));

vi.mock("./components/tab-panel-manual/tab-panel-manual", () => ({
  default: ({ tabId, hidden, onAddMovie }) => (
    <TabPanel tabId={tabId} hidden={hidden}>
      <button onClick={() => onAddMovie({})}>Add</button>
    </TabPanel>
  ),
}));

const { MOCK_SET_TOAST } = vi.hoisted(() => ({
  MOCK_SET_TOAST: vi.fn(),
}));
vi.mock("../../../../context/app-context", async () => {
  const actual = await vi.importActual("../../../../context/app-context");
  return {
    ...actual,
    useAppContext: vi.fn().mockReturnValue({
      list: { id: "saturday" },
      setToast: MOCK_SET_TOAST,
    }),
  };
});

describe("add", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the tabs and default selected tab panel", () => {
    renderWithProviders(<Add />);
    expect(screen.getByText("Add By Search")).toBeInTheDocument();
    expect(screen.getByText("Add Manually")).toBeInTheDocument();

    // Default tab panel is panel 0
    expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "tabpanel-0");
  });

  it("should switch tabs", async ({ user }) => {
    renderWithProviders(<Add />);

    await user.click(screen.getByRole("tab", { name: /Manually/ }));

    // Manual tab is id 1.
    expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "tabpanel-1");

    await user.click(screen.getByRole("tab", { name: /Search/ }));

    // Search tab is id 0.
    expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "tabpanel-0");
  });

  it("should add a movie", async ({ user }) => {
    renderWithProviders(<Add />, {
      mocks: [MOCK_ADD_MOVIE],
    });

    await user.click(screen.getByRole("button", { name: "Add" }));

    // Called from the add movie mutation's onComplete
    expect(navigateMock).toHaveBeenCalledWith("/");

    // Called from the add movie mutation's onComplete
    expect(MOCK_SET_TOAST).toHaveBeenCalledWith({
      message: "Added 'Test Movie'",
    });
  });

  it("should show the error when it fails to add movie", async ({ user }) => {
    renderWithProviders(<Add />, {
      mocks: [
        { ...MOCK_ADD_MOVIE, result: { errors: [new GraphQLError("Error")] } },
      ],
    });

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Houston/)).toBeInTheDocument();
  });
});
