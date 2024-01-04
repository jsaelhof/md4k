import { render, screen } from "@testing-library/react";
import { sources } from "md4k-constants";
import { sourceLogos } from "../../../../../../../../../../constants/sources";
import Source from "./source";

describe("empty-list", () => {
  it("should render the correct source and logo", () => {
    render(<Source source={sources.NETFLIX} />);
    expect(screen.getByLabelText("Netflix")).toBeInTheDocument();
    expect(screen.getByLabelText("Netflix")).toHaveStyle(
      `background-image: url(${sourceLogos[sources.NETFLIX]})`
    );
  });
});
