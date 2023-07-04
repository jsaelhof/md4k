import { render, screen } from "@testing-library/react";
import SearchResult from "./search-result";
import { vi } from "vitest";

describe("search-result", () => {
  beforeEach((context) => {
    context.props = {
      height: 200,
      movie: {
        title: "Test Title",
        year: "2000",
      },
      delay: 0,
      onClick: vi.fn(),
    };
  });

  it("should render the search result", ({ props }) => {
    render(<SearchResult {...props} />);
    expect(screen.getAllByText("Test Title")).toHaveLength(2);
    expect(screen.getByText("2000")).toBeInTheDocument();
  });

  it("should call on click", async ({ props, user }) => {
    render(<SearchResult {...props} />);
    await user.click(screen.getByLabelText(/Test Title/));
    expect(props.onClick).toHaveBeenCalled();
  });
});
