import { render, screen } from "@testing-library/react";
import PosterGrid from "./poster-grid";
import { vi } from "vitest";

describe("poster-grid", () => {
  beforeEach((context) => {
    context.props = {
      searchResults: Array(10)
        .fill()
        .map((e, i) => ({
          title: `Batman ${i}`,
          year: `200${i}`,
          imdbID: i,
          poster: `https://poster/batman${i}.jpg`,
          watchedOn: `200${i}-08-02T12:00:00Z`,
        })),
      onClick: vi.fn(),
    };
  });

  it("should display search results", async ({ props }) => {
    render(<PosterGrid {...props} />);

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();
    for (let i = 0; i < 10; i++) {
      expect(screen.getByLabelText(`Batman ${i} Poster`)).toBeInTheDocument();
      expect(screen.getByText(`200${i}`)).toBeInTheDocument();
    }
  });

  it("should call the onClick handler when provided", async ({
    props,
    user,
  }) => {
    render(<PosterGrid {...props} />);

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Batman 0 Poster"));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should not call the onClick handler when not provided", async ({
    props,
    user,
  }) => {
    render(<PosterGrid {...props} onClick={undefined} />);

    expect(await screen.findByLabelText("Search Results")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Batman 0 Poster"));
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
