import { render, screen } from "@testing-library/react";
import Toast from "./toast";
import { vi } from "vitest";

describe("toast", () => {
  beforeEach((context) => {
    context.props = {
      open: true,
      onClose: vi.fn(),
      onUndo: vi.fn(),
      message: "Test Message",
    };
  });

  it("should render the toast correctly", ({ props }) => {
    render(<Toast {...props} />);

    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should call undo", async ({ props, user }) => {
    render(<Toast {...props} />);

    expect(screen.getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "UNDO" }));
    expect(props.onUndo).toHaveBeenCalled();
  });

  it("should call close", async ({ props, user }) => {
    render(<Toast {...props} />);

    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CloseIcon"));
    expect(props.onClose).toHaveBeenCalled();
  });
});
