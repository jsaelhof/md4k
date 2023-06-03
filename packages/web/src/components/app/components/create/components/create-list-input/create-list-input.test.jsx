import { screen } from "@testing-library/react";
import CreateListInput from "./create-list-input";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

describe("create-list-input", () => {
  beforeEach((context) => {
    context.onSubmit = vi.fn();
  });

  it("should callback with the new list name on submit", async ({
    onSubmit,
    user,
  }) => {
    renderWithProviders(<CreateListInput onSubmit={onSubmit} />);
    await user.type(screen.getByLabelText("New List Name"), "My List");
    await user.click(screen.getByRole("button", { name: "Create List" }));
    expect(onSubmit).toHaveBeenCalledWith("My List");
  });

  it("should display an error if the list name already exists", async ({
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

  it("should display an error if the list name is empty", async ({
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
