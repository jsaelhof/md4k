import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../../../utils/render-with-providers";
import Footer from "./footer";

describe("footer", () => {
  it("should render the nav with the correct urls", async () => {
    renderWithProviders(<Footer />);
    expect(screen.getByRole("link", { name: "Movies" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Watched" })).toHaveAttribute(
      "href",
      "/watched"
    );
  });
});
