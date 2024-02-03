import { render, screen } from "@testing-library/react";
import ListSelectItem, { ListSelectItemProps } from "./list-select-item";
import { Source } from "md4k-constants";
import { it, expect, beforeEach } from "vitest";

interface LocalTestContext {
  props: ListSelectItemProps;
}

describe("list-select-item", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      label: "testLabel",
      imageUrl: "https://www.test.com/logo.png",
      value: Source.NETFLIX,
      hideLabelForSelection: false,
    };
  });

  it<LocalTestContext>("should render the list item", ({ props }) => {
    render(<ListSelectItem {...props} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", props.imageUrl);
    expect(screen.getByText("testLabel")).toBeInTheDocument();
  });

  it<LocalTestContext>("should omit the label when hideLabelForSelection is true", ({
    props,
  }) => {
    render(<ListSelectItem {...props} hideLabelForSelection={true} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", props.imageUrl);
    expect(screen.queryByText("testLabel")).not.toBeInTheDocument();
  });
});
