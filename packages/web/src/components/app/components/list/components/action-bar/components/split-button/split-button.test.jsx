import { fireEvent, render, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import SplitButton from "./split-button";

describe("split-button", () => {
  let test;

  beforeEach(() => {
    test = {
      onPick: vi.fn(),
    };
  });

  it("should render the split button", () => {
    const { getByRole, getByLabelText } = render(
      <SplitButton onPick={test.onPick} />
    );
    expect(getByRole("button", { name: "Pick A Movie" })).toBeInTheDocument();
    expect(getByLabelText("Pick Menu")).toBeInTheDocument();
  });

  it("should call onPick when the main button is pressed", () => {
    const { getByRole } = render(<SplitButton onPick={test.onPick} />);
    fireEvent.click(getByRole("button", { name: "Pick A Movie" }));
    expect(test.onPick).toHaveBeenCalled();
  });

  it("should open and close the menu when the menu button is pressed", async () => {
    const { getByLabelText, getByText, queryByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    fireEvent.click(getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(getByText(/short/i)).toBeInTheDocument();
    });

    // Couldn't figure out a better way to make this work.
    // Even using waitFor, firing click twice without a sleep ends up firing it twice at once and ends up acting like a single click.
    await new Promise((r) => setTimeout(r, 1));

    fireEvent.click(getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should close the menu when clicking outside", async () => {
    const { getByLabelText, getByText, queryByText } = render(
      <SplitButton onPick={test.onPick} />
    );

    fireEvent.click(getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(getByText(/short/i)).toBeInTheDocument();
    });

    // Couldn't figure out a better way to make this work.
    // Even using waitFor, firing click twice without a sleep ends up firing it twice at once and ends up acting like a single click.
    await new Promise((r) => setTimeout(r, 1));

    fireEvent.click(document);
    await waitFor(() => {
      expect(queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should call onPick with correct options when a short movie is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const shortButton = getByText(/pick a short movie/i);
    expect(shortButton).toBeInTheDocument();
    fireEvent.click(shortButton);
    expect(test.onPick).toBeCalledWith({ maxRuntime: 6000 });
  });

  it("should call onPick with correct options when a regular movie is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const regularButton = getByText(/pick a regular movie/i);
    expect(regularButton).toBeInTheDocument();
    fireEvent.click(regularButton);
    expect(test.onPick).toBeCalledWith({ minRuntime: 6001, maxRuntime: 7800 });
  });

  it("should call onPick with correct options when a long movie is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const longButton = getByText(/pick a long movie/i);
    expect(longButton).toBeInTheDocument();
    fireEvent.click(longButton);
    expect(test.onPick).toBeCalledWith({ minRuntime: 7801 });
  });

  it("should call onPick with correct options when a movie added this month is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const longButton = getByText(/added this month/i);
    expect(longButton).toBeInTheDocument();
    fireEvent.click(longButton);
    expect(test.onPick).toBeCalledWith({ maxAdded: 30 });
  });

  it("should call onPick with correct options when a movie added within 90 days is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const longButton = getByText(/added within 90 days/i);
    expect(longButton).toBeInTheDocument();
    fireEvent.click(longButton);
    expect(test.onPick).toBeCalledWith({ maxAdded: 90 });
  });

  it("should call onPick with correct options when a movie added within a year is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const longButton = getByText(/added within a year/i);
    expect(longButton).toBeInTheDocument();
    fireEvent.click(longButton);
    expect(test.onPick).toBeCalledWith({ maxAdded: 365 });
  });

  it("should call onPick with correct options when a movie added long ago is requested", () => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={test.onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    const longButton = getByText(/added long ago/i);
    expect(longButton).toBeInTheDocument();
    fireEvent.click(longButton);
    expect(test.onPick).toBeCalledWith({ minAdded: 365 });
  });
});
