import { render, screen } from "@testing-library/react";
import EmptyState from "./empty-state";

describe("empty-state", () => {
  beforeEach((context) => {
    context.props = {
      imgSrc: "/public/images/logo.png",
      quote: "A witty quote",
      message: "This is the message",
      content: "This is the content",
    };
  });

  it("should render the image", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByAltText("Empty image")).toBeInTheDocument();
    expect(screen.getByAltText("Empty image").getAttribute("src")).toBe(
      props.imgSrc
    );
  });

  it("should render the quote when provided", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.quote)).toBeInTheDocument();
  });

  it("should not render the quote if omitted", ({ props }) => {
    render(<EmptyState />);
    expect(screen.queryByText(props.quote)).not.toBeInTheDocument();
  });

  it("should render the message", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.message)).toBeInTheDocument();
  });

  it("should render the content when not in progress", ({ props }) => {
    render(<EmptyState {...props} />);
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it("should render the loading indicator when in progress", ({ props }) => {
    render(<EmptyState {...props} inProgress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
