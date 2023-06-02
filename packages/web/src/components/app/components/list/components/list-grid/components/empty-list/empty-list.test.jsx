import { fireEvent, render, screen } from "@testing-library/react";
import EmptyList from "./empty-list";
import { vi } from "vitest";

describe("empty-list", () => {
  beforeEach((context) => {
    context.props = {
      onAddMovie: vi.fn(),
    };
  });

  it("should render the edit button", ({ props }) => {
    render(<EmptyList {...props} />);
    const button = screen.getByRole("button", { name: "Add a Movie" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
