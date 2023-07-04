import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ActionsAdd } from "./actions-add";

describe("actions-add", () => {
  beforeEach((context) => {
    context.props = {
      hasTrailer: true,
      onPlayTrailer: vi.fn(),
      onAddMovie: vi.fn(),
    };
  });

  it("should render the Watch Trailer button", ({ props }) => {
    render(<ActionsAdd {...props} />);

    expect(
      screen.getByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
  });

  it("should render the Add Movie button", ({ props }) => {
    render(<ActionsAdd {...props} />);

    expect(
      screen.getByRole("button", { name: "Add Movie" })
    ).toBeInTheDocument();
  });

  it("should not render the trailer button when no trailer", ({ props }) => {
    render(<ActionsAdd {...props} hasTrailer={false} />);

    expect(
      screen.queryByRole("button", { name: "Watch Trailer" })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "No Trailer" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "No Trailer" })).toBeDisabled();
  });

  it("should call the play trailer callback when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsAdd {...props} />);

    await user.click(screen.getByRole("button", { name: "Watch Trailer" }));
    expect(props.onPlayTrailer).toHaveBeenCalled();
  });

  it("should call the add movie callback when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsAdd {...props} />);

    await user.click(screen.getByRole("button", { name: "Add Movie" }));
    expect(props.onAddMovie).toHaveBeenCalled();
  });
});
