import { fireEvent, render } from "@testing-library/react";
import EmptyList from "./empty-list";
import { vi } from "vitest";

describe("empty-list", () => {
  beforeEach((context) => {
    context.props = {
      onAddMovie: vi.fn(),
    };
  });

  it("should render the edit button", ({ props }) => {
    const { getByRole } = render(<EmptyList {...props} />);
    const button = getByRole("button", { name: "Add a Movie" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
