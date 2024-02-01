import { waitFor, screen } from "@testing-library/react";
import { Mock, vi } from "vitest";
import SplitButton from "./split-button";
import { renderWithProviders } from "../../../../../../../../test-utils/render-with-providers";

const { MOCK_FILTER_MOVIES } = vi.hoisted(() => ({
  MOCK_FILTER_MOVIES: vi.fn().mockImplementation((movies) => movies),
}));

vi.mock("../../../../../../../../utils/filter-movies", () => ({
  filterMovies: MOCK_FILTER_MOVIES,
}));

interface LocalTestContext {
  onPick: Mock;
}

describe("split-button", () => {
  beforeEach<LocalTestContext>((context) => {
    context.onPick = vi.fn();
  });

  it<LocalTestContext>("should render the split button", ({ onPick }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    expect(
      screen.getByRole("button", { name: "Pick A Movie" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Pick Menu")).toBeInTheDocument();
  });

  it<LocalTestContext>("should call onPick when the main button is pressed", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    await user.click(screen.getByRole("button", { name: "Pick A Movie" }));
    expect(onPick).toHaveBeenCalled();
  });

  it<LocalTestContext>("should open and close the menu when the menu button is pressed", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);

    await user.click(screen.getByLabelText("Pick Menu"));
    expect(await screen.findByText(/short/i)).toBeInTheDocument();

    await user.click(screen.getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(screen.queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it<LocalTestContext>("should close the menu when clicking outside", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);

    await user.click(screen.getByLabelText("Pick Menu"));
    expect(await screen.findByText(/short/i)).toBeInTheDocument();

    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it<LocalTestContext>("should call onPick with correct options when a short movie is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const shortButton = screen.getByText(/pick a short movie/i);
    expect(shortButton).toBeInTheDocument();
    await user.click(shortButton);
    expect(onPick).toBeCalledWith({ maxRuntime: 6000 });
  });

  it<LocalTestContext>("should call onPick with correct options when a regular movie is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const regularButton = screen.getByText(/pick a regular movie/i);
    expect(regularButton).toBeInTheDocument();
    await user.click(regularButton);
    expect(onPick).toBeCalledWith({ minRuntime: 6001, maxRuntime: 7800 });
  });

  it<LocalTestContext>("should call onPick with correct options when a long movie is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/pick a long movie/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minRuntime: 7801 });
  });

  it<LocalTestContext>("should call onPick with correct options when a movie added this month is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added this month/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 30 });
  });

  it<LocalTestContext>("should call onPick with correct options when a movie added within 90 days is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added within 90 days/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 90 });
  });

  it<LocalTestContext>("should call onPick with correct options when a movie added within a year is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added within a year/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 365 });
  });

  it<LocalTestContext>("should call onPick with correct options when a movie added long ago is requested", async ({
    onPick,
    user,
  }) => {
    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added long ago/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minAdded: 365 });
  });

  it<LocalTestContext>("should disable options when filterMovies returns 0 movies", async ({
    onPick,
    user,
  }) => {
    MOCK_FILTER_MOVIES.mockReturnValue([]);

    renderWithProviders(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    expect(
      screen.getByRole("menuitem", { name: /short movie/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /regular movie/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /long movie/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /added this month/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /added within 90 days/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /added within a year/i })
    ).toHaveAttribute("aria-disabled", "true");

    expect(
      screen.getByRole("menuitem", { name: /added long ago/i })
    ).toHaveAttribute("aria-disabled", "true");
  });
});
