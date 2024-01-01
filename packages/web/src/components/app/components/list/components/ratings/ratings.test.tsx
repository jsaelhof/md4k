import { render, screen } from "@testing-library/react";
import { ratingsSource } from "md4k-constants";
import Ratings from "./ratings";

describe("ratings", () => {
  it("should render the ratings correctly", () => {
    render(
      <Ratings
        ratings={{
          id: "tt0120737",
          [ratingsSource.IMDB]: "88%",
          [ratingsSource.ROTTEN_TOMATOES]: "91%",
          [ratingsSource.METACRITIC]: "92%",
        }}
      />
    );
    expect(screen.getByAltText(ratingsSource.IMDB)).toBeInTheDocument();
    expect(screen.getByText("88%")).toBeInTheDocument();
    expect(
      screen.getByAltText(ratingsSource.ROTTEN_TOMATOES)
    ).toBeInTheDocument();
    expect(screen.getByText("91%")).toBeInTheDocument();
    expect(screen.getByAltText(ratingsSource.METACRITIC)).toBeInTheDocument();
    expect(screen.getByText("92%")).toBeInTheDocument();
  });

  it("should render null when no ratings are provided", () => {
    render(<Ratings />);
    expect(screen.queryByAltText(ratingsSource.IMDB)).not.toBeInTheDocument();
    expect(
      screen.queryByAltText(ratingsSource.ROTTEN_TOMATOES)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByAltText(ratingsSource.METACRITIC)
    ).not.toBeInTheDocument();
  });
});
