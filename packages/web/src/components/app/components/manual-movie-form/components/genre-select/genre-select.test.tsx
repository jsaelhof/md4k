import { render, screen, within } from "@testing-library/react";
import GenreSelect, { GenreSelectProps } from "./genre-select";
import { Genre, genres } from "md4k-constants";
import { beforeEach, describe, expect, it, vi } from "vitest";

interface LocalTestContext {
  props: GenreSelectProps;
}

describe("genre-select", () => {
  beforeEach<LocalTestContext>((context) => {
    context.props = {
      value: Genre.HORROR,
      onChange: vi.fn(),
    };
  });

  it<LocalTestContext>("should open the select and display the options", async ({
    props,
    user,
    t,
  }) => {
    render(<GenreSelect {...props} />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText(t("common:genres.10"))
    ).toBeInTheDocument();

    await user.click(screen.getByRole("combobox"));

    genres.forEach((genre) => {
      expect(
        screen.getByRole("option", { name: t(`common:genres.${genre}`) })
      ).toBeInTheDocument();
    });

    await user.click(
      screen.getByRole("option", { name: t("common:genres.6") })
    );

    expect(props.onChange).toHaveBeenCalledWith(Genre.FAMILY);
  });
});
