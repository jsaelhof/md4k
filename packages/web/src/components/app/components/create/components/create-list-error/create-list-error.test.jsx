import { fireEvent, render } from "@testing-library/react";
import CreateListError from "./create-list-error";
import { vi } from "vitest";

describe("create-list-error", () => {
  beforeEach((context) => {
    context.reset = vi.fn();
  });

  it("should run the reset callback when Try Again is pressed", ({ reset }) => {
    const { getByRole } = render(<CreateListError reset={reset} />);
    fireEvent.click(getByRole("button", { name: "Try Again" }));
    expect(reset).toHaveBeenCalled();
  });
});
