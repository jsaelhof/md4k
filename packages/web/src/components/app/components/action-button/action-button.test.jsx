import { render, screen } from "@testing-library/react";
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

  it("should return the movie data when clicked", async ({
    onClick,
    tooltip,
    movie,
    user,
  }) => {
    render(
      <ActionButton
        Icon={Close}
        onClick={onClick}
        tooltip={tooltip}
        movie={movie}
      />
    );

    await user.click(screen.getByLabelText(tooltip));
    expect(onClick).toHaveBeenCalledWith(movie);
  });

  it("should not fire onClick when disabled", async ({
    onClick,
    tooltip,
    movie,
    user,
  }) => {
    render(
      <ActionButton
        Icon={Close}
        onClick={onClick}
        tooltip={tooltip}
        movie={movie}
        disabled
      />
    );

    await user.click(screen.getByLabelText(tooltip));
    expect(onClick).not.toHaveBeenCalled();
  });
});
