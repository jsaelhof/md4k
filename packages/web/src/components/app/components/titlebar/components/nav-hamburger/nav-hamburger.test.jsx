import { fireEvent, render, waitFor } from "@testing-library/react";
import NavHamburger from "./nav-hamburger";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { AppContext } from "../../../../../../context/app-context";

describe("nav-hamburger", () => {
  it("should render the default nav options", async () => {
    const { getByTestId, getByRole } = await renderWithProviders(
      <NavHamburger />
    );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Watched" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Saturday/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Family/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /New List/ })).toBeInTheDocument();
  });

  it("should render the 'watched' nav options", async () => {
    const { getByTestId, getByRole } = await renderWithProviders(
      <NavHamburger />,
      { route: "/watched" }
    );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Movies" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Saturday/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Family/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /New List/ })).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async () => {
    const { getByTestId, getByRole } = await renderWithProviders(
      <NavHamburger />,
      { route: "/pick" }
    );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Pick again" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: "Movies" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: "Watched" })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Saturday/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /Family/ })).toBeInTheDocument();
    expect(getByRole("menuitem", { name: /New List/ })).toBeInTheDocument();
  });

  it("should render the default 'create' nav options", async () => {
    const { getByTestId, getByRole } = await renderWithProviders(
      <NavHamburger />,
      { route: "/create" }
    );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("MenuIcon"));

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

  it("should close when clicking outside", async () => {
    const { getByTestId, getByRole, queryByRole } = await renderWithProviders(
      <NavHamburger />
    );

    await waitFor(() => {
      expect(getByTestId("MenuIcon")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("MenuIcon"));

    expect(getByRole("menuitem", { name: "Watched" })).toBeInTheDocument();

    // Couldn't figure out a better way to make this work.
    // There's some discussion here but seems the click away listener is not "armed" immediately due to a react bug.
    // I've needed to use a wait here to make sure the click away is ready.
    // https://github.com/mui/material-ui/issues/24783#issuecomment-774054038
    await waitFor(() => new Promise((r) => setTimeout(r, 1)));

    fireEvent.click(document);

    await waitFor(() =>
      expect(
        queryByRole("menuitem", { name: "Watched" })
      ).not.toBeInTheDocument()
    );
  });
});
