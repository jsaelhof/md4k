import { render, screen } from "@testing-library/react";
import ListSelect from "./list-select";
import { sourceLabels, sourceLogos } from "../../../../../../constants/sources";
import { sources } from "md4k-constants";
import { vi } from "vitest";

describe("list-select", () => {
  beforeEach((context) => {
    context.props = {
      images: sourceLogos,
      labels: sourceLabels,
      value: sources.NETFLIX,
      values: sources,
      hideLabelForSelection: false,
      onChange: vi.fn(),
    };
  });

  it("should open the select and display the options", async ({
    props,
    user,
  }) => {
    render(<ListSelect {...props} />);

    expect(
      screen.getByRole("button", { name: sourceLabels[sources.NETFLIX] })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: sourceLabels[sources.NETFLIX] })
    );

    Object.values(sources).forEach((source) => {
      expect(
        screen.getByRole("option", { name: sourceLabels[source] })
      ).toBeInTheDocument();
    });

    await user.click(
      screen.getByRole("option", { name: sourceLabels[sources.DISNEY_PLUS] })
    );

    expect(props.onChange).toHaveBeenCalledWith(sources.DISNEY_PLUS);
  });
});
