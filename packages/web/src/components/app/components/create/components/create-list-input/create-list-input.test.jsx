import { fireEvent } from "@testing-library/react";
import CreateListInput from "./create-list-input";
import { vi } from "vitest";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import userEvent from "@testing-library/user-event";

describe("create-list-input", () => {
  beforeEach((context) => {
    context.onSubmit = vi.fn();
  });

  it("should callback with the new list name on submit", async ({
    onSubmit,
  }) => {
    const { getByRole, getByLabelText } = renderWithProviders(
      <CreateListInput onSubmit={onSubmit} />
    );
    fireEvent.change(getByLabelText("New List Name"), {
      target: { value: "My List" },
    });
    fireEvent.click(getByRole("button", { name: "Create List" }));
    expect(onSubmit).toHaveBeenCalledWith("My List");
  });

  it("should display an error if the list name already exists", async ({
    onSubmit,
  }) => {
    const { getByRole, findByText } = renderWithProviders(
      <CreateListInput onSubmit={onSubmit} />
    );

    const user = userEvent.setup();

    await user.type(
      getByRole("textbox", { name: "New List Name" }),
      "Saturday Night"
    );

    await user.click(getByRole("button", { name: "Create List" }));

    expect(
      await findByText("There is already a list with this name")
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("should display an error if the list name is empty", async ({
    onSubmit,
  }) => {
    const { getByRole, findByText } = renderWithProviders(
      <CreateListInput onSubmit={onSubmit} />
    );

    fireEvent.click(getByRole("button", { name: "Create List" }));
    expect(
      await findByText("Please enter a name for your list")
    ).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
