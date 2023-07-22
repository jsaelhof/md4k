import NavFull from "./nav-full";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";
import { screen } from "@testing-library/dom";

describe("nav-full", () => {
  it("should render the default nav options and list select component", async () => {
    renderWithProviders(<NavFull />);
    expect(await screen.findByLabelText("Choose a List")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Watched" })).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async () => {
    renderWithProviders(<NavFull />, {
      route: "/pick",
    });

    expect(
      await screen.findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Pick Again" })
    ).toBeInTheDocument();
  });

  it("should render the 'create' nav options", async () => {
    renderWithProviders(<NavFull />, {
      route: "/create",
    });

    expect(
      await screen.findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
  });

  it("should render the 'watched' nav options", async () => {
    renderWithProviders(<NavFull />, {
      route: "/watched",
    });

    expect(
      await screen.findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
  });

  it("should render the 'add' nav options", async () => {
    renderWithProviders(<NavFull />, {
      route: "/add",
    });

    expect(
      await screen.findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Watched" })
    ).not.toBeInTheDocument();
  });

  it("should render the 'edit' nav options", async () => {
    renderWithProviders(<NavFull />, {
      route: "/edit/12345",
    });

    expect(
      await screen.findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Watched" })
    ).not.toBeInTheDocument();
  });
});
