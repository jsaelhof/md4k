import { render, waitFor, screen } from "@testing-library/react";
import NavHamburger from "./nav-hamburger";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { AppContext } from "../../../../../../context/app-context";

describe("nav-hamburger", () => {
  it("should render the default nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />);

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      await screen.findByRole("menuitem", { name: "Watched" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the 'watched' nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />, {
      route: "/watched",
    });

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      await screen.findByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />, { route: "/pick" });

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      screen.getByRole("menuitem", { name: "Pick again" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "Watched" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the 'add' nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />, { route: "/add" });

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      screen.getByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: "Watched" })
    ).not.toBeInTheDocument();
  });

  it("should render the 'edit' nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />, { route: "/edit/12345" });

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      screen.getByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: "Watched" })
    ).not.toBeInTheDocument();
  });

  it("should render the default 'create' nav options", async ({ user }) => {
    renderWithProviders(<NavHamburger />, {
      route: "/create",
    });

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      screen.getByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
  });

  it("should not render the menu on the 'create' screen when there are no lists created yet", async () => {
    render(
      <AppContext.Provider value={{ list: undefined }}>
        <MemoryRouter initialEntries={["/create"]}>
          <NavHamburger />
        </MemoryRouter>
      </AppContext.Provider>
    );

    await waitFor(() => {
      expect(screen.queryByTestId("MenuIcon")).not.toBeInTheDocument();
    });
  });

  it("should close when clicking outside", async ({ user }) => {
    renderWithProviders(<NavHamburger />);

    expect(await screen.findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(screen.getByTestId("MenuIcon"));

    expect(
      screen.getByRole("menuitem", { name: "Watched" })
    ).toBeInTheDocument();

    await user.click(document.body);

    await waitFor(() =>
      expect(
        screen.queryByRole("menuitem", { name: "Watched" })
      ).not.toBeInTheDocument()
    );
  });
});
