import { render, screen } from "@testing-library/react";
import ErrorDialog from "./error-dialog";
import { vi } from "vitest";

describe("error-dialog", () => {
  beforeEach((context) => {
    context.props = {
      open: true,
      content: "This is the error content",
      onConfirm: vi.fn(),
    };
  });

  it("should display the content when open", ({ props }) => {
    render(<ErrorDialog {...props} />);
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it("should not display the content when closed", ({ props }) => {
    render(<ErrorDialog {...props} open={false} />);
    expect(screen.queryByText(props.content)).not.toBeInTheDocument();
  });

  it("should call onConfirm when the dialog Ok button is pressed", async ({
    props,
    user,
  }) => {
    render(<ErrorDialog {...props} />);
    await user.click(screen.getByRole("button", { name: "Ok" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });
});
