import { render, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import SplitButton from "./split-button";
import userEvent from "@testing-library/user-event";

describe("split-button", () => {
  beforeEach((context) => {
    context.onPick = vi.fn();
    context.user = userEvent.setup();
  });

  it("should render the split button", ({ onPick }) => {
    const { getByRole, getByLabelText } = render(
      <SplitButton onPick={onPick} />
    );
    expect(getByRole("button", { name: "Pick A Movie" })).toBeInTheDocument();
    expect(getByLabelText("Pick Menu")).toBeInTheDocument();
  });

  it("should call onPick when the main button is pressed", async ({
    onPick,
    user,
  }) => {
    const { getByRole } = render(<SplitButton onPick={onPick} />);
    await user.click(getByRole("button", { name: "Pick A Movie" }));
    expect(onPick).toHaveBeenCalled();
  });

  it("should open and close the menu when the menu button is pressed", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, findByText, queryByText } = render(
      <SplitButton onPick={onPick} />
    );

    await user.click(getByLabelText("Pick Menu"));
    expect(await findByText(/short/i)).toBeInTheDocument();

    await user.click(getByLabelText("Pick Menu"));
    await waitFor(() => {
      expect(queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should close the menu when clicking outside", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, findByText, queryByText } = render(
      <SplitButton onPick={onPick} />
    );

    await user.click(getByLabelText("Pick Menu"));
    expect(await findByText(/short/i)).toBeInTheDocument();

    await user.click(document.body);
    await waitFor(() => {
      expect(queryByText(/short/i)).not.toBeInTheDocument();
    });
  });

  it("should call onPick with correct options when a short movie is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const shortButton = getByText(/pick a short movie/i);
    expect(shortButton).toBeInTheDocument();
    await user.click(shortButton);
    expect(onPick).toBeCalledWith({ maxRuntime: 6000 });
  });

  it("should call onPick with correct options when a regular movie is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const regularButton = getByText(/pick a regular movie/i);
    expect(regularButton).toBeInTheDocument();
    await user.click(regularButton);
    expect(onPick).toBeCalledWith({ minRuntime: 6001, maxRuntime: 7800 });
  });

  it("should call onPick with correct options when a long movie is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = getByText(/pick a long movie/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minRuntime: 7801 });
  });

  it("should call onPick with correct options when a movie added this month is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = getByText(/added this month/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 30 });
  });

  it("should call onPick with correct options when a movie added within 90 days is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = getByText(/added within 90 days/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 90 });
  });

  it("should call onPick with correct options when a movie added within a year is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = getByText(/added within a year/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ maxAdded: 365 });
  });

  it("should call onPick with correct options when a movie added long ago is requested", async ({
    onPick,
    user,
  }) => {
    const { getByLabelText, getByText } = render(
      <SplitButton onPick={onPick} />
    );
    const menuButton = getByLabelText("Pick Menu");
    expect(menuButton).toBeInTheDocument();
    await user.click(menuButton);

    const longButton = getByText(/added long ago/i);
    expect(longButton).toBeInTheDocument();
    await user.click(longButton);
    expect(onPick).toBeCalledWith({ minAdded: 365 });
  });
});
