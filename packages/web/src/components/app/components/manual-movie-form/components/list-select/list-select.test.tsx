import { render, screen, within } from "@testing-library/react";
import ListSelect, { ListSelectProps } from "./list-select";
import { sourceLogos } from "../../../../../../constants/sources";
import { Source, sources } from "md4k-constants";
import { vi } from "vitest";

interface LocalTestContext {
  props: ListSelectProps;
}

describe("list-select", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      value: Source.NETFLIX,
      values: sources,
      label: "Netflix",
      hideLabelForSelection: false,
      onChange: vi.fn(),
      listSelectItemProps: {
        variant: "sources",
        images: sourceLogos,
      },
    };
  });

  it<LocalTestContext>("should open the select and display the options", async ({
    props,
    user,
    t,
  }) => {
    render(<ListSelect {...props} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText(t("common:sources.1"))
    ).toBeInTheDocument();

    await user.click(screen.getByRole("combobox"));

    sources.forEach((source) => {
      expect(
        screen.getByRole("option", { name: t(`common:sources.${source}`) })
      ).toBeInTheDocument();
    });

    await user.click(
      screen.getByRole("option", { name: t("common:sources.6") })
    );

    expect(props.onChange).toHaveBeenCalledWith(Source.DISNEY_PLUS);
  });
});
