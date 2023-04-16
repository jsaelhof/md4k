import { fireEvent, render } from "@testing-library/react";
import MoviePoster from "./movie-poster";
import { vi } from "vitest";
import * as useIntersectionObserverModule from "./hooks/use-intersection-observer";

vi.mock("./hooks/use-intersection-observer", () => ({
  useIntersectionObserver: vi.fn().mockReturnValue({
    ref: null,
    visible: true,
  }),
}));

describe("movie-poster", () => {
  let props;

  beforeEach(() => {
    props = {
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

  it("should render the correct height and width ratio", () => {
    const { getByLabelText } = render(<MoviePoster {...props} height={1000} />);
    expect(getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      width: "640px",
      height: "1000px",
    });
  });

  it("should render the poster when a url exists in the movie", () => {
    const { getByTestId, getByText } = render(<MoviePoster {...props} />);
    expect(getByTestId("poster")).toHaveStyle({
      "background-image": `url(${props.movie.poster})`,
    });
    expect(getByText(/Bourne/)).toBeInTheDocument();
  });

  it("should render the placeholder when the poster is not intersecting the viewport", () => {
    // eslint-disable-next-line no-import-assign
    useIntersectionObserverModule.useIntersectionObserver = vi
      .fn()
      .mockReturnValue({
        ref: null,
        visible: false,
      });

    const { getByTestId, getByText } = render(<MoviePoster {...props} />);

    expect(getByTestId("poster")).toHaveStyle({
      "background-image": "",
    });
    expect(getByText(/Bourne/)).toBeInTheDocument();
  });

  it("should be active when an onClick handler is provided", () => {
    const { getByTestId } = render(<MoviePoster {...props} />);

    expect(getByTestId("poster")).toHaveStyle({
      cursor: "pointer",
    });
  });

  it("should not be active when an onClick handler is omitted", () => {
    const { getByTestId } = render(
      <MoviePoster {...props} onClick={undefined} />
    );

    expect(getByTestId("poster")).not.toHaveStyle({
      cursor: "pointer",
    });
  });

  it("should invoke the handler onClick when provided", () => {
    const { getByLabelText } = render(<MoviePoster {...props} />);
    fireEvent.click(getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).toHaveBeenCalled();
  });

  it("should not invoke the handler onClick when not provided", () => {
    const { getByLabelText } = render(
      <MoviePoster {...props} onClick={undefined} />
    );
    fireEvent.click(getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).not.toHaveBeenCalled();
  });

  it("should dim the poster when locked", () => {
    const { getByLabelText } = render(
      <MoviePoster {...props} movie={{ ...props.movie, locked: true }} />
    );

    expect(getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "0.3",
    });
  });

  it("should not dim the poster when locked but noLock is passed", () => {
    const { getByLabelText } = render(
      <MoviePoster {...props} movie={{ ...props.movie, locked: true }} noLock />
    );

    expect(getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "1",
    });
  });

  it("should be relatively positioned when noRel is false", () => {
    const { getByLabelText } = render(<MoviePoster {...props} />);

    expect(getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      position: "relative",
    });
  });

  it("should not be relatively positioned when noRel is true", () => {
    const { getByLabelText } = render(<MoviePoster {...props} noRel />);

    expect(getByLabelText(/Bourne.*Poster/)).not.toHaveStyle({
      position: "relative",
    });
  });
});
