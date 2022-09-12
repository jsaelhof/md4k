import { fireEvent, render } from "@testing-library/react";
import Trailer from "./trailer";
import { vi } from "vitest";

vi.mock("react-youtube", () => ({
  default: () => <div data-testid="youtube" />,
}));

describe("trailer", () => {
  let test;

  beforeEach(() => {
    test = {
      trailerId: "test123",
      onComplete: vi.fn(),
    };
  });

  it("should call onComplete when clicking on the trailer component and overlay mode is enabled", async () => {
    const { getByLabelText } = render(
      <Trailer
        overlay
        trailerId={test.trailerId}
        onComplete={test.onComplete}
      />
    );

    fireEvent.click(getByLabelText("Trailer"));
    expect(test.onComplete).toHaveBeenCalled();
  });
});
