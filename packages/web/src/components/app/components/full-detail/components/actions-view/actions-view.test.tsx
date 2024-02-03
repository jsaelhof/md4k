import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ActionsView, type ActionsViewProps } from "./actions-view";
import { Source } from "md4k-constants";

interface LocalTestContext {
  props: ActionsViewProps;
}

describe("actions-view", () => {
  // Mock global window.open
  vi.stubGlobal("open", vi.fn());
  const originalWindowOpen = window.open;
  vi.spyOn(window, "open");

  beforeEach<LocalTestContext>((context) => {
    context.props = {
      title: "Test Movie",
      source: Source.NETFLIX,
    };
  });

  afterEach(() => {
    window.open = originalWindowOpen;
  });

  it<LocalTestContext>("should render the stream button when available", ({
    props,
  }) => {
    render(<ActionsView {...props} />);
    expect(
      screen.getByRole("button", { name: "Stream Movie" })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should open the stream window when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsView {...props} />);

    await user.click(screen.getByRole("button", { name: "Stream Movie" }));
    expect(window.open).toHaveBeenCalledWith(
      "http://netflix.com/search?q=Test%20Movie",
      "movieView"
    );
  });

  it<LocalTestContext>("should not render the stream button when the source is DVD", ({
    props,
  }) => {
    render(<ActionsView {...props} source={Source.DVD} />);
    expect(
      screen.queryByRole("button", { name: "Stream Movie" })
    ).not.toBeInTheDocument();
  });

  it<LocalTestContext>("should not render the stream button and should render the torrent search when the source is NONE", ({
    props,
  }) => {
    render(<ActionsView {...props} source={Source.NONE} />);
    expect(
      screen.queryByRole("button", { name: "Stream Movie" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Torrent Search" })
    ).toBeInTheDocument();
  });

  it<LocalTestContext>("should open the torrent search when clicked", async ({
    props,
    user,
  }) => {
    render(<ActionsView {...props} source={Source.NONE} />);

    await user.click(screen.getByRole("button", { name: "Torrent Search" }));
    expect(window.open).toHaveBeenCalledWith(
      "http://1337x.to/search/Test Movie/1/",
      "movieView"
    );
  });
});
