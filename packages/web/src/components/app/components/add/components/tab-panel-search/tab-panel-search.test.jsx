import { vi } from "vitest";
import TabPanelSearch from "./tab-panel-search";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { screen } from "@testing-library/react";
import { SEARCH_BY_TITLE } from "../../../../../../graphql/queries";

const SEARCH_MOCK_EMPTY = {
  request: {
    query: SEARCH_BY_TITLE,
    variables: { title: "Batman", year: undefined, page: 1 },
  },
  result: {
    data: {
      searchByTitle: {
        results: [],
        pageInfo: {
          pages: 1,
          page: 1,
        },
      },
    },
  },
};

const SEARCH_MOCK_PAGE_1 = {
  request: {
    query: SEARCH_BY_TITLE,
    variables: { title: "Batman", year: undefined, page: 1 },
  },
  result: {
    data: {
      searchByTitle: {
        results: Array(10)
          .fill()
          .map((e, i) => ({
            title: `Batman ${i}`,
            year: `200${i}`,
            imdbID: i,
            poster: `https://poster/batman${i}.jpg`,
          })),
        pageInfo: {
          pages: 2,
          page: 1,
        },
      },
    },
  },
};

const SEARCH_MOCK_PAGE_2 = {
  request: {
    query: SEARCH_BY_TITLE,
    variables: { title: "Batman", year: undefined, page: 2 },
  },
  result: {
    data: {
      searchByTitle: {
        results: Array(5)
          .fill()
          .map((e, i) => ({
            title: `Batman ${i + 10}`,
            year: `200${i}`,
            imdbID: i + 10,
            poster: `https://poster/batman${i + 10}.jpg`,
          })),
        pageInfo: {
          pages: 2,
          page: 2,
        },
      },
    },
  },
};

const SEARCH_WITH_YEAR_MOCK = {
  request: {
    query: SEARCH_BY_TITLE,
    variables: { title: "Batman", year: "2005", page: 1 },
  },
  result: {
    data: {
      searchByTitle: {
        results: Array(4)
          .fill()
          .map((e, i) => ({
            title: `Batman ${i}`,
            year: "2005",
            imdbID: i,
            poster: `https://poster/batman${i}.jpg`,
          })),
        pageInfo: {
          pages: 1,
          page: 1,
        },
      },
    },
  },
};

describe("tab-panel-search", () => {
  beforeEach((context) => {
    context.props = {
      tabId: 0,
      hidden: false,
      onAddMovie: vi.fn(),
    };
  });

  it("should render a quote when the results are null", ({ props }) => {
    renderWithProviders(<TabPanelSearch {...props} />);
    expect(screen.getByTestId("quote")).toBeInTheDocument();
  });

  it("should render the search form", ({ props }) => {
    renderWithProviders(<TabPanelSearch {...props} />);
    expect(screen.getByLabelText(/Search/)).toBeInTheDocument();
    expect(screen.getByLabelText("Year")).toBeInTheDocument();
  });

  it("should show searching while query is executed", async ({
    props,
    user,
  }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_PAGE_1],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");
    expect(await screen.findByText("Searching...")).toBeInTheDocument();
  });

  it("should show the empty state when no results are found", async ({
    props,
    user,
  }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_EMPTY],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");
    expect(await screen.findByText("No movies found.")).toBeInTheDocument();
  });

  it("should display search results", async ({ props, user }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_PAGE_1],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();
    for (var i = 0; i < 10; i++) {
      expect(screen.getByLabelText(`Batman ${i} Poster`)).toBeInTheDocument();
    }
  });

  it("should display load more and fetch additional pages when multiple pages exist", async ({
    props,
    user,
  }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_PAGE_1, SEARCH_MOCK_PAGE_2],
    });

    // Type the search
    await user.type(screen.getByLabelText(/Search/), "Batman");
    expect(await screen.findByDisplayValue("Batman")).toBeInTheDocument();

    // Load More button should appear
    expect(
      await screen.findByRole("button", { name: "Load More" })
    ).toBeInTheDocument();

    // Click Load More
    await user.click(screen.getByRole("button", { name: "Load More" }));

    // Wait for the last page to load with 5 more results. All 15 should render.
    expect(
      await screen.findByLabelText(`Batman 10 Poster`)
    ).toBeInTheDocument();
    for (var i = 0; i < 15; i++) {
      expect(screen.getByLabelText(`Batman ${i} Poster`)).toBeInTheDocument();
    }

    // Load More should no longer appear
    expect(
      screen.queryByRole("button", { name: "Load More" })
    ).not.toBeInTheDocument();
  });

  it("should reset the search results", async ({ props, user }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_PAGE_1],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");
    expect(await screen.findByDisplayValue("Batman")).toBeInTheDocument();

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();

    await user.click(screen.getByTestId("CloseIcon"));

    // Assert the state has reset
    expect(screen.queryByDisplayValue("Batman")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Search Results")).not.toBeInTheDocument();
    expect(screen.getByTestId("quote")).toBeInTheDocument();
  });

  it("should open the detail view when a result is clicked", async ({
    props,
    user,
  }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_MOCK_PAGE_1],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");
    expect(await screen.findByDisplayValue("Batman")).toBeInTheDocument();

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Batman 0 Poster"));

    // Wait for the detail popup to appear with the add button.
    expect(
      await screen.findByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Add Movie" }));

    expect(props.onAddMovie).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Batman 0" })
    );
  });

  it("should search by title and year", async ({ props, user }) => {
    renderWithProviders(<TabPanelSearch {...props} />, {
      mocks: [SEARCH_WITH_YEAR_MOCK],
    });

    await user.type(screen.getByLabelText(/Search/), "Batman");
    await user.type(screen.getByLabelText("Year"), "2005");
    expect(await screen.findByDisplayValue("Batman")).toBeInTheDocument();
    expect(await screen.findByDisplayValue("2005")).toBeInTheDocument();

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();
    for (var i = 0; i < 4; i++) {
      expect(screen.getByLabelText(`Batman ${i} Poster`)).toBeInTheDocument();
      expect(screen.getAllByText("2005")).toHaveLength(4);
    }
  });
});
