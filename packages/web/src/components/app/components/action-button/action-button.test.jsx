import { fireEvent, render, screen } from "@testing-library/react";
import ActionButton from "./action-button";
import Close from "@mui/icons-material/Close";
import { vi } from "vitest";

describe("action-button", () => {
  beforeEach((context) => {
    context.onClick = vi.fn();
    context.tooltip = "test tooltip";
    context.movie = {
      id: 123,
    };
  });

  it("should render the button", ({ onClick, tooltip }) => {
    render(<ActionButton Icon={Close} onClick={onClick} tooltip={tooltip} />);

    expect(screen.getByLabelText(tooltip)).toBeInTheDocument();
    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should return the movie data when clicked", ({
    onClick,
    tooltip,
    movie,
  }) => {
    render(
      <ActionButton
        Icon={Close}
        onClick={onClick}
        tooltip={tooltip}
        movie={movie}
      />
    );

    fireEvent.click(screen.getByLabelText(tooltip));
    expect(onClick).toHaveBeenCalledWith(movie);
  });

  it("should not fire onClick when disabled", ({ onClick, tooltip, movie }) => {
    render(
      <ActionButton
        Icon={Close}
        onClick={onClick}
        tooltip={tooltip}
        movie={movie}
        disabled
      />
    );

    fireEvent.click(screen.getByLabelText(tooltip));
    expect(onClick).not.toHaveBeenCalled();
  });
});
