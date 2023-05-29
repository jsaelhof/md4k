import NavFull from "./nav-full";
import { waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

describe("nav-full", () => {
  it("should render the default nav options and list select component", async () => {
    const { getByRole, getByLabelText } = renderWithProviders(<NavFull />);

    await waitFor(() => {
      expect(getByLabelText("Choose a List")).toBeInTheDocument();
    });

    expect(getByRole("button", { name: "Watched" })).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async () => {
    const { getByRole } = renderWithProviders(<NavFull />, {
      route: "/pick",
    });

    await waitFor(() => {
      expect(
        getByRole("button", { name: "Return to Movies" })
      ).toBeInTheDocument();
      expect(getByRole("button", { name: "Pick Again" })).toBeInTheDocument();
    });
  });

  it("should render the 'create' nav options", async () => {
    const { getByRole } = renderWithProviders(<NavFull />, {
      route: "/create",
    });

    await waitFor(() =>
      expect(
        getByRole("button", { name: "Return to Movies" })
      ).toBeInTheDocument()
    );
  });
});
