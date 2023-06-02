import { render, waitFor } from "@testing-library/react";
import NavHamburger from "./nav-hamburger";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { AppContext } from "../../../../../../context/app-context";
import userEvent from "@testing-library/user-event";

describe("nav-hamburger", () => {
  beforeEach((context) => {
    context.user = userEvent.setup();
  });

  it("should render the default nav options", async ({ user }) => {
    const { getByTestId, findByTestId, findByRole } = renderWithProviders(
      <NavHamburger />
    );

    expect(await findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(getByTestId("MenuIcon"));

    expect(
      await findByRole("menuitem", { name: "Watched" })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the 'watched' nav options", async ({ user }) => {
    const { getByTestId, findByTestId, findByRole } = renderWithProviders(
      <NavHamburger />,
      {
        route: "/watched",
      }
    );

    expect(await findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(getByTestId("MenuIcon"));

    expect(
      await findByRole("menuitem", { name: "Movies" })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async ({ user }) => {
    const { getByTestId, getByRole, findByTestId, findByRole } =
      renderWithProviders(<NavHamburger />, { route: "/pick" });

    expect(await findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Pick again" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: "Movies" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: "Watched" })).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Saturday/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /Family/ })
    ).toBeInTheDocument();
    expect(
      await findByRole("menuitem", { name: /New List/ })
    ).toBeInTheDocument();
  });

  it("should render the default 'create' nav options", async ({ user }) => {
    const { getByTestId, findByTestId, getByRole } = renderWithProviders(
      <NavHamburger />,
      {
        route: "/create",
      }
    );

    expect(await findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Movies" })).toBeInTheDocument();
  });

  it("should not render the menu on the 'create' screen when there are no lists created yet", async () => {
    const { queryByTestId } = render(
      <AppContext.Provider value={{ list: undefined }}>
        <MemoryRouter initialEntries={["/create"]}>
          <NavHamburger />
        </MemoryRouter>
      </AppContext.Provider>
    );

    await waitFor(() => {
      expect(queryByTestId("MenuIcon")).not.toBeInTheDocument();
    });
  });

  it("should close when clicking outside", async ({ user }) => {
    const { getByTestId, findByTestId, getByRole, queryByRole } =
      renderWithProviders(<NavHamburger />);

    expect(await findByTestId("MenuIcon")).toBeInTheDocument();

    await user.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Watched" })).toBeInTheDocument();

    await user.click(document.body);

    await waitFor(() =>
      expect(
        queryByRole("menuitem", { name: "Watched" })
      ).not.toBeInTheDocument()
    );
  });
});
