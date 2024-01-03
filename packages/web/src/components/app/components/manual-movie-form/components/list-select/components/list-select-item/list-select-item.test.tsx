import { render, screen } from "@testing-library/react";
import ListSelectItem from "./list-select-item";
import {
  sourceLabels,
  sourceLogos,
} from "../../../../../../../../constants/sources";
import { sources } from "md4k-constants";

describe("list-select-item", () => {
  beforeEach((context) => {
    context.props = {
      images: sourceLogos,
      labels: sourceLabels,
      value: sources.NETFLIX,
      hideLabelForSelection: false,
    };
  });

  it("should render the list item", ({ props }) => {
    render(<ListSelectItem {...props} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      props.images[sources.NETFLIX]
    );
    expect(screen.getByText(props.labels[sources.NETFLIX])).toBeInTheDocument();
  });

  it("should omit the label when hideLabelForSelection is true", ({
    props,
  }) => {
    render(<ListSelectItem {...props} hideLabelForSelection={true} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      props.images[sources.NETFLIX]
    );
    expect(
      screen.queryByText(props.labels[sources.NETFLIX])
    ).not.toBeInTheDocument();
  });
});
