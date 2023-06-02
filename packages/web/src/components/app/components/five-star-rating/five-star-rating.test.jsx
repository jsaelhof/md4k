import { render, screen } from "@testing-library/react";
import FiveStarRating from "./five-star-rating";

describe("five-star-rating", () => {
  it("should render the correct stars for the given ratings", () => {
    render(<FiveStarRating stars={3.5} />);
    expect(screen.getAllByAltText("star-full")).toHaveLength(3);
    expect(screen.getAllByAltText("star-half")).toHaveLength(1);
    expect(screen.getAllByAltText("star-outline")).toHaveLength(1);
  });

  it("should render zero stars", () => {
    render(<FiveStarRating stars={0} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(5);
  });

  it("should render a half star", () => {
    render(<FiveStarRating stars={0.5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(4);
  });

  it("should render one star", () => {
    render(<FiveStarRating stars={1} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(4);
  });

  it("should render one and a half stars", () => {
    render(<FiveStarRating stars={1.5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(3);
  });

  it("should render two stars", () => {
    render(<FiveStarRating stars={2} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(2);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(3);
  });

  it("should render two and a half stars", () => {
    render(<FiveStarRating stars={2.5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(2);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(2);
  });

  it("should render three stars", () => {
    render(<FiveStarRating stars={3} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(3);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(2);
  });

  it("should render three and a half stars", () => {
    render(<FiveStarRating stars={3.5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(3);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(1);
  });

  it("should render four stars", () => {
    render(<FiveStarRating stars={4} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(4);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(1);
  });

  it("should render four and a half stars", () => {
    render(<FiveStarRating stars={4.5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(4);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(1);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(0);
  });

  it("should render five stars", () => {
    render(<FiveStarRating stars={5} />);
    expect(screen.queryAllByAltText("star-full")).toHaveLength(5);
    expect(screen.queryAllByAltText("star-half")).toHaveLength(0);
    expect(screen.queryAllByAltText("star-outline")).toHaveLength(0);
  });
});
