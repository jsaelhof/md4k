import { renderWithProviders } from "../../../../utils/render-with-providers";
import TitleBar from "./titlebar";
import { fireEvent, screen } from "@testing-library/react";
import { AppContext } from "../../../../context/app-context";
import { createMatchMedia } from "../../../../utils/create-match-media";
import { vi } from "vitest";

describe("titlebar", () => {
  it("should render the titlebar for the home screen", async () => {
    renderWithProviders(<TitleBar />);

    expect(
      await screen.findByRole("button", { name: "Watched" })
    ).toBeInTheDocument(); // Find the Nav
    expect(
      await screen.findByLabelText("Movie Decider 4000")
    ).toBeInTheDocument(); // Find the Logo
    expect(await screen.findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
  });

  it("should render the titlebar for mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    renderWithProviders(<TitleBar />);

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
    expect(
      await screen.findByLabelText("Movie Decider 4000")
    ).toBeInTheDocument(); // Find the Logo
    expect(await screen.findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
  });

  it("should render the titlebar for the pick screen on mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    const clearPick = vi.fn();

    renderWithProviders(
      <AppContext.Provider value={{ movies: [], clearPick }}>
        <TitleBar />
      </AppContext.Provider>,
      { route: "/pick" }
    );

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
    expect(
      await screen.findByLabelText("Movie Decider 4000")
    ).toBeInTheDocument(); // Find the Logo
    expect(await screen.findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
    expect(
      await screen.findByRole("button", { name: "Pick Again" })
    ).toBeInTheDocument(); // Find the Pick Again button

    fireEvent.click(screen.getByRole("button", { name: "Pick Again" }));

    expect(clearPick).toHaveBeenCalled();
  });
});
