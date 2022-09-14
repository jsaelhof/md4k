import { Watched } from "./watched";
import { fireEvent, waitFor, within } from "@testing-library/react";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import { vi } from "vitest";
import { GET_MOVIES } from "../../../../graphql/queries";

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

const GET_MOVIES_MOCK = {
  request: {
    query: GET_MOVIES,
    variables: {
      list: "saturday",
    },
  },
  result: {
    data: {
      watchedMovies: [
        {
          id: "0",
          title: "Blade Runner",
          watchedOn: "2021-02-06T06:39:48.002Z",
          list: "saturday",
        },
        {
          id: "1",
          title: "The Bourne Identity",
          watchedOn: "2022-04-08T02:11:33.166Z",
          list: "saturday",
        },
        {
          id: "2",
          title: "Star Wars",
          watchedOn: "1977-06-01T02:11:33.166Z",
          list: "saturday",
        },
        {
          id: "3",
          title: "The Lord Of The Rings",
          watchedOn: "2002-08-08T02:11:33.166Z",
          list: "saturday",
        },
        {
          id: "4",
          title: "Iron Man",
          watchedOn: "2000-11-08T02:11:33.166Z",
          list: "saturday",
        },
        {
          id: "5",
          title: "Fight Club",
          watchedOn: "2001-06-08T02:11:33.166Z",
          list: "saturday",
        },
      ],
      movies: [],
    },
  },
};

describe("watched", () => {
  it("should render the movies as watched movie items in reverse chronological order", async () => {
    const { getByText } = await renderWithProviders(<Watched />, {
      moviesMock: GET_MOVIES_MOCK,
    });

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

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

  it("should show the delete dialog on delete action and do the 'cancel' action", async () => {
    const { getByText, getByRole, queryByRole } = await renderWithProviders(
      <Watched />,
      {
        moviesMock: GET_MOVIES_MOCK,
      }
    );

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "DELETE" })
    );

    const dialog = getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    fireEvent.click(within(dialog).getByText("Cancel"));
    await waitFor(() => expect(queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("should show the delete dialog on delete action and do the 'delete' action", async () => {
    const { getByText, getByRole, queryByRole } = await renderWithProviders(
      <Watched />,
      {
        moviesMock: GET_MOVIES_MOCK,
      }
    );

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "DELETE" })
    );

    const dialog = getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Bourne.*removed/)).toBeInTheDocument();

    fireEvent.click(within(dialog).getByText("Delete"));
    await waitFor(() => expect(queryByRole("dialog")).not.toBeInTheDocument());

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

  it("should enable editing", async () => {
    const { getByText } = await renderWithProviders(<Watched />, {
      moviesMock: GET_MOVIES_MOCK,
    });

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();
  });

  it("should save the move and disable editing", async () => {
    const { getByText } = await renderWithProviders(<Watched />, {
      moviesMock: GET_MOVIES_MOCK,
    });

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "SAVE" })
    );

    expect(
      within(getByText(/Bourne/)).getByText("Editing: false")
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

  it("should cancel editing", async () => {
    const { getByText } = await renderWithProviders(<Watched />, {
      moviesMock: GET_MOVIES_MOCK,
    });

    await waitFor(() => expect(getByText(/Bourne/)).toBeInTheDocument());

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "EDIT" })
    );

    expect(
      within(getByText(/Bourne/)).getByText("Editing: true")
    ).toBeInTheDocument();

    fireEvent.click(
      within(getByText(/Bourne/)).getByRole("button", { name: "CANCEL" })
    );

    expect(
      within(getByText(/Bourne/)).getByText("Editing: false")
    ).toBeInTheDocument();
  });
});
