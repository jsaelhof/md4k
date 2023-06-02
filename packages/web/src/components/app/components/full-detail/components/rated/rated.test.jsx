import { render, screen } from "@testing-library/react";
import Rated from "./rated";

describe("rated", () => {
  it("should display the rating", () => {
    render(<Rated rated="PG-13" />);
    expect(screen.getByText("PG-13")).toBeInTheDocument();
  });

  it("should not render anything whne rated is null", () => {
    render(<Rated rated={null} />);
    expect(screen.queryByTestId("rated")).not.toBeInTheDocument();
  });
});
