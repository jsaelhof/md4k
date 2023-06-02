import { render } from "@testing-library/react";
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
    const { getByAltText } = render(<EmptyState {...props} />);
    expect(getByAltText("Empty image")).toBeInTheDocument();
    expect(getByAltText("Empty image").getAttribute("src")).toBe(props.imgSrc);
  });

  it("should render the quote when provided", ({ props }) => {
    const { getByText } = render(<EmptyState {...props} />);
    expect(getByText(props.quote)).toBeInTheDocument();
  });

  it("should not render the quote if omitted", ({ props }) => {
    const { queryByText } = render(<EmptyState />);
    expect(queryByText(props.quote)).not.toBeInTheDocument();
  });

  it("should render the message", ({ props }) => {
    const { getByText } = render(<EmptyState {...props} />);
    expect(getByText(props.message)).toBeInTheDocument();
  });

  it("should render the content when not in progress", ({ props }) => {
    const { getByText } = render(<EmptyState {...props} />);
    expect(getByText(props.content)).toBeInTheDocument();
  });

  it("should render the loading indicator when in progress", ({ props }) => {
    const { getByRole } = render(<EmptyState {...props} inProgress />);
    expect(getByRole("progressbar")).toBeInTheDocument();
  });
});
