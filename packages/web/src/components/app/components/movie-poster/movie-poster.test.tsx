import { render, screen } from "@testing-library/react";
import MoviePoster, { type MoviePosterProps } from "./movie-poster";
import { vi } from "vitest";

const { MOCK_USE_IN_VIEW_REF } = vi.hoisted(() => ({
  MOCK_USE_IN_VIEW_REF: vi.fn().mockReturnValue([null, true]),
}));

vi.mock("rooks/dist/esm/hooks/useInViewRef", () => ({
  useInViewRef: MOCK_USE_IN_VIEW_REF,
}));

interface LocalTestContext {
  props: MoviePosterProps;
}

describe("movie-poster", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movie: {
        title: "The Bourne Identity",
        poster: "https://m.media-amazon.com/images/M/SX300.jpg",
        locked: false,
      },
      onClick: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the correct height and width ratio", ({
    props,
  }) => {
    render(<MoviePoster {...props} height={1000} />);
    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      width: "640px",
      height: "1000px",
    });
  });

  it<LocalTestContext>("should render the poster when a url exists in the movie", ({
    props,
  }) => {
    render(<MoviePoster {...props} />);
    expect(screen.getByTestId("poster")).toHaveStyle({
      "background-image": `url(${props.movie.poster})`,
    });
    expect(screen.getByText(/Bourne/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the placeholder when the poster is not intersecting the viewport", ({
    props,
  }) => {
    MOCK_USE_IN_VIEW_REF.mockReturnValueOnce([null, false]);

    render(<MoviePoster {...props} />);

    expect(screen.getByTestId("poster")).toHaveStyle({
      "background-image": "",
    });
    expect(screen.getByText(/Bourne/)).toBeInTheDocument();
  });

  it<LocalTestContext>("should be active when an onClick handler is provided", ({
    props,
  }) => {
    render(<MoviePoster {...props} />);

    expect(screen.getByTestId("poster")).toHaveStyle({
      cursor: "pointer",
    });
  });

  it<LocalTestContext>("should not be active when an onClick handler is omitted", ({
    props,
  }) => {
    render(<MoviePoster {...props} onClick={undefined} />);

    expect(screen.getByTestId("poster")).not.toHaveStyle({
      cursor: "pointer",
    });
  });

  it<LocalTestContext>("should invoke the handler onClick when provided", async ({
    props,
    user,
  }) => {
    render(<MoviePoster {...props} />);
    await user.click(screen.getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).toHaveBeenCalled();
  });

  it<LocalTestContext>("should not invoke the handler onClick when not provided", async ({
    props,
    user,
  }) => {
    render(<MoviePoster {...props} onClick={undefined} />);
    await user.click(screen.getByLabelText(/Bourne.*Poster/));
    expect(props.onClick).not.toHaveBeenCalled();
  });

  it<LocalTestContext>("should dim the poster when locked", ({ props }) => {
    render(<MoviePoster {...props} movie={{ ...props.movie, locked: true }} />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "0.3",
    });
  });

  it<LocalTestContext>("should not dim the poster when locked but noLock is passed", ({
    props,
  }) => {
    render(
      <MoviePoster {...props} movie={{ ...props.movie, locked: true }} noLock />
    );

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      opacity: "1",
    });
  });

  it<LocalTestContext>("should be relatively positioned when noRel is false", ({
    props,
  }) => {
    render(<MoviePoster {...props} />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).toHaveStyle({
      position: "relative",
    });
  });

  it<LocalTestContext>("should not be relatively positioned when noRel is true", ({
    props,
  }) => {
    render(<MoviePoster {...props} noRel />);

    expect(screen.getByLabelText(/Bourne.*Poster/)).not.toHaveStyle({
      position: "relative",
    });
  });
});
