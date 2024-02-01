import { render, screen } from "@testing-library/react";
import { MovieQuote } from "./movie-quote";

describe("movie-quote", () => {
  it("should display a quote", () => {
    render(<MovieQuote />);

    expect(screen.getByTestId("quote")).toBeInTheDocument();
    expect(screen.getByTestId("quote").childNodes).toHaveLength(2);
  });
});
