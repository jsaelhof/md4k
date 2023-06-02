import { waitFor, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import ProfileMenu from "./profile-menu";
import userEvent from "@testing-library/user-event";

describe("profile-menu", () => {
  beforeEach((context) => {
    context.user = userEvent.setup();
  });

  it("should render the menu button with the user image when closed", async () => {
    renderWithProviders(<ProfileMenu />);
    expect(screen.getByAltText("Test User")).toBeInTheDocument();
  });

  it("should render the profile menu when opened", async ({ user }) => {
    renderWithProviders(<ProfileMenu />);
    expect(screen.queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar
    await user.click(screen.getByAltText("Test User"));
    expect(screen.queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well
    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  it("should logout when clicked", async ({ user }) => {
    renderWithProviders(<ProfileMenu />);
    await user.click(screen.getByAltText("Test User"));
    await user.click(screen.getByRole("button", { name: "Logout" }));
    await waitFor(() =>
      expect(screen.queryAllByAltText("Test User")).toHaveLength(1)
    ); // Main button avatar only
  });

  it("should close when clicking outside", async ({ user }) => {
    renderWithProviders(<ProfileMenu />);

    await user.click(screen.getByAltText("Test User"));

    expect(screen.queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well

    await user.click(document.body);

    await waitFor(() => {
      expect(screen.queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar
      expect(
        screen.queryByRole("button", { name: "Logout" })
      ).not.toBeInTheDocument();
    });
  });
});
