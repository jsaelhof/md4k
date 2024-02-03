import { render, screen } from "@testing-library/react";
import ActionButton from "./action-button";
import Close from "@mui/icons-material/Close";
import { type Mock, vi } from "vitest";

interface LocalTestContext {
  onClick: Mock;
  tooltip: string;
}

describe("action-button", () => {
  beforeEach<LocalTestContext>((context) => {
    context.onClick = vi.fn();
    context.tooltip = "test tooltip";
  });

  it<LocalTestContext>("should render the button", ({ onClick, tooltip }) => {
    render(<ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} />);

    expect(screen.getByLabelText(tooltip)).toBeInTheDocument();
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it<LocalTestContext>("should invoke the onClick handler", async ({
    onClick,
    tooltip,
    user,
  }) => {
    render(<ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} />);

    await user.click(screen.getByLabelText(tooltip));
    expect(onClick).toHaveBeenCalled();
  });

  it<LocalTestContext>("should not fire onClick when disabled", async ({
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
