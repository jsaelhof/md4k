import React from "react";
import { render, screen } from "@testing-library/react";
import FullDetailModal, { type FullDetailModalProps } from "./full-detail-modal";
import { vi } from "vitest";

// Mock the full detail component to make this test simpler
const onCloseMock = vi.fn();
vi.mock("../full-detail/full-detail", () => ({
  default: () => (
    <div aria-label="fullDetailMock">
      <button onClick={onCloseMock}>Close</button>
    </div>
  ),
}));

interface LocalTestContext {
  props: FullDetailModalProps;
}

describe("full-detail-modal", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      preload: false,
      open: false,
      centerPoint: { x: 0, y: 0 },
      onClose: vi.fn(),
      fullDetailProps: {
        movie: {
          title: "Test Title",
        },
      },
    };
  });

  it<LocalTestContext>("should not render the full detail mock or backdrop when open and preload are false", ({
    props,
  }) => {
    render(<FullDetailModal {...props} />);
    expect(screen.queryByLabelText("fullDetailMock")).not.toBeInTheDocument();
    expect(screen.queryByTestId("backdrop")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should render the full detail mock and backdrop when open is true", ({
    props,
  }) => {
    render(<FullDetailModal {...props} open={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the full detail mock but not the backdrop when preload is true", ({
    props,
  }) => {
    render(<FullDetailModal {...props} preload={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    expect(screen.queryByTestId("backdrop")).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should call onClose when clicking on the backdrop", async ({
    user,
    props,
  }) => {
    render(<FullDetailModal {...props} open={true} />);
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
    await user.click(screen.getByTestId("backdrop"));
    expect(props.onClose).toHaveBeenCalled();
  });

  it<LocalTestContext>("should call onClose when clicking on the full detail close button", async ({
    user,
    props,
  }) => {
    render(<FullDetailModal {...props} open={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
