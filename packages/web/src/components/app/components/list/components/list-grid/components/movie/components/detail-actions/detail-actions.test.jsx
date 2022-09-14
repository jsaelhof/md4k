import { fireEvent, render } from "@testing-library/react";
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
    const { getByLabelText } = render(<DetailActions {...props} />);
    expect(getByLabelText("Edit")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Edit"));
    expect(props.onEdit).toHaveBeenCalled();
  });

  it("should render the mark watched button", () => {
    const { getByLabelText } = render(<DetailActions {...props} />);
    expect(getByLabelText("Mark as Watched")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Mark as Watched"));
    expect(props.onMarkWatched).toHaveBeenCalled();
  });

  it("should render the mark delete button", () => {
    const { getByLabelText } = render(<DetailActions {...props} />);
    expect(getByLabelText("Delete")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Delete"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it("should render the locked button with the lock icon when in the unlocked state", () => {
    const { getByLabelText } = render(<DetailActions {...props} />);
    expect(getByLabelText("Lock")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Lock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(true);
  });

  it("should render the locked button with the unlock icon when in the locked state", () => {
    const { getByLabelText } = render(
      <DetailActions {...props} movie={{ ...props.movie, locked: true }} />
    );
    expect(getByLabelText("Unlock")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Unlock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(false);
  });
});
