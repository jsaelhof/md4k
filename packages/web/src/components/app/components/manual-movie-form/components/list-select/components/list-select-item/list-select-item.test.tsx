import { render, screen } from "@testing-library/react";
import ListSelectItem, { ListSelectItemProps } from "./list-select-item";
import { sourceLogos } from "../../../../../../../../constants/sources";
import { sources } from "md4k-constants";

interface LocalTestContext {
  props: ListSelectItemProps;
}

describe("list-select-item", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      variant: "sources",
      images: sourceLogos,
      value: sources.NETFLIX,
      hideLabelForSelection: false,
    };
  });

  it<LocalTestContext>("should render the list item", ({ props, t }) => {
    render(<ListSelectItem {...props} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      props.images?.[sources.NETFLIX]
    );
    expect(screen.getByText(t("common:sources.1"))).toBeInTheDocument();
  });

  it<LocalTestContext>("should omit the label when hideLabelForSelection is true", ({
    props,
    t,
  }) => {
    render(<ListSelectItem {...props} hideLabelForSelection={true} />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      props.images?.[sources.NETFLIX]
    );
    expect(screen.queryByText(t("common:sources.1"))).not.toBeInTheDocument();
  });
});
