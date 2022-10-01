import { render } from "@testing-library/react";
import { sources } from "md4k-constants";
import { sourceLogos } from "../../../../../../../../../../constants/sources";
import Source from "./source";

describe("empty-list", () => {
  it("should render the correct source and logo", () => {
    const { getByLabelText } = render(<Source source={sources.NETFLIX} />);
    expect(getByLabelText("Netflix")).toBeInTheDocument();
    expect(getByLabelText("Netflix")).toHaveStyle(
      `background-image: url(${sourceLogos[sources.NETFLIX]})`
    );
  });
});
