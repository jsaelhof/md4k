import NavFull from "./nav-full";
import { renderWithProviders } from "../../../../../../utils/render-with-providers";

describe("nav-full", () => {
  it("should render the default nav options and list select component", async () => {
    const { getByRole, findByLabelText } = renderWithProviders(<NavFull />);
    expect(await findByLabelText("Choose a List")).toBeInTheDocument();
    expect(getByRole("button", { name: "Watched" })).toBeInTheDocument();
  });

  it("should render the 'pick' nav options", async () => {
    const { findByRole } = renderWithProviders(<NavFull />, {
      route: "/pick",
    });

    expect(
      await findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
    expect(
      await findByRole("button", { name: "Pick Again" })
    ).toBeInTheDocument();
  });

  it("should render the 'create' nav options", async () => {
    const { findByRole } = renderWithProviders(<NavFull />, {
      route: "/create",
    });

    expect(
      await findByRole("button", { name: "Return to Movies" })
    ).toBeInTheDocument();
  });
});
