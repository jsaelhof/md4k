import DbSelect from "./db-select";
import { screen } from "@testing-library/react";
import { vi } from "vitest";
import {
  GET_MOVIES_MOCK_FAMILY,
  renderWithProviders,
} from "../../../../../../test-utils/render-with-providers";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("db-select", () => {
  it("should render the list with the active list when closed", async () => {
    renderWithProviders(<DbSelect />);
    expect(await screen.findByLabelText("Choose a List")).toBeInTheDocument();
    expect(
      await screen.findByRole("combobox", { name: /Saturday/ })
    ).toBeInTheDocument();
  });

  it("should render the list with the available options and an option for making a new list", async ({
    user,
  }) => {
    renderWithProviders(<DbSelect />);

    expect(await screen.findByLabelText("Choose a List")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Saturday/ }));

    expect(
      screen.getByRole("option", { name: /Saturday/, selected: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /Family/, selected: false })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /New List/, selected: false })
    ).toBeInTheDocument();
  });

  it("should push to the home page and set a new list when clicking on an existing list", async ({
    user,
  }) => {
    renderWithProviders(<DbSelect />, {
      mocks: [GET_MOVIES_MOCK_FAMILY],
    });

    expect(await screen.findByLabelText("Choose a List")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Saturday/ }));
    await user.click(
      screen.getByRole("option", { name: /Family/, selected: false })
    );

    expect(navigateMock).toHaveBeenCalledWith("/");
    expect(
      screen.getByRole("combobox", { name: /Family/ })
    ).toBeInTheDocument();
  });

  it("should push to the create page", async ({ user }) => {
    renderWithProviders(<DbSelect />);

    expect(await screen.findByLabelText("Choose a List")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Saturday/ }));
    await user.click(
      screen.getByRole("option", { name: /New List/, selected: false })
    );

    expect(navigateMock).toHaveBeenCalledWith("/create");
  });
});
