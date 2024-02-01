import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ActionsAdd, ActionsAddProps } from "./actions-add";

interface LocalTestContext {
  props: ActionsAddProps;
}

describe("actions-add", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      onAddMovie: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the Add Movie button", ({ props }) => {
    render(<ActionsAdd {...props} />);

    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should call the add movie callback when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsAdd {...props} />);

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
