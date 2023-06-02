import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Expanded from "./expanded";
import { vi } from "vitest";

// Mock the full detail component to make this test simpler
const onCloseMock = vi.fn();
vi.mock("../../../../../../../full-detail/full-detail", () => ({
  default: () => (
    <div aria-label="fullDetailMock">
      <button onClick={onCloseMock}>Close</button>
    </div>
  ),
}));

describe("expanded", () => {
  let props;

  beforeEach(() => {
    props = {
      movie: {},
      preload: false,
      open: false,
      centerPoint: { x: 0, y: 0 },
      onClose: vi.fn(),
    };
  });

  it("should not render the full detail mock or backdrop when open and preload are false", () => {
    render(<Expanded {...props} />);
    expect(screen.queryByLabelText("fullDetailMock")).not.toBeInTheDocument();
    expect(screen.queryByTestId("backdrop")).not.toBeInTheDocument();
  });

  it("should render the full detail mock and backdrop when open is true", () => {
    render(<Expanded {...props} open={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
  });

  it("should render the full detail mock but not the backdrop when preload is true", () => {
    render(<Expanded {...props} preload={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    expect(screen.queryByTestId("backdrop")).not.toBeInTheDocument();
  });

  it("should call onClose when clicking on the backdrop", async () => {
    render(<Expanded {...props} open={true} />);
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("backdrop"));
    expect(props.onClose).toHaveBeenCalled();
  });

  it("should call onClose when clicking on the full detail close button", async () => {
    render(<Expanded {...props} open={true} />);
    expect(screen.getByLabelText("fullDetailMock")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
