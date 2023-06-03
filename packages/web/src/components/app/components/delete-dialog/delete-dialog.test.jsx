import { render, screen } from "@testing-library/react";
import DeleteDialog from "./delete-dialog";
import { vi } from "vitest";

describe("delete-dialog", () => {
  beforeEach((context) => {
    context.props = {
      content: "This movie will be removed",
      onConfirm: vi.fn(),
      onCancel: vi.fn(),
    };
  });

  it("should show the content in the dialog", ({ props }) => {
    render(<DeleteDialog open {...props} />);
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it("should call onConfirm", async ({ props, user }) => {
    render(<DeleteDialog open {...props} />);
    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it("should call onCancel", async ({ props, user }) => {
    render(<DeleteDialog open {...props} />);
    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it("should not show the dialog when open is false", ({ props }) => {
    render(<DeleteDialog open={false} {...props} />);
    expect(screen.queryByText(props.content)).not.toBeInTheDocument();
  });

  it("should call onCancel when the backdrop on the dialog is clicked", async ({
    props,
    user,
  }) => {
    render(<DeleteDialog open {...props} />);
    await user.click(document.getElementsByClassName("MuiBackdrop-root")[0]);
    expect(props.onCancel).toHaveBeenCalled();
  });
});
