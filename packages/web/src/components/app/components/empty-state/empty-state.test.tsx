import { render, screen } from "@testing-library/react";
import EmptyState, { type EmptyStateProps } from "./empty-state";

interface LocalTestContext {
  props: EmptyStateProps;
}

describe("empty-state", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      imgSrc: "/public/images/logo.png",
      quote: "A witty quote",
      message: "This is the message",
      content: "This is the content",
    };
  });

  it<LocalTestContext>("should render the image", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByAltText("Empty image")).toBeInTheDocument();
    expect(screen.getByAltText("Empty image").getAttribute("src")).toBe(
      props.imgSrc
    );
  });

  it<LocalTestContext>("should render the quote when provided", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.quote as string)).toBeInTheDocument();
  });

  it<LocalTestContext>("should not render the quote if omitted", ({
    props,
  }) => {
    render(<EmptyState {...props} quote={undefined} />);
    expect(screen.queryByText(props.quote as string)).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should render the message", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.message as string)).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the content when not in progress", ({
    props,
  }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.content as string)).toBeInTheDocument();
  });

  it<LocalTestContext>("should render the loading indicator when in progress", ({
    props,
  }) => {
    render(<EmptyState {...props} inProgress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
