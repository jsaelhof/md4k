import { render, screen, within } from "@testing-library/react";
import SourceSelect, { SourceSelectProps } from "./source-select";
import { Source, sources } from "md4k-constants";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { sourceLogos } from "../../../../../../constants/sources";

interface LocalTestContext {
  props: SourceSelectProps;
}

describe("list-select", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      value: Source.NETFLIX,
      onChange: vi.fn(),
    };
  });

  it<LocalTestContext>("should open the select and display the options", async ({
    props,
    user,
    t,
  }) => {
    render(<SourceSelect {...props} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText(t("common:sources.1"))
    ).toBeInTheDocument();

    await user.click(screen.getByRole("combobox"));

    sources.forEach((source) => {
      expect(
        screen.getByRole("option", { name: t(`common:sources.${source}`) })
      ).toBeInTheDocument();
      expect(
        within(
          screen.getByRole("option", { name: t(`common:sources.${source}`) })
        ).getByRole("img")
      ).toHaveAttribute("src", sourceLogos[source]);
    });

    await user.click(
      screen.getByRole("option", { name: t("common:sources.6") })
    );

    expect(props.onChange).toHaveBeenCalledWith(Source.DISNEY_PLUS);
  });
});
