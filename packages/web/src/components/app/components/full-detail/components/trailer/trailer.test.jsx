import { fireEvent, render } from "@testing-library/react";
import Trailer from "./trailer";
import { vi } from "vitest";

vi.mock("react-youtube", () => ({
  default: () => <div data-testid="youtube" />,
}));

describe("trailer", () => {
  beforeEach((context) => {
    context.trailerId = "test123";
    context.onComplete = vi.fn();
  });

  it("should call onComplete when clicking on the trailer component and overlay mode is enabled", async ({
    trailerId,
    onComplete,
  }) => {
    const { getByLabelText } = render(
      <Trailer overlay trailerId={trailerId} onComplete={onComplete} />
    );

    fireEvent.click(getByLabelText("Trailer"));
    expect(onComplete).toHaveBeenCalled();
  });
});
