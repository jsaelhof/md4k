import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ActionsView } from "./actions-view";
import { sources } from "md4k-constants";

describe("actions-view", () => {
  // Mock global window.open
  vi.stubGlobal("open", vi.fn());
  const originalWindowOpen = window.open;
  vi.spyOn(window, "open");

  beforeEach((context) => {
    context.props = {
      hasTrailer: true,
      onPlayTrailer: vi.fn(),
      title: "Test Movie",
      source: sources.NETFLIX,
    };
  });

  afterEach(() => {
    window.open = originalWindowOpen;
  });

  it("should render the watch trailer button when available", ({ props }) => {
    render(<ActionsView {...props} />);

    expect(
      screen.getByRole("button", { name: "Watch Trailer" })
    ).toBeInTheDocument();
  });

  it("should call the play trailer callback", async ({ props, user }) => {
    render(<ActionsView {...props} />);

    await user.click(screen.getByRole("button", { name: "Watch Trailer" }));
    expect(props.onPlayTrailer).toHaveBeenCalled();
  });

  it("should not render the trailer button when no trailer is available", ({
    props,
  }) => {
    render(<ActionsView {...props} hasTrailer={false} />);

    expect(
      screen.queryByRole("button", { name: "Watch Trailer" })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "No Trailer" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "No Trailer" })).toBeDisabled();
  });

  it("should render the stream button when available", ({ props }) => {
    render(<ActionsView {...props} />);
    expect(
      screen.getByRole("button", { name: "Stream Movie" })
    ).toBeInTheDocument();
  });

  it("should open the stream window when clicked", async ({ props, user }) => {
    render(<ActionsView {...props} />);

    await user.click(screen.getByRole("button", { name: "Stream Movie" }));
    expect(window.open).toHaveBeenCalledWith(
      "http://netflix.com/search?q=Test%20Movie",
      "movieView"
    );
  });

  it("should not render the stream button when the source is DVD", ({
    props,
  }) => {
    render(<ActionsView {...props} source={sources.DVD} />);
    expect(
      screen.queryByRole("button", { name: "Stream Movie" })
    ).not.toBeInTheDocument();
  });

  it("should not render the stream button and should render the torrent search when the source is NONE", ({
    props,
  }) => {
    render(<ActionsView {...props} source={sources.NONE} />);
    expect(
      screen.queryByRole("button", { name: "Stream Movie" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Torrent Search" })
    ).toBeInTheDocument();
  });

  it("should open the torrent search when clicked", async ({ props, user }) => {
    render(<ActionsView {...props} source={sources.NONE} />);

    await user.click(screen.getByRole("button", { name: "Torrent Search" }));
    expect(window.open).toHaveBeenCalledWith(
      "http://1337x.to/search/Test Movie/1/",
      "movieView"
    );
  });
});
