import { fireEvent, render } from "@testing-library/react";
import EmptyList from "./empty-list";
import { vi } from "vitest";

describe("empty-list", () => {
  let props;

  beforeEach(() => {
    props = {
      onAddMovie: vi.fn(),
    };
  });

  it("should render the edit button", () => {
    const { getByRole } = render(<EmptyList {...props} />);
    const button = getByRole("button", { name: "Add a Movie" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
