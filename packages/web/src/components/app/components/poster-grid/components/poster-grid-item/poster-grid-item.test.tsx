import { render, screen } from "@testing-library/react";
import SearchResult from "./poster-grid-item";
import { vi } from "vitest";

describe("poster-grid-item", () => {
  beforeEach((context) => {
    context.props = {
      height: 200,
      searchResult: {
        title: "Test Title",
        year: "2000",
        watchedOn: "2000-08-02T12:00:00Z",
      },
      delay: 0,
      onClick: vi.fn(),
    };
  });

  it("should render the search result with info as year", ({ props }) => {
    render(<SearchResult {...props} />);
    expect(screen.getAllByText("Test Title")).toHaveLength(2);
    expect(screen.getByText("2000")).toBeInTheDocument();
  });

  it("should call on click", async ({ props, user }) => {
    render(<SearchResult {...props} />);
    await user.click(screen.getByLabelText(/Test Title/));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should not call on click when not provided", async ({ props, user }) => {
    render(<SearchResult {...props} onClick={undefined} />);
    await user.click(screen.getByLabelText(/Test Title/));
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
