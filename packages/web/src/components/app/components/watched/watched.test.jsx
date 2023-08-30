import { Watched } from "./watched";
import { waitFor, within, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import { vi } from "vitest";
import {GET_WATCHED_MOVIES} from "../../../../graphql/queries/get-watched-movies.js";
import { buildMovieMock } from "../../../../test-utils/build-movie-mock";

vi.mock("./components/watched-movie/watched-movie", () => ({
  default: ({
    movie,
    right,
    isEditing,
    onEditMovie,
    onSave,
    onCancel,
    onDelete,
  }) => (
    <div data-right={!!right}>
      {movie.title}
      <div>
        <div>Editing: {isEditing ? "true" : "false"}</div>
        <button onClick={() => onEditMovie(movie)}>EDIT</button>
        <button onClick={() => onDelete(movie)}>DELETE</button>
        <button onClick={() => onSave(movie)}>SAVE</button>
        <button onClick={() => onCancel()}>CANCEL</button>
      </div>
    </div>
  ),
}));

const removeMovieMock = vi.fn();
const editMovieMock = vi.fn();
vi.mock("../../../../graphql/mutations", async () => {
  const removeMovieModule = await vi.importActual(
    "../../../../graphql/mutations"
  );

  return {
    ...removeMovieModule,
    useEditMovie: () => [editMovieMock],
    useRemoveWatchedMovie: () => [removeMovieMock],
  };
});

const GET_WATCHED_MOVIES_MOCK = {
  request: {
    query: GET_WATCHED_MOVIES,
    variables: {
      list: "saturday",
    },
  },
  result: {
    data: {
      watchedMovies: [
        buildMovieMock({
          id: "0",
          title: "Blade Runner",
          watchedOn: "2021-02-06T06:39:48.002Z",
        }),
        buildMovieMock({
          id: "1",
          title: "The Bourne Identity",
          watchedOn: "2022-04-08T02:11:33.166Z",
        }),
        buildMovieMock({
          id: "2",
          title: "Star Wars",
          watchedOn: "1977-06-01T02:11:33.166Z",
        }),
        buildMovieMock({
          id: "3",
          title: "The Lord Of The Rings",
          watchedOn: "2002-08-08T02:11:33.166Z",
        }),
        buildMovieMock({
          id: "4",
          title: "Iron Man",
          watchedOn: "2000-11-08T02:11:33.166Z",
        }),
        buildMovieMock({
          id: "5",
          title: "Fight Club",
          watchedOn: "2001-06-08T02:11:33.166Z",
        }),
      ],
    },
  },
};

describe("watched", () => {
  it("should render the toolbar", async () => {
    renderWithProviders(<Watched />, { mocks: [GET_WATCHED_MOVIES_MOCK] });
    expect(await screen.findByText("6 movies watched")).toBeInTheDocument();
  });

  it("should search from the toolbar", async ({ user }) => {
    renderWithProviders(<Watched />, { mocks: [GET_WATCHED_MOVIES_MOCK] });
    expect(await screen.findByText("6 movies watched")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Search"), "Iron");
    expect(
      await screen.findByText("Showing 1 of 6 movies watched")
    ).toBeInTheDocument();
    expect(await screen.findByText(/Iron Man/)).toBeInTheDocument();
    expect(screen.queryByText(/Fight Club/)).not.toBeInTheDocument();
  });

  it("should display the empty state when no movies are found by a search", async ({
    user,
  }) => {
    renderWithProviders(<Watched />, { mocks: [GET_WATCHED_MOVIES_MOCK] });
    expect(await screen.findByText("6 movies watched")).toBeInTheDocument();
    await user.type(screen.getByLabelText("Search"), "Apocalypse");
    expect(
      await screen.findByText("Showing 0 of 6 movies watched")
    ).toBeInTheDocument();
    expect(screen.queryByText(/Iron Man/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fight Club/)).not.toBeInTheDocument();
    expect(screen.getByText(/No movies found/)).toBeInTheDocument();
  });

  it("should render the movies as watched movie items in reverse chronological order", async () => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    // Need to check by data-attribute
    // eslint-disable-next-line testing-library/no-node-access
    const items = document.querySelectorAll("[data-right]");

    expect(items).toHaveLength(5);

    const expectedOrder = [/Bourne/, /Blade/, /Lord/, /Fight/, /Iron/, /Star/];

    items.forEach((el, index) => {
      expect(el.textContent).toMatch(expectedOrder[index]);
      expect(el.getAttribute("data-right")).toBe(
        index % 2 === 0 ? "false" : "true"
      );
    });
  });

  it("should show the delete dialog on delete action and do the 'cancel' action", async ({
    user,
  }) => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "DELETE" })
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    await user.click(within(dialog).getByText("Cancel"));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("should show the delete dialog on delete action and do the 'delete' action", async ({
    user,
  }) => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "DELETE" })
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    await user.click(within(dialog).getByText("Delete"));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );

    expect(removeMovieMock).toHaveBeenCalledWith({
      optimisticResponse: {
        removeMovie: expect.objectContaining({
          id: "1",
          list: "saturday",
        }),
      },
      variables: expect.objectContaining({
        list: "saturday",
        movieId: "1",
      }),
    });
  });

  it("should enable editing", async ({ user }) => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(screen.getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();
  });

  it("should save the movie and disable editing", async ({ user }) => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(screen.getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "SAVE" })
    );

    expect(
      within(screen.getByText(/Bourne/)).getByText("Editing: false")
    ).toBeInTheDocument();

    expect(editMovieMock).toHaveBeenCalledWith({
      optimisticResponse: {
        editMovie: expect.objectContaining({
          id: "1",
          watchedOn: expect.any(String),
        }),
      },
      variables: {
        list: "saturday",
        movie: expect.objectContaining({
          id: "1",
        }),
      },
    });
  });

  it("should cancel editing", async ({ user }) => {
    renderWithProviders(<Watched />, {
      moviesMock: GET_WATCHED_MOVIES_MOCK,
    });

    expect(await screen.findByText(/Bourne/)).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(screen.getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();

    await user.click(
      within(screen.getByText(/Bourne/)).getByRole("button", { name: "CANCEL" })
    );

    expect(
      within(screen.getByText(/Bourne/)).getByText("Editing: false")
    ).toBeInTheDocument();
  });
});
