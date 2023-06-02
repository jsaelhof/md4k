import { fireEvent, render, screen } from "@testing-library/react";
import DetailActions from "./detail-actions";
import { vi } from "vitest";

describe("detail-actions", () => {
  let props;

  beforeEach(() => {
    props = {
      movie: {
        locked: false,
      },
      onEdit: vi.fn(),
      onMarkWatched: vi.fn(),
      onToggleLock: vi.fn(),
      onDelete: vi.fn(),
    };
  });

  it("should render the edit button", () => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Edit"));
    expect(props.onEdit).toHaveBeenCalled();
  });

  it("should render the mark watched button", () => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Mark as Watched")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Mark as Watched"));
    expect(props.onMarkWatched).toHaveBeenCalled();
  });

  it("should render the mark delete button", () => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Delete"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it("should render the locked button with the lock icon when in the unlocked state", () => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Lock")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Lock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(true);
  });

  it("should render the locked button with the unlock icon when in the locked state", () => {
    render(
      <DetailActions {...props} movie={{ ...props.movie, locked: true }} />
    );
    expect(screen.getByLabelText("Unlock")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Unlock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(false);
  });
});
