import { render, screen } from "@testing-library/react";
import PosterGridItem, { type PosterGridItemProps } from "./poster-grid-item";
import { vi } from "vitest";

interface LocalTestContext {
  props: PosterGridItemProps;
}

describe("poster-grid-item", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      height: 200,
      searchResult: {
        title: "Test Title",
        year: "2000",
      },
      delay: 0,
      onClick: vi.fn(),
    };
  });

  it<LocalTestContext>("should render the search result with info as year", ({
    props,
  }) => {
    render(<PosterGridItem {...props} />);
    expect(screen.getAllByText("Test Title")).toHaveLength(2);
    expect(screen.getByText("2000")).toBeInTheDocument();
  });

  it<LocalTestContext>("should call on click", async ({ props, user }) => {
    render(<PosterGridItem {...props} />);
    await user.click(screen.getByLabelText(/Test Title/));
    expect(props.onClick).toHaveBeenCalled();
  });

  it<LocalTestContext>("should not call on click when not provided", async ({
    props,
    user,
  }) => {
    render(<PosterGridItem {...props} onClick={undefined} />);
    await user.click(screen.getByLabelText(/Test Title/));
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
