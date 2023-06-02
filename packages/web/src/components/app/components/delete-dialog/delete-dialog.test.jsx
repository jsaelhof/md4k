import { render, fireEvent } from "@testing-library/react";
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
    const { getByText } = render(<DeleteDialog open {...props} />);
    expect(getByText(props.content)).toBeInTheDocument();
  });

  it("should call onConfirm", async ({ props }) => {
    const { getByRole } = render(<DeleteDialog open {...props} />);
    fireEvent.click(getByRole("button", { name: "Delete" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it("should call onCancel", ({ props }) => {
    const { getByRole } = render(<DeleteDialog open {...props} />);
    fireEvent.click(getByRole("button", { name: "Cancel" }));
    expect(props.onCancel).toHaveBeenCalled();
  });

  it("should not show the dialog when open is false", ({ props }) => {
    const { queryByText } = render(<DeleteDialog open={false} {...props} />);
    expect(queryByText(props.content)).not.toBeInTheDocument();
  });

  it("should call onCancel when the backdrop on the dialog is clicked", async ({
    props,
  }) => {
    render(<DeleteDialog open {...props} />);
    fireEvent.click(document.getElementsByClassName("MuiBackdrop-root")[0]);
    expect(props.onCancel).toHaveBeenCalled();
  });
});
