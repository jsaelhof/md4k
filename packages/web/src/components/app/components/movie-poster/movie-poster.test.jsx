import { render, screen } from "@testing-library/react";
import MoviePoster from "./movie-poster";
import { vi } from "vitest";

const { MOCK_OBSERVER } = vi.hoisted(() => ({
  MOCK_OBSERVER: vi.fn().mockReturnValue({
    ref: null,
    visible: true,
  }),
}));

vi.mock("../../../../hooks/use-intersection-observer", () => ({
  useIntersectionObserver: MOCK_OBSERVER,
}));

describe("movie-poster", () => {
  beforeEach((context) => {
    context.props = {
      movie: {
        id: "8502fd8b-165e-4239-965f-b46f8d523829",
        title: "The Bourne Identity",
        list: "saturday",
        runtime: 7140,
        source: 1,
        genre: 3,
        year: "2002",
        poster: "https://m.media-amazon.com/images/M/SX300.jpg",
        imdbID: "tt0258463",
        locked: false,
        addedOn: "2022-03-15T04:28:22.166Z",
        watchedOn: null,
        ratings: {
          id: "8502fd8b-165e-4239-965f-b46f8d523829",
          IMDB: "79%",
          ROTTEN_TOMATOES: "84%",
          METACRITIC: "68%",
        },
        background: "http://image.tmdb.org/t/2.jpg",
      },
      onClick: vi.fn(),
    };
  });

  it("should render the correct height and width ratio", ({ props }) => {
    render(<MoviePoster {...props} height={1000} />);
    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      width: "640px",
      height: "1000px",
    });
  });

  it("should render the poster when a url exists in the movie", ({ props }) => {
    render(<MoviePoster {...props} />);
    expect(screen.getByTestId("poster")).toHaveStyle({
      "background-image": `url(${props.movie.poster})`,
    });
    expect(screen.getByText(/Bourne/)).toBeInTheDocument();
  });

  it("should render the placeholder when the poster is not intersecting the viewport", ({
    props,
  }) => {
    MOCK_OBSERVER.mockReturnValueOnce({
      ref: null,
      visible: false,
    });

    render(<MoviePoster {...props} />);

    expect(screen.getByTestId("poster")).toHaveStyle({
      "background-image": "",
    });
    expect(screen.getByText(/Bourne/)).toBeInTheDocument();
  });

  it("should be active when an onClick handler is provided", ({ props }) => {
    render(<MoviePoster {...props} />);

    expect(screen.getByTestId("poster")).toHaveStyle({
      cursor: "pointer",
    });
  });

  it("should not be active when an onClick handler is omitted", ({ props }) => {
    render(<MoviePoster {...props} onClick={undefined} />);

    expect(screen.getByTestId("poster")).not.toHaveStyle({
      cursor: "pointer",
    });
  });

  it("should invoke the handler onClick when provided", async ({
    props,
    user,
  }) => {
    render(<MoviePoster {...props} />);
    await user.click(screen.getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should not invoke the handler onClick when not provided", async ({
    props,
    user,
  }) => {
    render(<MoviePoster {...props} onClick={undefined} />);
    await user.click(screen.getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).not.toHaveBeenCalled();
  });

  it("should dim the poster when locked", ({ props }) => {
    render(<MoviePoster {...props} movie={{ ...props.movie, locked: true }} />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "0.3",
    });
  });

  it("should not dim the poster when locked but noLock is passed", ({
    props,
  }) => {
    render(
      <MoviePoster {...props} movie={{ ...props.movie, locked: true }} noLock />
    );

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "1",
    });
  });

  it("should be relatively positioned when noRel is false", ({ props }) => {
    render(<MoviePoster {...props} />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      position: "relative",
    });
  });

  it("should not be relatively positioned when noRel is true", ({ props }) => {
    render(<MoviePoster {...props} noRel />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).not.toHaveStyle({
      position: "relative",
    });
  });
});
