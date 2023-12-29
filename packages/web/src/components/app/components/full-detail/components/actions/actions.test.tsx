import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Actions } from "./actions";

describe("actions", () => {
  beforeEach((context) => {
    context.props = {
      hasTrailer: true,
      onPlayTrailer: vi.fn(),
      children: <div>CHILD CONTENT</div>,
    };
  });

  it("should render the Watch Trailer button", ({ props }) => {
    render(<Actions {...props} />);

    expect(
      screen.getByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
  });

  it("should not render the trailer button when no trailer", ({ props }) => {
    render(<Actions {...props} hasTrailer={false} />);

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
    render(<Actions {...props} />);

    await user.click(screen.getByRole("button", { name: "Watch Trailer" }));
    expect(props.onPlayTrailer).toHaveBeenCalled();
  });

  it("should render children", ({ props }) => {
    render(<Actions {...props} />);

    expect(screen.getByText("CHILD CONTENT")).toBeInTheDocument();
  });
});
