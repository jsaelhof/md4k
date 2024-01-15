import { render, screen } from "@testing-library/react";
import DeleteDialog, { DeleteDialogProps } from "./delete-dialog";
import { vi } from "vitest";

interface LocalTestContext {
  props: Omit<DeleteDialogProps, "open">;
}

describe("delete-dialog", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      content: "This movie will be removed",
      onConfirm: vi.fn(),
      onCancel: vi.fn(),
    };
  });

  it<LocalTestContext>("should show the content in the dialog", ({ props }) => {
    render(<DeleteDialog open {...props} />);
    expect(screen.getByText(props.content as string)).toBeInTheDocument();
  });

  it<LocalTestContext>("should call onConfirm", async ({ props, user }) => {
    render(<DeleteDialog open {...props} />);
    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it<LocalTestContext>("should call onCancel", async ({ props, user }) => {
    render(<DeleteDialog open {...props} />);
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it<LocalTestContext>("should not show the dialog when open is false", ({
    props,
  }) => {
    render(<DeleteDialog open={false} {...props} />);
    expect(screen.queryByText(props.content as string)).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should call onCancel when the backdrop on the dialog is clicked", async ({
    props,
    user,
  }) => {
    render(<DeleteDialog open {...props} />);
    // Can't find a better way to click on the backdrop.
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(document.getElementsByClassName("MuiBackdrop-root")[0]);
    expect(props.onCancel).toHaveBeenCalled();
  });
});
