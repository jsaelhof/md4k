import { fireEvent, render } from "@testing-library/react";
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
    const { getByText, getByRole, getByTestId } = render(<Toast {...props} />);

    expect(getByText("Test Message")).toBeInTheDocument();
    expect(getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    expect(getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should call undo", ({ props }) => {
    const { getByRole } = render(<Toast {...props} />);

    expect(getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    fireEvent.click(getByRole("button", { name: "UNDO" }));
    expect(props.onUndo).toHaveBeenCalled();
  });

  it("should call close", ({ props }) => {
    const { getByTestId } = render(<Toast {...props} />);

    expect(getByTestId("CloseIcon")).toBeInTheDocument();
    fireEvent.click(getByTestId("CloseIcon"));
    expect(props.onClose).toHaveBeenCalled();
  });
});
