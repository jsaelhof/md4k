import { renderWithProviders } from "../../../../utils/render-with-providers";
import TitleBar from "./titlebar";
import { fireEvent, waitFor } from "@testing-library/react";
import { AppContext } from "../../../../context/app-context";
import { createMatchMedia } from "../../../../utils/create-match-media";
import { vi } from "vitest";

describe("titlebar", () => {
  it("should render the titlebar for the home screen", async () => {
    const { getByLabelText, getByAltText, getByRole } =
      await renderWithProviders(<TitleBar />);

    await waitFor(() => {
      expect(getByRole("button", { name: "Watched" })).toBeInTheDocument(); // Find the Nav
      expect(getByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
      expect(getByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
    });
  });

  it("should render the titlebar for mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    const { getByLabelText, getByAltText, getByTestId } =
      await renderWithProviders(<TitleBar />);

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
      expect(getByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
      expect(getByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
    });
  });

  it("should render the titlebar for the pick screen on mobile", async () => {
    // Mock a 500 pixel width
    window.matchMedia = createMatchMedia(500);

    const clearPick = vi.fn();

    const { getByLabelText, getByAltText, getByTestId, getByRole } =
      await renderWithProviders(
        <AppContext.Provider value={{ movies: [], clearPick }}>
          <TitleBar />
        </AppContext.Provider>,
        { route: "/pick" }
      );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument(); // Find the Nav
      expect(getByLabelText("Movie Decider 4000")).toBeInTheDocument(); // Find the Logo
      expect(getByAltText("Test User")).toBeInTheDocument(); // Find the Profile Menu
      expect(getByRole("button", { name: "Pick Again" })).toBeInTheDocument(); // Find the Pick Again button
    });

    fireEvent.click(getByRole("button", { name: "Pick Again" }));

    expect(clearPick).toHaveBeenCalled();
  });
});
