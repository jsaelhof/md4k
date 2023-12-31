import { render, screen } from "@testing-library/react";
import Toast from "./toast";
import { vi } from "vitest";

const { MOCK_TOAST, MOCK_SET_TOAST } = vi.hoisted(() => ({
  MOCK_TOAST: {
    onUndo: vi.fn(),
    message: "Test Message",
  },
  MOCK_SET_TOAST: vi.fn(),
}));

vi.mock("../../../../context/app-context", async () => {
  const actual = await vi.importActual("../../../../context/app-context");
  return {
    ...actual,
    useAppContext: vi.fn().mockReturnValue({
      toast: MOCK_TOAST,
      setToast: MOCK_SET_TOAST,
    }),
  };
});

describe("toast", () => {
  it("should render the toast correctly", () => {
    render(<Toast />);

    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should call undo", async ({ user }) => {
    render(<Toast />);

    expect(screen.getByRole("button", { name: "UNDO" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "UNDO" }));
    expect(MOCK_TOAST.onUndo).toHaveBeenCalled();
  });

  it("should call close", async ({ user }) => {
    render(<Toast />);

    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
    await user.click(screen.getByTestId("CloseIcon"));
    expect(MOCK_SET_TOAST).toHaveBeenCalledWith(null);
  });
});
