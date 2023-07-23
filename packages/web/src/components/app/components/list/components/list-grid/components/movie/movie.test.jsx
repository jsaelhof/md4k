import { waitFor, screen } from "@testing-library/react";
import Movie from "./movie";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../../../utils/render-with-providers";
import { Globals } from "react-spring";

Globals.assign({
  skipAnimation: true,
});

vi.mock("uuid", () => ({
  v4: () => "111-222-333",
}));

// Mock the expanded view since it has it's own tests and inner working.
// In this mock we just want assign the props that would be passed to it
// and test that they are passed correctly when various interactions occur.
vi.mock("../../../../../full-detail-modal/full-detail-modal", () => ({
  default: ({ preload, open, onClose }) => (
    <div data-preload={preload} data-open={open} onClick={() => onClose()}>
      Expanded
    </div>
  ),
}));

describe("movie", () => {
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
      onEditMovie: vi.fn(),
      onMarkWatched: vi.fn(),
      onDeleteMovie: vi.fn(),
    };
  });

  it("should render a movie list entry", ({ props }) => {
    renderWithProviders(<Movie {...props} />);

    // Should be two posters, the second is the larger overlaid one that is wrapped in an invisible div
    expect(screen.getAllByLabelText(/Bourne.*Poster/)).toHaveLength(2);

    // The larger poster is invisible by default
    expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 });

    // Movie info
    expect(screen.getAllByAltText(/star-/)).toHaveLength(5);
    expect(screen.getByText("1h 59m")).toBeInTheDocument();
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    expect(screen.getByLabelText("Mark as Watched")).toBeInTheDocument();
    expect(screen.getByLabelText("Lock")).toBeInTheDocument();
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
    expect(screen.getByAltText("IMDB")).toBeInTheDocument();
    expect(screen.getByText("79%")).toBeInTheDocument();
    expect(screen.getByAltText("ROTTEN_TOMATOES")).toBeInTheDocument();
    expect(screen.getByText("84%")).toBeInTheDocument();
    expect(screen.getByAltText("METACRITIC")).toBeInTheDocument();
    expect(screen.getByText("68%")).toBeInTheDocument();
    expect(screen.getByLabelText("Netflix")).toBeInTheDocument();

    // The expanded detail should be closed by default
    expect(screen.getByText("Expanded")).toHaveAttribute("data-open", "false");
  });

  it("should render a movie list entry as locked", ({ props }) => {
    renderWithProviders(
      <Movie {...props} movie={{ ...props.movie, locked: true }} />
    );

    expect(screen.getByLabelText("Unlock")).toBeInTheDocument();
  });

  it("should open the zoomed poster and preload the expanded detail on rollover and close the zoomed poster on rollout", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);

    await user.hover(screen.getByTestId("listItem"));
    await waitFor(() => {
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 1 });
    });
    expect(screen.getByText("Expanded")).toHaveAttribute(
      "data-preload",
      "true"
    );

    await user.unhover(screen.getByTestId("listItem"));
    await waitFor(() => {
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 });
    });
    expect(screen.getByText("Expanded")).toHaveAttribute(
      "data-preload",
      "false"
    );
  });

  it("should close the zoomed poster and open the expanded detail view when clicked", async ({
    props,
    user,
    userNoPointerCheck,
  }) => {
    renderWithProviders(<Movie {...props} />);

    await user.hover(screen.getByTestId("listItem"));
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 1 })
    );

    // The positioner has pointer-events: none to prevent being able to capture hover events.
    // This also disables clicking but by adding an onClick handler, it can still be clicked.
    // UserEvent doesn't think this should work because pointer events are disabled so I'm
    // using a specially configured userEvent object that does not check pointer events.
    await userNoPointerCheck.click(screen.getByTestId("positioner"));

    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
    expect(await screen.findByText("Expanded")).toHaveAttribute(
      "data-open",
      "true"
    );
  });

  it("should toggle the actions and ratings when mousing over the five star rating", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);

    expect(screen.getByTestId("actions")).toHaveStyle({
      transform: "translateX(0px)",
    });
    expect(screen.getByTestId("ratings")).not.toHaveStyle({
      transform: "translateX(0px)",
    });

    await user.hover(screen.getByTestId("rating"));

    await waitFor(() => {
      expect(screen.getByTestId("actions")).not.toHaveStyle({
        transform: "translateX(0px)",
      });
    });
    expect(screen.getByTestId("ratings")).toHaveStyle({
      transform: "translateX(0px)",
    });

    await user.unhover(screen.getByTestId("rating"));

    await waitFor(() => {
      expect(screen.getByTestId("actions")).toHaveStyle({
        transform: "translateX(0px)",
      });
    });
    expect(screen.getByTestId("ratings")).not.toHaveStyle({
      transform: "translateX(0px)",
    });
  });

  it("should toggle the actions and ratings when clicking the five star rating", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);

    expect(screen.getByTestId("actions")).toHaveStyle({
      transform: "translateX(0px)",
    });
    expect(screen.getByTestId("ratings")).not.toHaveStyle({
      transform: "translateX(0px)",
    });

    await user.click(screen.getByTestId("rating"));

    await waitFor(() => {
      expect(screen.getByTestId("actions")).not.toHaveStyle({
        transform: "translateX(0px)",
      });
    });
    expect(screen.getByTestId("ratings")).toHaveStyle({
      transform: "translateX(0px)",
    });

    await user.click(screen.getByTestId("rating"));

    await waitFor(() => {
      expect(screen.getByTestId("actions")).toHaveStyle({
        transform: "translateX(0px)",
      });
    });
    expect(screen.getByTestId("ratings")).not.toHaveStyle({
      transform: "translateX(0px)",
    });
  });

  it("should send the edit action and close the zoomed view", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);
    await user.click(screen.getByLabelText("Edit"));
    expect(props.onEditMovie).toHaveBeenCalledWith(props.movie);
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
  });

  it("should send the mark watched action and close the zoomed view", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);
    await user.click(screen.getByLabelText("Mark as Watched"));
    expect(props.onMarkWatched).toHaveBeenCalledWith(props.movie);
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
  });

  it("should send the delete action and close the zoomed view", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);
    await user.click(screen.getByLabelText("Delete"));
    expect(props.onDeleteMovie).toHaveBeenCalledWith(props.movie);
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
  });

  it("should send the edit action with locked:true and close the zoomed view", async ({
    props,
    user,
  }) => {
    renderWithProviders(<Movie {...props} />);
    await user.click(screen.getByLabelText("Lock"));
    expect(props.onEditMovie).toHaveBeenCalledWith(
      {
        ...props.movie,
        locked: true,
      },
      false
    );
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
  });

  it("should send the edit action with locked:false and close the zoomed view", async ({
    props,
    user,
  }) => {
    renderWithProviders(
      <Movie {...props} movie={{ ...props.movie, locked: true }} />
    );
    await user.click(screen.getByLabelText("Unlock"));
    expect(props.onEditMovie).toHaveBeenCalledWith(
      {
        ...props.movie,
        locked: false,
      },
      false
    );
    await waitFor(() =>
      expect(screen.getByTestId("positioner")).toHaveStyle({ opacity: 0 })
    );
  });
});
