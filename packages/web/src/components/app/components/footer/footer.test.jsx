import { renderWithProviders } from "../../../../utils/render-with-providers";
import Footer from "./footer";

describe("footer", () => {
  it("should render the nav with the correct urls", async () => {
    const { getByRole } = renderWithProviders(<Footer />);
    expect(getByRole("link", { name: "Movies" })).toHaveAttribute("href", "/");
    expect(getByRole("link", { name: "Watched" })).toHaveAttribute(
      "href",
      "/watched"
    );
  });
});
