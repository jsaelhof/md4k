import { waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import ProfileMenu from "./profile-menu";
import userEvent from "@testing-library/user-event";

describe("profile-menu", () => {
  beforeEach((context) => {
    context.user = userEvent.setup();
  });

  it("should render the menu button with the user image when closed", async () => {
    const { getByAltText } = renderWithProviders(<ProfileMenu />);
    expect(getByAltText("Test User")).toBeInTheDocument();
  });

  it("should render the profile menu when opened", async ({ user }) => {
    const { getByAltText, queryAllByAltText, getByText, getByRole } =
      renderWithProviders(<ProfileMenu />);
    expect(queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar
    await user.click(getByAltText("Test User"));
    expect(queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well
    expect(getByText("Test User")).toBeInTheDocument();
    expect(getByText("test@gmail.com")).toBeInTheDocument();
    expect(getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  it("should logout when clicked", async ({ user }) => {
    const { getByAltText, getByRole, queryAllByAltText } = renderWithProviders(
      <ProfileMenu />
    );
    await user.click(getByAltText("Test User"));
    await user.click(getByRole("button", { name: "Logout" }));
    await waitFor(() => expect(queryAllByAltText("Test User")).toHaveLength(1)); // Main button avatar only
  });

  it("should close when clicking outside", async ({ user }) => {
    const { getByAltText, queryByRole, queryAllByAltText } =
      renderWithProviders(<ProfileMenu />);

    await user.click(getByAltText("Test User"));

    expect(queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well

    await user.click(document.body);

    await waitFor(() => {
      expect(queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar
      expect(queryByRole("button", { name: "Logout" })).not.toBeInTheDocument();
    });
  });
});
