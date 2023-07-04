import { screen } from "@testing-library/react";
import { Add } from "./add";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { vi } from "vitest";
import TabPanel from "./components/tab-panel/tab-panel";

describe("add", () => {
  const { MOCK_ADD_MOVIE_MUTATION } = vi.hoisted(() => ({
    MOCK_ADD_MOVIE_MUTATION: vi.fn(),
  }));

  // const { MOCK_SET_TOAST } = vi.hoisted(() => ({
  //   MOCK_SET_TOAST: vi.fn(),
  // }));

  // const ADD_MOVIE_MOCK = {
  //   id: "111",
  //   list: "saturday",
  //   locked: false,
  //   ratings: { id: "111" },
  //   title: "Test Movie",
  //   year: "2000",
  // };

  // const ADD_MOVIE_MUTATION_MOCK = {
  //   request: {
  //     query: ADD_MOVIE,
  //     variables: {
  //       movie: ADD_MOVIE_MOCK,
  //       list: "saturday",
  //     },
  //   },
  //   newData: vi.fn(() => ({
  //     data: {
  //       addMovie: ADD_MOVIE_MOCK,
  //     },
  //   })),
  // };

  // The addMovie mutation generates uuids interally.
  // In order to mock it so it can match, I have to mock uuid v4 to always return a known value.
  // vi.mock("uuid", () => ({
  //   v4: vi.fn().mockReturnValue("111"),
  // }));

  // vi.mock("../../../../context/app-context", async () => {
  //   const actual = await vi.importActual("../../../../context/app-context");

  //   return {
  //     ...actual,
  //     useAppContext: vi.fn().mockReturnValue({
  //       list: { id: "saturday" },
  //       //setToast: MOCK_SET_TOAST,
  //     }),
  //   };
  // });

  vi.mock("../../../../graphql/mutations/add-movie", async () => {
    const actual = await vi.importActual(
      "../../../../graphql/mutations/add-movie"
    );

    return {
      ...actual,
      useAddMovie: vi.fn().mockReturnValue([MOCK_ADD_MOVIE_MUTATION]),
    };
  });

  vi.mock("./components/tab-panel-search/tab-panel-search", () => ({
    default: ({ tabId, hidden, onAddMovie }) => (
      <TabPanel tabId={tabId} hidden={hidden}>
        <button
          onClick={() =>
            onAddMovie({
              title: "Test Movie",
              year: "2000",
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

  // FIXME: Mocking useAddMovie is enough to test that the mutation is called with the right data
  // but it doesn't execute the completed and error flows. Passing a mock to renderWIthProviders
  // is causing a bunch of issues with the cache and other mocks like GET_MOVIES. I couldn't get that
  // to work so I'm doing this for now.
  it("should add a movie", async ({ user }) => {
    renderWithProviders(<Add />);

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(MOCK_ADD_MOVIE_MUTATION).toHaveBeenCalledWith({
      optimisticResponse: expect.any(Object),
      variables: {
        list: "saturday",
        movie: expect.objectContaining({ title: "Test Movie" }),
      },
    });
  });

  // FIXME: I Cannot figure out how to get a mutation with an error to mock so that the error state fires. Common problem from my reading on StackOverflow.
});
