import { render, screen } from "@testing-library/react";
import DetailActions, { type DetailActionsProps } from "./detail-actions";
import { vi } from "vitest";

interface LocalTestContext {
  props: DetailActionsProps;
}

describe("detail-actions", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      movie: {
        id: "1",
        title: "Test Title",
        locked: false,
      },
      onEdit: vi.fn(),
      onMarkWatched: vi.fn(),
      onToggleLock: vi.fn(),
      onDelete: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the edit button", async ({
    user,
    props,
  }) => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Edit")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Edit"));
    expect(props.onEdit).toHaveBeenCalled();
  });

  it<LocalTestContext>("should render the mark watched button", async ({
    user,
    props,
  }) => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Mark as Watched")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Mark as Watched"));
    expect(props.onMarkWatched).toHaveBeenCalled();
  });

  it<LocalTestContext>("should render the mark delete button", async ({
    user,
    props,
  }) => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Delete")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Delete"));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it<LocalTestContext>("should render the locked button with the lock icon when in the unlocked state", async ({
    user,
    props,
  }) => {
    render(<DetailActions {...props} />);
    expect(screen.getByLabelText("Lock")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Lock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(true);
  });

  it<LocalTestContext>("should render the locked button with the unlock icon when in the locked state", async ({
    user,
    props,
  }) => {
    render(
      <DetailActions {...props} movie={{ ...props.movie, locked: true }} />
    );
    expect(screen.getByLabelText("Unlock")).toBeInTheDocument();
    await user.click(screen.getByLabelText("Unlock"));
    expect(props.onToggleLock).toHaveBeenCalledWith(false);
  });
});
