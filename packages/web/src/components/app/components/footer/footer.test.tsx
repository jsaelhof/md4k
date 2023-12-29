import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../test-utils/render-with-providers";
import Footer from "./footer";

describe("footer", () => {
  it("should render the nav with the correct urls", () => {
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
