import { render, waitFor, screen } from "@testing-library/react";
import { vi } from "vitest";
import SplitButton from "./split-button";

describe("split-button", () => {
  beforeEach((context) => {
    context.onPick = vi.fn();
  });

  it("should render the split button", ({ onPick }) => {
    render(<SplitButton onPick={onPick} />);
    expect(
      screen.getByRole("button", { name: "Pick A Movie" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Pick Menu")).toBeInTheDocument();
  });

  it("should call onPick when the main button is pressed", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    await user.click(screen.getByRole("button", { name: "Pick A Movie" }));
    expect(onPick).toHaveBeenCalled();
  });

  it("should open and close the menu when the menu button is pressed", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);

    await user.click(screen.getByLabelText("Pick Menu"));
    expect(await screen.findByText(/short/i)).toBeInTheDocument();

    await user.click(screen.getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(screen.queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should close the menu when clicking outside", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);

    await user.click(screen.getByLabelText("Pick Menu"));
    expect(await screen.findByText(/short/i)).toBeInTheDocument();

    await user.click(document.body);
    await waitFor(() => {
      expect(screen.queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should call onPick with correct options when a short movie is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const shortButton = screen.getByText(/pick a short movie/i);
    expect(shortButton).toBeInTheDocument();
    await user.click(shortButton);
    expect(onPick).toBeCalledWith({ maxRuntime: 6000 });
  });

  it("should call onPick with correct options when a regular movie is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const regularButton = screen.getByText(/pick a regular movie/i);
    expect(regularButton).toBeInTheDocument();
    await user.click(regularButton);
    expect(onPick).toBeCalledWith({ minRuntime: 6001, maxRuntime: 7800 });
  });

  it("should call onPick with correct options when a long movie is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/pick a long movie/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minRuntime: 7801 });
  });

  it("should call onPick with correct options when a movie added this month is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added this month/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 30 });
  });

  it("should call onPick with correct options when a movie added within 90 days is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added within 90 days/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 90 });
  });

  it("should call onPick with correct options when a movie added within a year is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added within a year/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 365 });
  });

  it("should call onPick with correct options when a movie added long ago is requested", async ({
    onPick,
    user,
  }) => {
    render(<SplitButton onPick={onPick} />);
    const menuButton = screen.getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = screen.getByText(/added long ago/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minAdded: 365 });
  });
});
