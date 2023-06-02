import { renderWithProviders } from "../../../../utils/render-with-providers";
import TitleBar from "./titlebar";
import { fireEvent } from "@testing-library/react";
import { AppContext } from "../../../../context/app-context";
import { createMatchMedia } from "../../../../utils/create-match-media";
import { vi } from "vitest";

describe("titlebar", () => {
  it("should render the titlebar for the home screen", async () => {
    const { findByLabelText, findByAltText, findByRole } = renderWithProviders(
      <TitleBar />
    );

    expect(await findByRole("button", { name: "Watched" })).toBeInTheDocument(); // Find the Nav
    expect(await findByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
    expect(await findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
  });

  it("should render the titlebar for mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    const { findByLabelText, findByAltText, findByTestId } =
      renderWithProviders(<TitleBar />);

    expect(await findByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
    expect(await findByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
    expect(await findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
  });

  it("should render the titlebar for the pick screen on mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    const clearPick = vi.fn();

    const {
      findByLabelText,
      findByAltText,
      findByTestId,
      findByRole,
      getByRole,
    } = renderWithProviders(
      <AppContext.Provider value={{ movies: [], clearPick }}>
        <TitleBar />
      </AppContext.Provider>,
      { route: "/pick" }
    );

    expect(await findByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
    expect(await findByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
    expect(await findByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
    expect(
      await findByRole("button", { name: "Pick Again" })
    ).toBeInTheDocument(); // Find the Pick Again button

    fireEvent.click(getByRole("button", { name: "Pick Again" }));

    expect(clearPick).toHaveBeenCalled();
  });
});
