import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should call undo", ({ props }) => {
    render(<Toast {...props} />);

    expect(screen.getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "UNDO" }));
    expect(props.onUndo).toHaveBeenCalled();
  });

  it("should call close", ({ props }) => {
    render(<Toast {...props} />);

    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("CloseIcon"));
    expect(props.onClose).toHaveBeenCalled();
  });
});
