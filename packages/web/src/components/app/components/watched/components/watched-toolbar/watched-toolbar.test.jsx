import { screen } from "@testing-library/react";
import WatchedToolbar from "./watched-toolbar";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

const { MOCK_USE_MEDIA_QUERY } = vi.hoisted(() => ({
  MOCK_USE_MEDIA_QUERY: vi.fn().mockReturnValue(false),
}));

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material");
  return { ...actual, useMediaQuery: MOCK_USE_MEDIA_QUERY };
});

describe("watched-toolbar", () => {
  beforeEach((context) => {
    context.props = {
      count: 999,
      visibleCount: 999,
      searchTerm: "",
      onSearch: vi.fn(),
    };
  });

  it("should render the toolbar", ({ props }) => {
    renderWithProviders(<WatchedToolbar {...props} />);

    expect(screen.getByText(/999/)).toBeInTheDocument();
    expect(screen.getByLabelText("Search")).toBeInTheDocument();
    expect(screen.getByLabelText("Search")).toHaveAttribute(
      "placeholder",
      "Search"
    );
  });

  it("should call onSearch with each keystroke", async ({ props, user }) => {
    renderWithProviders(<WatchedToolbar {...props} />);
    await user.type(screen.getByLabelText("Search"), "Batman");
    expect(props.onSearch).toHaveBeenCalledTimes(6);
  });

  it("should display the search term in the field", ({ props }) => {
    renderWithProviders(<WatchedToolbar {...props} searchTerm="Batman" />);
    expect(screen.getByDisplayValue("Batman")).toBeInTheDocument();
  });

  it("should display the count when not filtered", ({ props }) => {
    renderWithProviders(<WatchedToolbar {...props} />);
    expect(screen.getByText(/999/)).toBeInTheDocument();
  });

  it("should display the filtered count when filtered", ({ props }) => {
    renderWithProviders(<WatchedToolbar {...props} visibleCount={777} />);
    expect(screen.getByText(/777.*999/)).toBeInTheDocument();
  });

  it("should display the count when not filtered and mobile", ({ props }) => {
    MOCK_USE_MEDIA_QUERY.mockResolvedValueOnce(true);
    renderWithProviders(<WatchedToolbar {...props} />);
    expect(screen.getByText(/999/)).toBeInTheDocument();
  });

  it("should display the filtered count when filtered and mobile", ({
    props,
  }) => {
    MOCK_USE_MEDIA_QUERY.mockResolvedValueOnce(true);
    renderWithProviders(<WatchedToolbar {...props} visibleCount={777} />);
    expect(screen.getByText(/777.*999/)).toBeInTheDocument();
  });
});
