import { render, screen } from "@testing-library/react";
import Cast from "./cast";

describe("cast", () => {
  it("should render the cast member", () => {
    render(
      <Cast
        name="Test Name"
        character="Test Character"
        image="https://www.test.com/test-character.jpg"
      />
    );

    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("Test Character")).toBeInTheDocument();
    expect(screen.getByTestId("headshot")).toBeInTheDocument();
  });
});
