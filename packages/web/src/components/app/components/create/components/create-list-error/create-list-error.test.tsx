import { render, screen } from "@testing-library/react";
import CreateListError from "./create-list-error";
import { Mock, vi } from "vitest";

interface LocalTestContext {
  reset: Mock;
}

describe("create-list-error", () => {
  beforeEach<LocalTestContext>((context) => {
    context.reset = vi.fn();
  });

  it<LocalTestContext>("should run the reset callback when Try Again is pressed", async ({
    reset,
    user,
  }) => {
    render(<CreateListError reset={reset} />);
    await user.click(screen.getByRole("button", { name: "Try Again" }));
    expect(reset).toHaveBeenCalled();
  });
});
