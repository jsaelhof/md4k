import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ActionsAdd } from "./actions-add";

describe("actions-add", () => {
  beforeEach((context) => {
    context.props = {
      onAddMovie: vi.fn(),
    };
  });

  it("should render the Add Movie button", ({ props }) => {
    render(<ActionsAdd {...props} />);

    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });

  it("should call the add movie callback when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsAdd {...props} />);

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
