import { fireEvent, render } from "@testing-library/react";
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
    const { getByText } = render(<ErrorDialog {...props} />);
    expect(getByText(props.content)).toBeInTheDocument();
  });

  it("should not display the content when closed", ({ props }) => {
    const { queryByText } = render(<ErrorDialog {...props} open={false} />);
    expect(queryByText(props.content)).not.toBeInTheDocument();
  });

  it("should call onConfirm when the dialog Ok button is pressed", ({
    props,
  }) => {
    const { getByRole } = render(<ErrorDialog {...props} />);
    fireEvent.click(getByRole("button", { name: "Ok" }));
    expect(props.onConfirm).toHaveBeenCalled();
  });
});
