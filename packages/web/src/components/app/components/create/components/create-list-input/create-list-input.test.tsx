import { screen } from "@testing-library/react";
import CreateListInput from "./create-list-input";
import { type Mock, vi } from "vitest";
import { renderWithProviders } from "../../../../../../test-utils/render-with-providers";

interface LocalTestContext {
  onSubmit: Mock;
}

describe("create-list-input", () => {
  beforeEach<LocalTestContext>((context) => {
    context.onSubmit = vi.fn();
  });

  it<LocalTestContext>("should callback with the new list name on submit", async ({
    onSubmit,
    user,
  }) => {
    renderWithProviders(<CreateListInput onSubmit={onSubmit} />);
    await user.type(screen.getByLabelText("New List Name"), "My List");
    await user.click(screen.getByRole("button", { name: "Create List" }));
    expect(onSubmit).toHaveBeenCalledWith("My List");
  });

  it<LocalTestContext>("should display an error if the list name already exists", async ({
    onSubmit,
    user,
  }) => {
    renderWithProviders(<CreateListInput onSubmit={onSubmit} />);

    await user.type(
      screen.getByRole("textbox", { name: "New List Name" }),
      "Saturday Night"
    );

    await user.click(screen.getByRole("button", { name: "Create List" }));

    expect(
      await screen.findByText("There is already a list with this name")
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it<LocalTestContext>("should display an error if the list name is empty", async ({
    onSubmit,
    user,
  }) => {
    renderWithProviders(<CreateListInput onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Create List" }));
    expect(
      await screen.findByText("Please enter a name for your list")
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
