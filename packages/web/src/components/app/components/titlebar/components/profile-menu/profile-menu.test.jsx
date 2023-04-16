import { fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import ProfileMenu from "./profile-menu";

describe("profile-menu", () => {
  it("should render the menu button with the user image when closed", async () => {
    const { getByAltText } = await renderWithProviders(<ProfileMenu />);
    expect(getByAltText("Test User")).toBeInTheDocument();
  });

  it("should render the profile menu when opened", async () => {
    const { getByAltText, queryAllByAltText, getByText, getByRole } =
      await renderWithProviders(<ProfileMenu />);
    expect(queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar
    fireEvent.click(getByAltText("Test User"));
    expect(queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well
    expect(getByText("Test User")).toBeInTheDocument();
    expect(getByText("test@gmail.com")).toBeInTheDocument();
    expect(getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  it("should logout when clicked", async () => {
    const { getByAltText, getByRole, queryAllByAltText } =
      await renderWithProviders(<ProfileMenu />);
    fireEvent.click(getByAltText("Test User"));
    fireEvent.click(getByRole("button", { name: "Logout" }));
    await waitFor(() => expect(queryAllByAltText("Test User")).toHaveLength(1)); // Main button avatar only
  });

  it("should close when clicking outside", async () => {
    const { getByAltText, queryByRole, queryAllByAltText } =
      await renderWithProviders(<ProfileMenu />);

    fireEvent.click(getByAltText("Test User"));

    expect(queryAllByAltText("Test User")).toHaveLength(2); // Once opened, the larger avatar is in the menu as well

    // Couldn't figure out a better way to make this work.
    // There's some discussion here but seems the click away listener is not "armed" immediately due to a react bug.
    // I've needed to use a wait here to make sure the click away is ready.
    // https://github.com/mui/material-ui/issues/24783#issuecomment-774054038
    await waitFor(() => new Promise((r) => setTimeout(r, 1)));

    fireEvent.click(document);

    await waitFor(() => {
      expect(queryAllByAltText("Test User")).toHaveLength(1); // Main button avatar

      expect(queryByRole("button", { name: "Logout" })).not.toBeInTheDocument();
    });
  });
});
