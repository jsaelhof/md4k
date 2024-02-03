import { render, screen } from "@testing-library/react";
import ErrorDialog, { type ErrorDialogProps } from "./error-dialog";
import { vi } from "vitest";

interface LocalTestContext {
  props: ErrorDialogProps;
}

describe("error-dialog", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      open: true,
      content: "This is the error content",
      onConfirm: vi.fn(),
    };
  });

  it<LocalTestContext>("should display the content when open", ({ props }) => {
    render(<ErrorDialog {...props} />);
    expect(screen.getByText(props.content as string)).toBeInTheDocument();
  });

  it<LocalTestContext>("should not display the content when closed", ({
    props,
  }) => {
    render(<ErrorDialog {...props} open={false} />);
    expect(screen.queryByText(props.content as string)).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should call onConfirm when the dialog Ok button is pressed", async ({
    props,
    user,
  }) => {
    render(<ErrorDialog {...props} />);
    await user.click(screen.getByRole("button", { name: "Ok" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });
});
