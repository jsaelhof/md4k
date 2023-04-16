import DbSelect from "./db-select";
import { fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import {
  GET_MOVIES_MOCK_FAMILY,
  renderWithProviders,
} from "../../../../../../utils/render-with-providers";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => navigateMock };
});

describe("db-select", () => {
  it("should render the list with the active list when closed", async () => {
    const { getByLabelText } = await renderWithProviders(<DbSelect />);

    await waitFor(() =>
      expect(getByLabelText("Choose a List")).toBeInTheDocument()
    );

    expect(getByLabelText(/Saturday/)).toBeInTheDocument();
  });

  it("should render the list with the available options and an option for making a new list", async () => {
    const { getByRole, getByLabelText } = await renderWithProviders(
      <DbSelect />
    );

    await waitFor(() =>
      expect(getByLabelText("Choose a List")).toBeInTheDocument()
    );

    fireEvent.mouseDown(
      getByRole("button", { name: "Saturday Night", expanded: false })
    );

    expect(
      getByRole("option", { name: /Saturday/, selected: true })
    ).toBeInTheDocument();
    expect(
      getByRole("option", { name: /Family/, selected: false })
    ).toBeInTheDocument();
    expect(
      getByRole("option", { name: /New List/, selected: false })
    ).toBeInTheDocument();
  });

  it("should push to the home page and set a new list when clicking on an existing list", async () => {
    const { getByRole, getByLabelText } = await renderWithProviders(
      <DbSelect />,
      {
        mocks: [GET_MOVIES_MOCK_FAMILY],
      }
    );

    await waitFor(() =>
      expect(getByLabelText("Choose a List")).toBeInTheDocument()
    );

    fireEvent.mouseDown(
      getByRole("button", { name: /Saturday/, expanded: false })
    );
    fireEvent.click(getByRole("option", { name: /Family/, selected: false }));

    expect(navigateMock).toHaveBeenCalledWith("/");
    expect(getByLabelText(/Family/)).toBeInTheDocument();
  });

  it("should push to the create page", async () => {
    const { getByRole, getByLabelText } = await renderWithProviders(
      <DbSelect />
    );

    await waitFor(() =>
      expect(getByLabelText("Choose a List")).toBeInTheDocument()
    );

    fireEvent.mouseDown(
      getByRole("button", { name: /Saturday/, expanded: false })
    );
    fireEvent.click(getByRole("option", { name: /New List/, selected: false }));

    expect(navigateMock).toHaveBeenCalledWith("/create");
  });
});
