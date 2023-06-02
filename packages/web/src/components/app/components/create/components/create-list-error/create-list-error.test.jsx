import { fireEvent, render, screen } from "@testing-library/react";
import CreateListError from "./create-list-error";
import { vi } from "vitest";

describe("create-list-error", () => {
  beforeEach((context) => {
    context.reset = vi.fn();
  });

  it("should run the reset callback when Try Again is pressed", ({ reset }) => {
    render(<CreateListError reset={reset} />);
    fireEvent.click(screen.getByRole("button", { name: "Try Again" }));
    expect(reset).toHaveBeenCalled();
  });
});
