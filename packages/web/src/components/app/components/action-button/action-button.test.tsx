import { render, screen } from "@testing-library/react";
import ActionButton from "./action-button";
import Close from "@mui/icons-material/Close";
import { vi } from "vitest";

describe("action-button", () => {
  beforeEach((context) => {
    context.onClick = vi.fn();
    context.tooltip = "test tooltip";
  });

  it("should render the button", ({ onClick, tooltip }) => {
    render(<ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} />);

    expect(screen.getByLabelText(tooltip)).toBeInTheDocument();
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should invoke the onClick handler", async ({
    onClick,
    tooltip,
    user,
  }) => {
    render(<ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} />);

    await user.click(screen.getByLabelText(tooltip));
    expect(onClick).toHaveBeenCalled();
  });

  it("should not fire onClick when disabled", async ({
    onClick,
    tooltip,
    user,
  }) => {
    render(
      <ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} disabled />
    );

    await user.click(screen.getByLabelText(tooltip));
    expect(onClick).not.toHaveBeenCalled();
  });
});
