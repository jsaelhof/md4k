import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import { createMatchMedia } from "../../../../../../utils/create-match-media";
import { StarRatingLayout } from "./star-rating-layout";

describe("star-rating-layout", () => {
  beforeEach((context) => {
    context.ratings = {
      id: "tt2463208",
      IMDB: "67%",
      ROTTEN_TOMATOES: "68%",
      METACRITIC: "55%",
    };
  });

  it("should render the five-star rating and ratings breakdown", ({
    ratings,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);
    expect(screen.getAllByAltText(/star-/)).toHaveLength(5);
    expect(screen.getByAltText("IMDB")).toBeInTheDocument();
    expect(screen.getByText("67%")).toBeInTheDocument();
    expect(screen.getByAltText("ROTTEN_TOMATOES")).toBeInTheDocument();
    expect(screen.getByText("68%")).toBeInTheDocument();
    expect(screen.getByAltText("METACRITIC")).toBeInTheDocument();
    expect(screen.getByText("55%")).toBeInTheDocument();
  });

  it("should toggle the ratings breakdown with mouseEnter and mouseLeave when mobile", async ({
    ratings,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = starRatingLayout.lastChild;

    expect(ratingsBreakdown).not.toHaveStyle({
      marginLeft: "0px",
      opacity: "-0.25",
    });

    fireEvent.mouseEnter(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginLeft: "0px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    fireEvent.mouseLeave(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).not.toHaveStyle({
          marginLeft: "0px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it("should toggle the ratings breakdown with click when mobile", async ({
    ratings,
  }) => {
    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = starRatingLayout.lastChild;

    expect(ratingsBreakdown).not.toHaveStyle({
      marginLeft: "0px",
      opacity: "-0.25",
    });

    fireEvent.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginLeft: "0px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    fireEvent.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).not.toHaveStyle({
          marginLeft: "0px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it("should toggle the ratings breakdown with mouseEnter and mouseLeave when above mobile", async ({
    ratings,
  }) => {
    // Mock a 660 pixel width
    window.matchMedia = createMatchMedia(660);

    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = starRatingLayout.lastChild;

    expect(ratingsBreakdown).toHaveStyle({
      marginTop: "-16px",
      opacity: "-0.25",
    });

    fireEvent.mouseEnter(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "16px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    fireEvent.mouseLeave(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "-16px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });

  it("should toggle the ratings breakdown with click when above mobile", async ({
    ratings,
  }) => {
    // Mock a 660 pixel width
    window.matchMedia = createMatchMedia(660);

    render(<StarRatingLayout ratings={ratings} />);

    const starRatingLayout = screen.getByTestId("starRatingLayout");
    const ratingsBreakdown = starRatingLayout.lastChild;

    expect(ratingsBreakdown).toHaveStyle({
      marginTop: "-16px",
      opacity: "-0.25",
    });

    fireEvent.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "16px",
          opacity: "1",
        }),
      { timeout: 5000 }
    );

    fireEvent.click(starRatingLayout);
    await waitFor(
      () =>
        expect(ratingsBreakdown).toHaveStyle({
          marginTop: "-16px",
          opacity: "-0.25",
        }),
      { timeout: 5000 }
    );
  });
});
